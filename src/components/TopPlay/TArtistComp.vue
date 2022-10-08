<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import { useApiStore } from '@/stores/useApiStore';

const api = useApiStore();
await api.getTopCharts();

const topArtists = api.topCharts.slice(0, 5);
// console.log(topCharts);
</script>

<template>
  <Swiper
    slidesPerView="auto"
    :spaceBetween="Number(15)"
    freeMode
    centeredSlides
    centeredSlidesBounds
    :modules="[FreeMode]"
    class="mt-4"
  >
    <SwiperSlide
      v-for="(artist, i) in topArtists"
      :key="i"
      :style="{ width: '25%', height: 'auto' }"
      class="shadow-lg rounded-full animate-slideright"
    >
      <RouterLink :to="`/artists/${artist?.artists[0].adamid}`">
        <img
          :src="artist?.images?.background"
          alt="Name"
          class="rounded-full w-full object-cover"
        />
      </RouterLink>
    </SwiperSlide>
  </Swiper>
</template>
