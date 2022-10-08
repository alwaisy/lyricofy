<script setup lang="ts">
import { genres } from '@/data/genresList';
import { useApiStore } from '@/stores/useApiStore';
import { ref, watch } from 'vue';
import { SongCard } from '@/components';

const api = useApiStore();

const genreSelected = ref('POP');

await api.getSongsByGenre(genreSelected.value);

watch(genreSelected, async () => {
  await api.getSongsByGenre(genreSelected.value);
  console.log(api.topCharts, api.error);
});
</script>

<template>
  <div class="flex flex-col">
    <div
      class="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10"
    >
      <h2 class="font-bold text-3xl text-white text-left">Discover</h2>
      <select
        class="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        v-model="genreSelected"
      >
        <option v-for="genre in genres" :key="genre.id" :value="genre.value">
          {{ genre.title }}
        </option>
      </select>
    </div>
    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <SongCard
        v-for="(chart, i) in api.topCharts.slice(0, 17) || []"
        :key="i"
        :chart="chart"
        :i="i"
      />
      <SongCard
        v-for="(chart, i) in api.topCharts.slice(18, 50) || []"
        :key="i"
        :chart="chart"
        :i="i"
      />
    </div>
  </div>
</template>
