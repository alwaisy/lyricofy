import http from '@/hooks/useHttp';
import { defineStore } from 'pinia';
import axios from 'axios';

interface IState {
  topCharts: [];
  songsByGenre: [];
  songsByCountry: [];
  songsBySearch: [];
  error: Error | unknown;
}

export const useApiStore = defineStore('api_store', {
  state: () =>
    ({
      topCharts: [],
      songsByGenre: [],
      songsByCountry: [],
      songsBySearch: [],
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
    },

    getSongsByCountry: async function (countryCode: string) {
      const endpoint = `${import.meta.env.VITE_BASE_API_URL}/charts/country`;
      // console.log(typeof countryCode, '^');

      const qParams = {
        params: { country_code: countryCode }
      };

      // console.log(endpoint);

      const self = this;

      try {
        const { data } = await http.get(endpoint, qParams);
        // console.log(data);
        self.songsByCountry = data;
      } catch (error) {
        // console.error(error);
        self.error = error;
      }
    },

    getSongsBySearch: async function (searchTerm: string) {
      const endpoint = `${import.meta.env.VITE_BASE_API_URL}/search/multi`;

      console.log(searchTerm, '^');

      const qParams = {
        params: { search_type: 'SONGS_ARTISTS', query: searchTerm }
      };

      // console.log(endpoint);

      const self = this;

      try {
        const { data } = await http.get(endpoint, qParams);
        // console.log(data);
        self.songsBySearch = data?.tracks?.hits.map(
          (song: { track: any }) => song.track
        );
      } catch (error) {
        // console.error(error);
        self.error = error;
      }
    }
  }
});
