import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "d2efec38e7d74d12122672897f241cbf",
        }
      })).data.results;
      
      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: movie.poster_path,
        }
      });
    },
  }
});

export const useCart = defineStore('cart', {
  state: () => {
    return {
      purchase: [],
      count: 0,
    }
  },
  actions: {
    adding(movie) {
      this.purchase[this.count] = movie;
      this.count ++;
    },
    num(index) {
      return data[index];
    }
  }
})