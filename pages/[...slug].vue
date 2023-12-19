<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Stránka nebyla nalezena.'})
}

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

useSeoMeta({
  title: ''
})
</script>
<template>
  <main class="container">
    <ContentRenderer v-if="page.body" :value="page" />
    <aside>
      <!-- <NuxtLink :links="mapContentNavigation(navigation)"/> -->
    </aside>
    <div class="tags">
      <div v-for="item in page.tags" :key="item.tags">
        <i class="fa-solid fa-tags fa-xl" />
        <span>{{ item }}</span>
      </div>
    </div>
  </main>
</template>
