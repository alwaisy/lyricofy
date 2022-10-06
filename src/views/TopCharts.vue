<script lang="ts" setup>
/* import { updateState, state } from '@/composables/useTopCharts';
  import topChatsService from '@/services/topChartsService';
  
  const { data } = await topChatsService.getData();
  updateState(data);
  console.log(state); */
import { useApiStore } from '@/stores/useApiStore';
import { SongCard } from '@/components';
const store = useApiStore();

await store.getTopCharts();
console.log(store.topCharts);
</script>

<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-3xl text-white text-left mt-4 mb-10">
      Discover Top Charts
    </h2>

    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <SongCard
        v-for="chart in store.topCharts"
        :key="chart.key"
        :chart="chart"
      />
    </div>
  </div>
</template>
