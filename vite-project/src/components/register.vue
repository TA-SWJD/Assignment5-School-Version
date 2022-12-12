<!-- <script setup>
import { ref } from "vue";

const data = ref(false);
const name = ref("");
const email = ref("");

const getData = () => {
    document.value = true;
}
</script>

<template>
    <div class="register-container">
        <form @submit.prevent="getData()">
            <input type="text" placeholder="Name" v-model="name" />
            <input type="email" placeholder="Email" v-model="email" />
            <input type="submit" value="Register" />
        </form>
        <div v-if="data" class="submitted">
            <p>You have submitted successfully!</p>
            <p>{{ name }}</p>
            <p>{{ email }}</p>
        </div>
    </div>
</template>

<style scoped>
.register-container form {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 0.5rem;
}

.submitted {
    color: white;
}
</style> -->