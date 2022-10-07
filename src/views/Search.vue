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
  <div className="flex flex-col">
    <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
      Showing results for
      <span className="font-black">{{ $route.params.searchTerm }}</span>
    </h2>
    {{ api.error }}
    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      <SongCard
        v-for="song in api.songsBySearch"
        :key="song?.key"
        :song="song"
      />
    </div>
  </div>
</template>
