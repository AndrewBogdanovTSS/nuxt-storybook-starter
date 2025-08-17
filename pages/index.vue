<template>
  <main>
    123
  </main>
</template>

<script lang="ts" setup>
const {$viewport} = useNuxtApp()

onMounted(() => {
  console.log('Mounted', $viewport)
})
</script>
