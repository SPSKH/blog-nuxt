<script setup>
useSeoMeta({
    title: 'blog.spskh',
    ogTitle: 'blog.spskh',
    description: 'Články ohledně novinek v IT, studentských projektů či cokoli ze světa technologií pro Vás připravují studenti Průmyslovky Kutná Hora!',
    ogDescription: 'Články ohledně novinek v IT, studentských projektů či cokoli ze světa technologií pro Vás připravují studenti Průmyslovky Kutná Hora!'
})
</script>
<template>
    <header>
        <h1>blog.spskh</h1>
        <p>Články ohledně novinek v IT, studentských projektů či cokoli ze světa technologií pro Vás připravují studenti Průmyslovky Kutná Hora!</p>
    </header>
    <main class="container">
        <ContentList path="/">
            <template #default="{ list }">
                <div class="article_section">
                    <div v-for="article in list" :key="article._path">
                        <NuxtLink :to="article.path">
                            <article class="animation_up">
                                    <section>
                                        <img :src="article.img" :alt="article.title" width="480" />
                                    </section>
                                    <section class="article_body">
                                        <div>
                                            <h2>
                                                {{ article.title }}
                                            </h2>
                                            <p>{{ article.description }}</p>
                                        </div>
                                        <div class="article_info">
                                            <span>{{ article.date }}</span>
                                            <span>|</span>
                                            <span>{{ article.author }}</span>
                                        </div>
                                    </section>
                            </article>
                        </NuxtLink>
                    </div>
                </div>
            </template>
            <template #not-found>
                <p>No articles found.</p>
            </template>
        </ContentList>
    </main>
</template>