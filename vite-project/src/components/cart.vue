<script setup>
import { createApp } from "vue";
import { useCart } from "../store/index.js"

const cart = useCart();
</script>

<template>
    <div class="purchased" v-for="purchased in cart.purchase">
        <div class="display">
            <div class="name">
                {{ purchased.title }}
                <img :src="'https://image.tmdb.org/t/p/w500' + purchased.poster" class="poster">
            </div>
        </div>
    </div>
</template>

<style scoped>
.purchased{
    height:100%;
}
.name{
    color:black;
    display: grid;
    grid-template-columns: auto auto auto auto;
}
</style>