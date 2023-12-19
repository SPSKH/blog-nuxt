<script setup lang="ts">
const socials = [
    { url: 'https://www.instagram.com/spskutnahora/', icon: 'instagram' },
    { url: 'https://www.facebook.com/voskh', icon: 'facebook' },
    { url: 'https://www.youtube.com/@vosspsajskutnahora4137', icon: 'youtube' },
    { url: 'https://www.linkedin.com/company/spskh/', icon: 'linkedin' },
    { url: 'https://github.com/SPSKH/blog-nuxt/', icon: 'github' },
]
</script>
<template>
    <footer>
        <div class="separator_sm">
            <h4>
                &#169; 2023 - Martin Černoch
            </h4>
            <span>|</span>
            <h4>
                Vytvořilo: <NuxtLink to="https://innodex.cz" target="_blank">Innodex</NuxtLink>
            </h4>
            <span>|</span>
            <h4>
                <NuxtLink to="mailto:cernochm@outlook.cz?subject=Kontakt přes blog.spskh" target="_blank">
                    Kontaktuj správce
                </NuxtLink>
            </h4>
        </div>
        <div class="separator_xl">
            <NuxtLink v-for="item in socials" :key="item.icon" :to="item.url" target="_blank">
                <i class="fa-brands fa-2xl fa-" :class="`fa-${item.icon}`"/>
            </NuxtLink>
        </div>
    </footer>
</template>