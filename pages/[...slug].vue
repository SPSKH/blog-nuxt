<script setup>
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
  <aside>
    <NuxtLink to="#jak-používat-bold-a-italic">Jak používat bold a italic</NuxtLink>
    <NuxtLink to="#příklad-použití-code-snippetu">Příklad použití code snippetu</NuxtLink>
  </aside>
  <main class="container">
    <ContentRenderer v-if="page.body" :value="page" />
    <div class="tags">
      <div v-for="item in page.tags" :key="item.tags" class="tag">
        <i class="fa-solid fa-tags fa-xl" />
        <span>{{ item }}</span>
      </div>
    </div>
  </main>
</template>
