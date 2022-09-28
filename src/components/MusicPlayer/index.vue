<script lang="ts" setup>
import { useState } from '@/hooks';
import { useGlobalStore } from '@/stores/globalStore';
import { ref, watch } from 'vue';
import { useEffect } from 'vue3-hooks';
import Controls from './Controls.vue';
import Player from './Player.vue';
import Seekbar from './Seekbar.vue';
import Track from './Track.vue';
import VolumeBar from './VolumeBar.vue';

/* const duration = ref(0);
const seekTime = ref(0);
const appTime = ref(0);
const volume = ref(0.3);
const repeat = ref(false);
const shuffle = ref(false);
 */

const [duration, setDuration] = useState(0);
const [seekTime, setSeekTime] = useState(0);
const [appTime, setAppTime] = useState(0);
const [volume, setVolume] = useState(0.3);
const [repeat, setRepeat] = useState(false);
const [shuffle, setShuffle] = useState(false);

const {
  activeSong,
  currentSongs,
  currentIndex,
  isActive,
  isPlaying,
  nextSong,
  prevSong,
  playPause
} = useGlobalStore();

/* watch(
  () => currentIndex,
  () => {
    if (currentSongs.length) playPause(true);
  }
); */

useEffect(() => {
  if (currentSongs.length) playPause(true);
}, [currentIndex]);

const handlePlayPause = () => {
  if (!isActive) return;

  if (isPlaying) {
    playPause(false);
  } else {
    playPause(true);
  }
};

const handleNextSong = () => {
  playPause(false);

  if (!shuffle) {
    nextSong((currentIndex + 1) % currentSongs.length);
  } else {
    nextSong(Math.floor(Math.random() * currentSongs.length));
  }
};

const handlePrevSong = () => {
  if (currentIndex === 0) {
    prevSong(currentSongs.length - 1);
  } else if (shuffle) {
    prevSong(Math.floor(Math.random() * currentSongs.length));
  } else {
    prevSong(currentIndex - 1);
  }
};
</script>

<template>
  <div class="relative sm:px-12 px-8 w-full flex items-center justify-between">
    <Track
      :isPlaying="isPlaying"
      :isActive="isActive"
      :activeSong="activeSong"
    />
    <div class="flex-1 flex flex-col items-center justify-center">
      <Controls
        :isPlaying="isPlaying"
        :isActive="isActive"
        :repeat="repeat"
        :setRepeat="setRepeat"
        :shuffle="shuffle"
        :setShuffle="setShuffle"
        :currentSongs="currentSongs"
        :handlePlayPause="handlePlayPause"
        :handlePrevSong="handlePrevSong"
        :handleNextSong="handleNextSong"
      />
      <Seekbar
        :value="appTime"
        min="0"
        :max="duration"
        @input="(event: Event) => setSeekTime((event.target as HTMLInputElement).value)"
        :setSeekTime="setSeekTime"
        :appTime="appTime"
      />
      <Player
        :activeSong="activeSong"
        :volume="volume"
        :isPlaying="isPlaying"
        :seekTime="seekTime"
        :repeat="repeat"
        :currentIndex="currentIndex"
        :onEnded="handleNextSong"
        :onTimeUpdate="(event: Event) => setAppTime((event.target as HTMLElement).currentTime)"
        :onLoadedData="(event: Event) => setDuration((event.target as HTMLElement).duration)"
      />
    </div>
    <VolumeBar
      :value="volume"
      min="0"
      max="1"
      @change="(event: Event) => setVolume((event.target as HTMLInputElement).value)"
      :setVolume="setVolume"
    />
  </div>
</template>

<style lang="scss"></style>
