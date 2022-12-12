<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const error = ref(false);
const username = ref("");
const password = ref("");

const login = () => {
    if (username.value === "Tymon" && password.value === "Assignment5") {
        router.push("./login");
    } else {
        error.value = true;
    }
}
</script>

<template>
    <!-- <div class="bar">
        <button type="button">Home</button>
        <button type="button">Movie</button>
    </div> -->
    <div class="box"></div>
    <div class=" homepage">
        <img src="https://cdn-images-1.medium.com/max/1200/1*ty4NvNrGg4ReETxqU2N3Og.png" width="140" height="100">
        <p>Welcome to Netflix <br> Unlimited movies, TV shows, and more.</p>
        <form @submit.prevent="login()">
            <input type="text" placeholder="Username" v-model="username" />
            <input type="password" placeholder="Password" v-model="password" />
            <input type="submit" value="Login" />
        </form>
        <div v-if="error">
            <p>Incorrect Username/Password!</p>
        </div>
    </div>
</template>

<style scoped>
.logo {
    align-items: center;
    justify-content: center;
}

/* .bar {
    height: 50px;
    background-color: black;
}

.bar > button {
    color: white;
    text-align: right;
}

.bar > button:hover {
    color: black;
    padding-right: 0%;
} */

.homepage {
    color: white;
    background-image: url(../assets/Netflix.webp);
    background-size: auto;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-size: 2.5rem;
}

.homepage > p {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
}
</style>