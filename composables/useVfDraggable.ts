interface DraggableOptions {
  preventDefault?: boolean
  axis: 'y' | 'x'
  onStart: (e: PointerEvent) => boolean
  onMove: (e: PointerEvent) => boolean
  onEnd: (e: PointerEvent) => void
}

export function useVfDraggable(
  target: Ref<HTMLElement | null>,
  options: DraggableOptions
) {
  const isDragging = ref(false)
  const isMoving = ref(false)

  const preventTouch = (e: TouchEvent) => {
    if (isMoving.value) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const handlePointerDown = async (e: PointerEvent) => {
    if (!target.value) return

    if (!options.onStart(e)) return

    if (options.preventDefault)
      e.preventDefault()

    isDragging.value = true

    if (e.pointerType === 'touch') {
      // Once the pointer down starts, it must disable the touch events because they conflict with it and can cause pointercancel
      target.value.addEventListener('touchstart', preventTouch, { passive: false, capture: true })
      target.value.addEventListener('touchmove', preventTouch, { passive: false, capture: true })
    }
  }

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.value) return

    if (options.axis === 'y' && !e.movementY) return
    if (options.axis === 'x' && !e.movementX) return

    isMoving.value = options.onMove(e)

    if (!isMoving.value) isDragging.value = false
  }

  const handleDragEnd = (e: PointerEvent) => {
    if (!isDragging.value) return

    isDragging.value = false
    isMoving.value = false
    options.onEnd(e)

    if (target.value) {
      target.value.removeEventListener('touchstart', preventTouch)
      target.value.removeEventListener('touchmove', preventTouch)
    }
  }

  const handlePointerCancel = (e: PointerEvent) => {
    handleDragEnd(e)
  }

  const handlePointerUp = (e: PointerEvent) => {
    handleDragEnd(e)
  }

  onMounted(() => {
    target.value?.addEventListener('pointerdown', handlePointerDown)
    target.value?.addEventListener('pointermove', handlePointerMove, { passive: false, capture: true })
    target.value?.addEventListener('pointerup', handlePointerUp)
    target.value?.addEventListener('pointercancel', handlePointerCancel)
  })

  onUnmounted(() => {
    target.value?.removeEventListener('pointermove', handlePointerMove)
    target.value?.removeEventListener('pointerup', handlePointerUp)
    target.value?.removeEventListener('pointercancel', handlePointerCancel)
    target.value?.removeEventListener('pointerdown', handlePointerDown)
  })

  return {
    isDragging,
    isMoving
  }
}
