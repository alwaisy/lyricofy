import http from '@/hooks/useHttp';
import { defineStore } from 'pinia';
import axios from 'axios';

interface IState {
  topCharts: [];
  songsByGenre: [];
  error: Error | unknown;
}

export const useApiStore = defineStore('api_store', {
  state: () =>
    ({
      topCharts: [],
      error: ''
    } as IState),

  getters: {},

  actions: {
    getTopCharts: async function () {
      const endpoint = `${import.meta.env.VITE_BASE_API_URL}/charts/world`;
      // console.log(endpoint);

      const self = this;

      try {
        const { data } = await http.get(endpoint);
        // console.log(response.data);
        self.topCharts = data;
      } catch (error) {
        // console.error(error);
        self.error = error;
      }
    },

    getSongsByGenre: async function (genre: string) {
      const endpoint = `${
        import.meta.env.VITE_BASE_API_URL
      }/charts/genre-world`;

      const qParams = {
        params: { genre_code: genre }
      };

      console.log(endpoint);

      const self = this;

      try {
        const { data } = await http.get(endpoint, qParams);
        // console.log(response.data);
        self.topCharts = data;
      } catch (error) {
        // console.error(error);
        self.error = error;
      }
    }
  }
});
