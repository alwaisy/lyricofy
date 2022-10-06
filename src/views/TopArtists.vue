<script lang="ts" setup>
/* import { updateState, state } from '@/composables/useTopCharts';
  import topChatsService from '@/services/topChartsService';
  
  const { data } = await topChatsService.getData();
  updateState(data);
  console.log(state); */
import { useApiStore } from '@/stores/useApiStore';
import { ArtistCard } from '@/components';
const store = useApiStore();

await store.getTopCharts();
console.log(store.topCharts);
</script>

<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-3xl text-white text-left mt-4 mb-10">
      Top artists
    </h2>
    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <ArtistCard
        v-for="track in store.topCharts"
        :key="track.key"
        :track="track"
      />
    </div>
  </div>
</template>
