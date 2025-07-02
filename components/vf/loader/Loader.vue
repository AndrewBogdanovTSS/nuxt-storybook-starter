<template>
  <svg data-test-id="vf-loader" viewBox="0 0 48 48">
    <circle
        cx="24"
        cy="24"
        fill="none"
        r="9"
        stroke="currentColor"
        stroke-width="2"
    >
      <animate attributeName="stroke-dasharray" dur="1.3s" repeatCount="indefinite" values="10,285;24,255;10,285" />
      <animateTransform
          attributeName="transform"
          dur="1.3s"
          from="0 24 24"
          repeatCount="indefinite"
          to="360 24 24"
          type="rotate"
      />
    </circle>
  </svg>
</template>
<script setup lang="ts">
</script>
