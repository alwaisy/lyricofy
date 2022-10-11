<script setup lang="ts">
import { PlayBtn, PauseBtn } from '@/assets/svg';
import { useStore } from '@/stores/useStore';

interface IArtists {
  adamid: string;
}

interface IActions {
  name: string;
  type: string;
  uri: string;
}

type TArtists = IArtists[];
type TActions = IActions[];

interface IProps {
  title: string;
  subtitle: string;
  images: {
    coverart: string;
  };
  artists: TArtists;
  hub: {
    actions?: TActions;
  };
}

const { song, songs, i } = defineProps<{
  song: IProps;
  songs: any[];
  i: number;
}>();

const store = useStore();

function handlePlay() {
  store.setActiveSong(song, songs, i);
  store.playPause();

  console.log(store.activeSong);
}
const handlePause = () => {
  store.playPause();
};

// console.log(store.activeSong);
</script>

<template>
  <PlayBtn v-if="!store.isPlaying" @click="handlePlay" />
  <PauseBtn v-else @click="store.playPause" />
</template>
