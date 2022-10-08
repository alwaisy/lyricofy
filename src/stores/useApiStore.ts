import http from '@/hooks/useHttp';
import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

interface ISongDetails {
  title: string;
  subtitle: string;
  coverart: string;
  artistID: string;
  lyrics: string[];
}
interface IArtistDetails {
  title: string;
  subtitle: string;
  coverart: string;
  artistID: string;
  songs: Record<string, unknown>;
}

interface IState {
  topCharts: [];
  songsByGenre: [];
  songsByCountry: [];
  songsBySearch: [];
  songDetails: ISongDetails;
  relatedSongs: [];
  artistDetails: IArtistDetails;

  error: Error | unknown;
}

export const useApiStore = defineStore('api_store', {
  state: () =>
    ({
      topCharts: [],
      songsByGenre: [],
      songsByCountry: [],
      songsBySearch: [],
      songDetails: {},
      relatedSongs: [],
      artistDetails: {},

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
        // console.log(data);
        self.topCharts = data;
      } catch (error) {
        // console.error(error);
        self.error = error;

        const toast = useToast();
        const errorMsg = ref(`Error: ${error}`);
        toast.error(errorMsg.value);
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

        const toast = useToast();
        const errorMsg = ref(`Error: ${error}`);
        toast.error(errorMsg.value);
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

        const toast = useToast();
        const errorMsg = ref(`Error: ${error}`);
        toast.error(errorMsg.value);
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

        const toast = useToast();
        const errorMsg = ref(`Error: ${error}`);
        toast.error(errorMsg.value);
      }
    },

    getSongDetails: async function (songId: string) {
      const endpoint = `${import.meta.env.VITE_BASE_API_URL}/tracks/details`;

      console.log(songId, '^');

      const qParams = {
        params: { track_id: songId }
      };

      // console.log(endpoint);

      const self = this;

      try {
        const { data } = await http.get(endpoint, qParams);
        // console.log(data);
        self.songDetails.title = data.title;
        self.songDetails.subtitle = data.subtitle;
        self.songDetails.coverart = data.images.coverart;
        self.songDetails.artistID = data.artists[0].adamid;
        self.songDetails.lyrics = [...data.sections[1].text];
      } catch (error) {
        // console.error(error);
        self.error = error;

        const toast = useToast();
        const errorMsg = ref(`Error: ${error}`);
        toast.error(errorMsg.value);
      }
    },

    getSongRelated: async function (songId: string) {
      const endpoint = `${import.meta.env.VITE_BASE_API_URL}/tracks/related`;

      console.log(songId, '^');

      const qParams = {
        params: { track_id: songId }
      };

      // console.log(endpoint);

      const self = this;

      try {
        const { data } = await http.get(endpoint, qParams);
        // console.log(data);
        self.relatedSongs = data;
      } catch (error) {
        // console.error(error);
        self.error = error;

        const toast = useToast();
        const errorMsg = ref(`Error: ${error}`);
        toast.error(errorMsg.value);
      }
    },

    getArtistDetails: async function (artistId: string) {
      const endpoint = `${import.meta.env.VITE_BASE_API_URL}/artists/details`;

      console.log(artistId, '^');

      const qParams = {
        params: { artist_id: artistId }
      };

      // console.log(endpoint);

      const self = this;

      try {
        const { data } = await http.get(endpoint, qParams);
        console.log(data);

        self.artistDetails.title = data.artists[artistId].attributes?.name;
        self.artistDetails.subtitle = '';
        self.artistDetails.coverart = data.artists[
          artistId
        ].attributes?.artwork?.url
          .replace('{w}', '500')
          .replace('{h}', '500');
        self.artistDetails.artistID = '';
        self.artistDetails.songs = data.songs;
      } catch (error) {
        // console.error(error);
        self.error = error;

        const toast = useToast();
        const errorMsg = ref(`Error: ${error}`);
        toast.error(errorMsg.value);
      }
    }
  }
});
