import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

interface IState {
  currentSongs: string[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: { title?: string };
  genreListId: string;
}

export const useGlobalStore = defineStore('g_store', {
  state: () =>
    ({
      currentSongs: [],
      currentIndex: 0,
      isActive: false,
      isPlaying: false,
      activeSong: {
        title: ''
      },
      genreListId: ''
    } as IState),

  getters: {},

  actions: {
    setActiveSong: function (payload: any) {
      this.activeSong = payload.song;

      if (payload?.data?.tracks?.hits) {
        this.currentSongs = payload.data.tracks.hits;
      } else if (payload?.data?.properties) {
        this.currentSongs = payload?.data?.tracks;
      } else {
        this.currentSongs = payload.data;
      }

      this.currentIndex = payload.i;
      this.isActive = true;
    },

    nextSong: function (payload: any) {
      if (this.currentSongs[payload]?.track) {
        this.activeSong = this.currentSongs[payload]?.track;
      } else {
        this.activeSong = this.currentSongs[payload];
      }

      this.currentIndex = payload;
      this.isActive = true;
    },

    prevSong: function (payload: any) {
      if (this.currentSongs[payload]?.track) {
        this.activeSong = this.currentSongs[payload]?.track;
      } else {
        this.activeSong = this.currentSongs[payload];
      }

      this.currentIndex = payload;
      this.isActive = true;
    },

    playPause: function (payload: any) {
      this.isPlaying = payload;
    },

    selectGenreListId: function (payload: any) {
      this.genreListId = payload;
    }
  }
});
