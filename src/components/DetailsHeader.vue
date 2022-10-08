<script setup lang="ts">
import { defineProps } from 'vue';

interface IProps {
  title: string;
  subtitle: string;
  coverart: string;
  artistID: string;
}

const { song } = defineProps<{
  song: IProps;
}>();
</script>

<template>
  <div class="relative w-full flex flex-col">
    <div
      class="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"
    ></div>
    <div class="absolute inset-0 flex items-center">
      <img
        alt="profile"
        :src="song.coverart"
        class="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />
      <div class="ml-5">
        <p class="font-bold sm:text-3xl text-xl text-white">
          {{ song?.title }}
        </p>
        {{}}
        <!-- {{ `/artists/${song.title}` }} -->
        <RouterLink
          :to="`/artists/${song.artistID}`"
          class="text-base text-gray-400 mt-2"
        >
          {{ song?.subtitle }}
        </RouterLink>

        <!-- <p class="text-base text-gray-400 mt-2">{{ Pop }}</p> -->
      </div>
    </div>
    <div class="w-full sm:h-44 h-24"></div>
  </div>
</template>
