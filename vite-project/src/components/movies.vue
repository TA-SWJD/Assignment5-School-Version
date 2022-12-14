<!-- <script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useStore, useCart } from '../store/index.js';

const store = useStore();
</script>

<template>
    <div class="main">
        <div v-for = "movie in movies">
            <img v-if = "movie.poster" :src="'https://image.tmdb.org/t/p/w500' + movie.poster">
            <p>#{{ movie.id }}: {{ movie.title }}</p>
        </div>
    </div>
</template> -->

<script setup>
import axios from "axios";
import { useStore, useCart } from "../store/index.js";
import { ref } from "vue";

const store = useStore();
await store.getMovies();
const movies = store.movies;

</script>


<template>
  <div class="container">
    <div v-for=" (movie, index) in movies" class="movies">
        <p>
            #{{ movie.id }}: {{ movie.title }}
        </p>
          <img v-if="movie.poster" :src="'https://image.tmdb.org/t/p/w500' + movie.poster" class="image"/>
    </div>
  </div>
</template>

<style scoped>
</style>