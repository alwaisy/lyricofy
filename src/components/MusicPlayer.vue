<script setup lang="ts">
import { useState } from '@/hooks';
import { useGlobalStore } from '@/stores/globalStore';
import { computed, ref, watch } from 'vue';
import { useEffect } from 'vue3-hooks';

const duration = ref(0);
const seekTime = ref(0);
const appTime = ref(0);
const volume = ref(0.3);
const repeat = ref(false);
const shuffle = ref(false);

const store = useGlobalStore();
// const time = ref(0);
/* useEffect(() => {
  if (currentSongs.length) store.playPause();
}, [currentIndex]);
 */
const audioRef = ref();
const getTime = (time: number) =>
  `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

/* useEffect(() => {
  audioRef.value.volume = volume;
}, [volume]);
// updates audio element only on seekTime change (and not on each rerender):
useEffect(() => {
  audioRef.value.currentTime = seekTime;
}, [seekTime]); */

// onMounted(() => {});
// computed(() => (audioRef.value.volume = volume.value));
// computed(() => (seekTime.value = audioRef.value.currentTime));

watch(seekTime, () => {
  audioRef.value.currentTime = seekTime.value;
  // console.log(audioRef.value.currentTime, 'ss');
});
watch(volume, () => {
  audioRef.value.volume = volume.value;
  // console.log(audioRef.value.volume, 'ss');
});

const updateSeekTime = () => {
  seekTime.value = appTime.value;
};
const setVolume = () => {
  console.log(volume.value);
};

const onTimeUpdate = (event: Event) => {
  appTime.value = (event.target as HTMLMediaElement).currentTime;
};
const onLoadedData = (event: Event) => {
  duration.value = (event.target as HTMLMediaElement).duration;
};

/* const handlePlayPause = () => {
  if (!isActive) return;

  if (isPlaying) {
    console.log('playing', audioRef);
    // audioRef.value?.play();
    store.playPause();
  } else {
    console.log('not playing');
    // audioRef.value?.pause();
    store.playPause();
  }
}; */
// const handlePlayPause = () => {
//   /* if (store.isActive === false) return;
//   console.log(store.isPlaying, store.isActive);

//   if (store.isPlaying) {
//     console.log(store.isPlaying, store.isActive, 'isPlaying');
//     store.playPause(false);
//   } else {
//     console.log(store.isActive, '!not playing');
//     store.playPause(true);
//   } */
//   if (!store.isActive) return;
//   // console.log(store.isPlaying, store.isActive, 'check');
//   if (store.isPlaying) {
//     return store.playPause(false);
//     console.log('ahm', store.isPlaying);
//   } else {
//     return store.playPause(true);
//   }
// };
const handlePlayPause = {
  play: audioRef.value?.play,
  pause: audioRef.value?.pause
};

/* const handleNextSong = () => {
  store.playPause(true);

  if (!shuffle) {
    store.nextSong((currentIndex + 1) % currentSongs.length);
  } else {
    store.nextSong(Math.floor(Math.random() * currentSongs.length));
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
}; */
</script>

<template>
  <div
    class="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10"
  >
    <div
      class="relative sm:px-12 px-8 w-full flex items-center justify-between"
    >
      <div class="flex-1 flex items-center justify-start">
        <div class="hidden sm:block h-16 w-16 mr-4">
          <img
            src="https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg"
            alt="cover art"
            class="rounded-full"
          />
        </div>
        <div class="w-[50%]">
          <p class="truncate text-white font-bold text-lg">SNAP</p>
          <p class="truncate text-gray-300">Rosa Linn</p>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center">
        <div class="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            color="white"
            class="hidden sm:block cursor-pointer"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            style="color: white"
          >
            <path
              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
            ></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            color="#FFF"
            class="cursor-pointer"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(255, 255, 255)"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path>
          </svg>
          <span v-if="store.isPlaying" @click="store.playPause(audioRef)">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              color="#FFF"
              class="cursor-pointer"
              height="45"
              width="45"
              xmlns="http://www.w3.org/2000/svg"
              style="color: rgb(255, 255, 255)"
            >
              <path
                d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
              ></path>
            </svg>
          </span>
          <span v-else @click="store.playPause(audioRef)">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              color="#FFF"
              class="cursor-pointer"
              height="45"
              width="45"
              xmlns="http://www.w3.org/2000/svg"
              style="color: rgb(255, 255, 255)"
            >
              <path
                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
              ></path>
            </svg>
          </span>

          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            color="#FFF"
            class="cursor-pointer"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(255, 255, 255)"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            color="white"
            class="hidden sm:block cursor-pointer"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            style="color: white"
          >
            <path
              fill-rule="evenodd"
              d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
            ></path>
            <path
              d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"
            ></path>
          </svg>
        </div>

        <div class="hidden sm:flex flex-row items-center">
          <button type="button" class="hidden lg:mr-4 lg:block text-white">
            -
          </button>
          <!-- <p class="text-white">0:00</p> -->
          <p class="text-white">
            {{ appTime === 0 ? '0:00' : getTime(appTime) }}
          </p>
          <input
            type="range"
            step="any"
            v-model="appTime"
            @input="updateSeekTime"
            min="0"
            max="duration"
            class="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
          />
          <!-- <p class="text-white">1:29</p> -->
          <p class="text-white">
            {{ duration === 0 ? '0:00' : getTime(duration) }}
          </p>
          <button type="button" class="hidden lg:ml-4 lg:block text-white">
            +
          </button>
        </div>
        <audio
          src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/6e/2b/f3/6e2bf33f-08c9-6286-b8c0-b7e7b8630d1b/mzaf_11852854497905823862.plus.aac.ep.m4a"
          __idm_id__="2113537"
          ref="audioRef"
          :loop="repeat"
          @timeupdate="onTimeUpdate($event)"
          @loadeddata="onLoadedData($event)"
        ></audio>
        {{}}
      </div>
      <div class="hidden lg:flex flex-1 items-center justify-end">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          color="#FFF"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
          style="color: rgb(255, 255, 255)"
        >
          <path
            d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"
          ></path>
        </svg>
        <input
          type="range"
          step="any"
          v-model="volume"
          min="0"
          max="1"
          @change="setVolume"
          class="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
        />
      </div>
    </div>
  </div>
</template>
