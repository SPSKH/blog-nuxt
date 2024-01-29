<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
)

console.log(data)
</script>
<template>
  <main>
    <header>
      <h1>{{ data?.title }}</h1>
      <p>{{ data?.author }}</p>
    </header>
    <ContentRenderer :value="data" />
  </main>
</template>
