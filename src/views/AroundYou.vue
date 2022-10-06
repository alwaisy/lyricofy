<script lang="ts" setup>
import { useApiStore } from '@/stores/useApiStore';
import axios from 'axios';
import { ref } from 'vue';
import { SongCard } from '@/components';

const res = await axios.get(
  `https://geo.ipify.org/api/v2/country?apiKey=${
    import.meta.env.VITE_GEO_API_KEY
  }`
);

const country = ref<string>(
  res?.data?.location.country === 'PK' ? 'BE' : res?.data?.location.country
);

const store = useApiStore();
await store.getSongsByCountry(country.value);
</script>

<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-3xl text-white text-left mt-4 mb-10">
      Around you
      <span class="font-black">{{
        res?.data?.location.country === 'PK'
          ? `(For your country no data) ${country}`
          : country
      }}</span>
    </h2>
    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <SongCard
        v-for="chart in store.songsByCountry"
        :key="chart.key"
        :chart="chart"
      />
    </div>
  </div>
</template>
