<script lang="ts" setup>
import PlayPause from './PlayPause.vue';
const props = defineProps<{
  song: any;
  i: any;
  artistId: any;
  isPlaying: any;
  activeSong: any;
}>();
</script>

<template>
  <div
    :class="[
      props.activeSong?.title === props.song?.title
        ? 'bg-[#4c426e]'
        : 'bg-transparent'
    ]"
    class="py-2 p-4 rounded-lg cursor-pointer mb-2 w-full flex flex-row items-center hover:bg-[#4c426e]"
  >
    <h3 class="font-bold text-base text-white mr-3">{{ i + 1 }}.</h3>
    <div class="flex-1 flex flex-row justify-between items-center">
      <img
        class="w-20 h-20 rounded-lg"
        :src="{props.artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart}"
        :alt="song?.title"
      />
      <div class="flex-1 flex flex-col justify-center mx-3">
        <RouterLink :to="`/songs/${song.key}`" v-if="!props.artistId">
          <p class="text-xl font-bold text-white">
            {{ song?.title }}
          </p>
        </RouterLink>

        <p v-else class="text-xl font-bold text-white">
          {{ song?.attributes?.name }}
        </p>

        <p class="text-base text-gray-300 mt-1">
          {{ props.artistId ? song?.attributes?.albumName : song?.subtitle }}
        </p>
      </div>
    </div>

    <PlayPause
      v-if="!props.artistId"
      :isPlaying="props.isPlaying"
      :activeSong="props.activeSong"
      :song="props.song"
    />
  </div>
</template>
