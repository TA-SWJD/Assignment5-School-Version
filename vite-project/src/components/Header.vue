<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const navigate = (link) => {
    router.push(link);
}
</script>

<template>
    <div class="bar">
        dweidhewqidiw
        <router-link to="/Login" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">Login</button>
        </router-link>
    </div>
</template>

<style scoped>
.bar {
    width: max-content;
    color: black;
    height: 30px;
}
</style>