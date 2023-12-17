<script setup lang="ts">
useSeoMeta({
    title: 'blog.spskh',
    ogTitle: 'blog.spskh',
    description: 'Články ohledně novinek v IT, studentských projektů či cokoli ze světa programování pro Vás připravují studenti Průmyslovky Kutná Hora!',
    ogDescription: 'Články ohledně novinek v IT, studentských projektů či cokoli ze světa programování pro Vás připravují studenti Průmyslovky Kutná Hora!'
})
</script>
<template>
    <header>
        <h1>blog.spskh</h1>
        <p>Články ohledně novinek v IT, studentských projektů či cokoli ze světa programování pro Vás připravují studenti Průmyslovky Kutná Hora!</p>
    </header>
    <main class="container">
        <ContentList path="/">
            <template #default="{ list }">
                <div v-for="article in list" :key="article._path">
                    <NuxtLink :to="article.path">
                        <article>
                            <img :src="article.img" :alt="article.title" />
                            <h2>
                                {{ article.title }}
                            </h2>
                            <p>{{ article.description }}</p>
                        </article>
                    </NuxtLink>
                </div>
            </template>
            <template #not-found>
                <p>No articles found.</p>
            </template>
        </ContentList>
    </main>
</template>