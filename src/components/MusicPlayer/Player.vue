<script setup lang="ts">
import { ref } from 'vue';
import { useEffect } from 'vue3-hooks';

const audioRef = ref();

const props = defineProps<{
  activeSong: {
    hub: {
      actions?: [{}, { uri: string }];
    };
  };
  volume: number;
  isPlaying: string;
  seekTime: number;
  repeat: false;
  currentIndex: number;
  onEnded: () => void;
  onTimeUpdate: (event: Event) => void;
  onLoadedData: (event: Event) => void;
}>();

// TO DO
/* if (audioRef.value) {
  if (props.isPlaying) {
    ref.current.play();
  } else {
    ref.current.pause();
  }
} */
useEffect(() => {
  audioRef.value = props.volume;
}, [props.volume]);
// updates audio element only on seekTime change (and not on each rerender):
useEffect(() => {
  audioRef.value = props.seekTime;
}, [props.seekTime]);
</script>

<template>
  <audio
    :src="activeSong?.hub?.actions[1]?.uri"
    ref="audioRef"
    :loop="repeat"
    :onEnded="onEnded"
    :onTimeUpdate="onTimeUpdate"
    :onLoadedData="onLoadedData"
  />
</template>

<style scoped></style>
