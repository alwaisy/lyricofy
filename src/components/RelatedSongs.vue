<script setup lang="ts">
import { useApiStore } from '@/stores/useApiStore';
import { useRoute } from 'vue-router';

// const props = defineProps<{ id: string }>();
const route = useRoute();
const api = useApiStore();

await api.getSongRelated(route.params.id.toString());

console.log(api.relatedSongs);
</script>

<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-3xl text-white">Related Songs:</h1>
    <div class="mt-6 w-full flex flex-col">
      <div
        v-for="(song, i) in api.relatedSongs"
        :key="Number(song.key)"
        class="w-full flex flex-row items-center hover:bg-[#4c426e] bg-transparent py-2 p-4 rounded-lg cursor-pointer mb-2"
      >
        <h3 class="font-bold text-base text-white mr-3">{{ i + 1 }}.</h3>
        <div class="flex-1 flex flex-row justify-between items-center">
          <img
            :src="song?.images?.coverart"
            class="w-20 h-20 rounded-lg"
            alt="R!CH B!TCH"
          />
          <div class="flex-1 flex flex-col justify-center mx-3">
            <RouterLink :to="`/songs/${song?.key}`">
              <p class="text-xl font-bold text-white">{{ song?.title }}</p>
            </RouterLink>
            <p class="text-base text-gray-300 mt-1">
              {{ song?.artists[0].alias }}
            </p>
          </div>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="text-gray-300"
          height="35"
          width="35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
