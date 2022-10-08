<script setup lang="ts">
import { useApiStore } from '@/stores/useApiStore';
import { DetailsHeader } from '@/components';
import { computed, ref } from '@vue/runtime-core';

const { id } = defineProps<{ id: string }>();

const api = useApiStore();
await api.getArtistDetails(id);

console.log(typeof api.artistDetails);
const songs = ref<any[]>([]);
Object.entries(api.artistDetails.songs).forEach(async ([key, value]) => {
  await songs.value.push(value);
});

console.log(songs);
</script>

<template>
  <div class="flex flex-col">
    <DetailsHeader :song="api.artistDetails" />

    <div class="flex flex-col">
      <h1 class="font-bold text-3xl text-white">Related Songs:</h1>
      <div
        class="mt-6 w-full flex flex-col"
        v-for="(song, i) in songs"
        :key="song.key"
      >
        <div
          class="w-full flex flex-row items-center hover:bg-[#4c426e] bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2"
        >
          <h3 class="font-bold text-base text-white mr-3">{{ i + 1 }}.</h3>
          <div class="flex-1 flex flex-row justify-between items-center">
            <img
              class="w-20 h-20 rounded-lg"
              :src="
                song?.attributes?.artwork?.url
                  .replace('{w}', '125')
                  .replace('{h}', '125')
              "
            />
            <div class="flex-1 flex flex-col justify-center mx-3">
              <p class="text-xl font-bold text-white">
                {{ song?.attributes?.name }}
              </p>
              <p class="text-base text-gray-300 mt-1">
                {{ song?.attributes?.albumName }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
