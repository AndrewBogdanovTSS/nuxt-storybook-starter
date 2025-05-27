<template>
  <h1>Welcome Nuxt to Storybook</h1>
  <my-btn>Some text</my-btn>
  <pre>{{data}}</pre>
</template>

<script lang="ts" setup>
const config = useAppConfig()
const {data} = await useFetch('https://futuramaapi.com/api/random/character')
</script>
