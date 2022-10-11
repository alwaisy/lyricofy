<script setup lang="ts">
import { useState } from '@/hooks';
import { useStore } from '@/stores/useStore';
import { computed, onUpdated, ref, watch } from 'vue';
import { useEffect } from 'vue3-hooks';
import {
  Play,
  Pause,
  Next,
  Previous,
  Shuffle,
  VolumeDown,
  VolumeUp,
  VolumeMute,
  RepeatSong
} from '@/assets/svg';
import { storeToRefs } from 'pinia';

const duration = ref(0);
const seekTime = ref(0);
const appTime = ref(0);
const volume = ref<number>(0.3);
const repeat = ref(false);
const shuffle = ref(false);

const store = useStore();
// const time = ref(0);
/* useEffect(() => {
  if (currentSongs.length) store.playPause();
}, [currentIndex]);
 */
const audioRef = ref();
const getTime = (time: number) =>
  `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

const { isPlaying } = storeToRefs(useStore());
watch(seekTime, () => {
  audioRef.value.currentTime = seekTime.value;
  // console.log(audioRef.value.currentTime, 'ss');
});
watch(volume, () => {
  audioRef.value.volume = volume.value;
  // console.log(audioRef.value.volume, 'ss');
});

const handlePlayPause = () => {
  if (isPlaying.value) {
    setTimeout(() => {
      console.log('playing');

      return audioRef.value?.play();
    }, 500);
  } else {
    const playPromise = audioRef.value?.pause();
    store.playPause;
    console.log('paused');

    return playPromise;
  }
};

/* onUpdated(() => {
  handlePlayPause();
}); */

watch(
  isPlaying,
  () => {
    handlePlayPause();
  },
  { immediate: true }
);

const updateSeekTime = () => {
  seekTime.value = appTime.value;
};
const setVolume = (vol: number) => {
  console.log(volume.value);
  volume.value = vol;
};

const onTimeUpdate = (event: Event) => {
  appTime.value = (event.target as HTMLMediaElement).currentTime;
};
const onLoadedData = (event: Event) => {
  duration.value = (event.target as HTMLMediaElement).duration;
};

/* const handlePause = () => {
  // if (!store.isActive) return;

  audioRef.value?.pause();
  store.playPause();

  console.log('stopped');
};
const handlePlay = () => {
  audioRef.value?.play();
  store.playPause();

  console.log('played');
}; */

/* if (store.isPlaying) {
  audioRef.value?.play();
} else {
  audioRef.value?.pause();
} */

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

const setSeekTime = (timeVal: number) => {
  seekTime.value = timeVal;
};

const songForward = () => {
  setSeekTime(appTime.value + 5);
};
const songBackward = () => {
  setSeekTime(appTime.value - 5);
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
          <RepeatSong />
          <Previous />

          <Pause v-if="store.isPlaying" @click="store.playPause" />
          <Play v-else @click="store.playPause" />

          <Next />
          <Shuffle />
        </div>

        <div class="hidden sm:flex flex-row items-center">
          <button
            type="button"
            @click="songBackward"
            class="hidden lg:mr-4 lg:block text-white"
          >
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
          <button
            type="button"
            @click="songForward"
            class="hidden lg:ml-4 lg:block text-white"
          >
            +
          </button>
        </div>
        <audio
          :src="store.activeSong?.hub?.actions[1]?.uri"
          __idm_id__="2113537"
          ref="audioRef"
          :loop="repeat"
          @timeupdate="onTimeUpdate($event)"
          @loadeddata="onLoadedData($event)"
        ></audio>
        {{}}
      </div>
      <div class="hidden lg:flex flex-1 items-center justify-end">
        <VolumeDown v-if="volume <= 0.5 && volume > 0" @click="setVolume(0)" />
        <VolumeUp
          v-else-if="volume <= 1 && volume > 0.5"
          @click="setVolume(0)"
        />
        <VolumeMute v-else @click="setVolume(0.5)" />
        <input
          type="range"
          step="any"
          v-model="volume"
          min="0"
          max="1"
          @change="setVolume(volume)"
          class="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
        />
      </div>
    </div>
  </div>
</template>
