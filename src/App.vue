<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { Searchbar, Sidebar, TopPlay } from './components';
import { useGlobalStore } from './stores/globalStore';

const { activeSong } = useGlobalStore();
const route = useRoute();
</script>

<template>
  <div class="relative flex">
    <Sidebar />
    <div class="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
      <Searchbar />

      <div
        class="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse"
      >
        <div class="flex-1 h-fit pb-40">
          <RouterView />
        </div>
        <div class="xl:sticky relative top-0 h-fit">
          <TopPlay />
        </div>
      </div>
    </div>

    <div
      v-if="activeSong?.title"
      class="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10"
    >
      <MusicPlayer />
    </div>
  </div>
</template>

<style></style>
