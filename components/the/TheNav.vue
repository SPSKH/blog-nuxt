<script setup>
const search = ref('')
const results = searchContent(search)
</script>
<template>
    <nav>
        <div>
            <h4>
                <NuxtLink to="/">
                    blog.spskh
                </NuxtLink>
            </h4>
        </div>
        <div>
            <input type="text" v-model="search" />
        </div>
        {{ results }}
    </nav>
</template>