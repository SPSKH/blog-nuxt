export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['js', 'ts', 'vue', 'json', 'bash', 'md']
    },
    experimental: {
      search: true
    }
  },
  css: ['~/assets/main.css'],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://kit.fontawesome.com/f6333c832d.js', defer: true, crossorigin:'anonymous' },
      ],
      htmlAttrs: {
        lang: 'cs'
      }
    }
  }
})
