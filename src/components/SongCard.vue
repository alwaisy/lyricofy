<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useRoute } from 'vue-router';
import { PlayPause } from '@/components';

const route = useRoute();

interface IArtists {
  adamid: string;
}

interface IActions {
  name: string;
  type: string;
  uri: string;
}

type TArtists = IArtists[];
type TActions = IActions[];

interface IProps {
  title: string;
  subtitle: string;
  images: {
    coverart: string;
  };
  artists: TArtists;
  hub: {
    actions?: TActions;
  };
}

const { chart, charts, i } = defineProps<{
  chart: IProps;
  charts: any[];
  i: number;
}>();

// console.log(chart.hub?.actions[1]?.uri);
</script>

<template>
  <div
    class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
    <div class="relative w-full h-56 group">
      <div
        class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
      >
        <PlayPause :song="chart" :songs="charts" :i="i" />
      </div>
      <img
        alt="song_img"
        :src="chart?.images?.coverart ? chart?.images?.coverart : undefined"
        class="w-full h-full rounded-lg"
      />
    </div>
    <div class="mt-4 flex flex-col">
      <p class="font-semibold text-lg text-white truncate">
        <RouterLink :to="`/songs/${chart.key}`">{{
          chart?.title ? chart?.title : null
        }}</RouterLink>
      </p>
      <p class="text-sm truncate text-gray-300 mt-1">
        <RouterLink
          :to="`/artists/${
            chart?.artists[0]?.adamid ? chart?.artists[0]?.adamid : null
          }`"
        >
          {{ chart?.subtitle ? chart?.subtitle : null }}
        </RouterLink>
      </p>
    </div>
  </div>
</template>
