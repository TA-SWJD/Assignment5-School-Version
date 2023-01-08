<script setup>
import HeaderVue2 from '../components/Header2.vue'
import MovieVue from '../components/movies.vue'

</script>

<template>
<div class="Homepage">
    <HeaderVue2 />
    <Suspense>
        <MovieVue />
    </Suspense>
</div>
</template>

<style scoped>

</style>