import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const actions = [{ uri: '' }];

interface IState {
  currentSongs: string[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: {
    title?: string;
    subtitle?: string;
    images?: { coverart?: string };
    hub?: {
      actions?: TActions;
    };
  };
  genreListId: string;
  genreSelected: string;
}

interface IActions {
  name: string;
  type: string;
  uri: string;
}
type TActions = IActions[];

export const useStore = defineStore('g_store', {
  state: () =>
    ({
      currentSongs: [],
      currentIndex: 0,
      isActive: false,
      isPlaying: false,
      activeSong: {},
      genreListId: '',
      genreSelected: 'Pop'
    } as IState),

  getters: {},

  actions: {
    setActiveSong: function (song: any, songs: any, i: any) {
      // console.log (songs);

      this.activeSong = song;
      if (songs?.tracks?.hits) {
        this.currentSongs = songs?.tracks.hits;
        console.log('track.hits');
      } else if (songs?.properties) {
        this.currentSongs = songs?.tracks;
        console.log('songs.tracks');
      } else {
        this.currentSongs = songs;
        console.log('songs');
      }

      this.currentIndex = i;
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

    playPause: function () {
      this.isPlaying = !this.isPlaying;
    },

    handlePlayPause: function (payload: any) {},

    selectGenre: function (payload: any) {
      this.genreSelected = payload;
    }
  }
});
