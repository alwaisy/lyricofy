<script setup lang="ts">
import { SongCard } from '@/components';
import { useApiStore } from '@/stores/useApiStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const api = useApiStore();

await api.getSongsBySearch(route.params.searchTerm.toString());
// console.log(api.songsBySearch);
</script>

<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-3xl text-white text-left mt-4 mb-10">
      Showing results for
      <span class="font-black">{{ $route.params.searchTerm }}</span>
    </h2>
    {{ api.error }}
    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <SongCard v-for="(song, i) in api.songsBySearch" :key="i" :chart="song" />
    </div>
  </div>
</template>
