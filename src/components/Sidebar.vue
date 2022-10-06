<script setup lang="ts">
import { useState } from '@/hooks/useState';
import { menu } from '@/data/sidebarMenu';

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// const;
</script>

<template>
  <div class="absolute md:hidden block top-6 right-3">
    <svg
      v-if="!mobileMenuOpen"
      @click="setMobileMenuOpen(true)"
      stroke="currentColor"
      fill="none"
      stroke-width="0"
      viewBox="0 0 24 24"
      class="w-6 h-6 mr-2 text-white"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
    <svg
      v-else
      @click="setMobileMenuOpen(false)"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      class="w-6 h-6 mr-2 text-white"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
        ></path>
      </g>
    </svg>
  </div>

  <div class="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
    <img
      src="https://raw.githubusercontent.com/adrianhajdin/project_music_player/main/src/assets/logo.svg"
      alt="logo"
      class="w-full h-14 object-contain"
    />
    <div class="mt-10">
      <RouterLink
        v-for="link in menu"
        :key="link.id"
        class="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        :to="link.to"
      >
        <!-- <Discover /> -->
        <component :is="link.icon" />
        {{ link.title }}
      </RouterLink>
    </div>
  </div>

  <div
    v-if="mobileMenuOpen"
    class="absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition left-0"
  >
    <img
      src="https://raw.githubusercontent.com/adrianhajdin/project_music_player/main/src/assets/logo.svg"
      alt="logo"
      class="w-full h-14 object-contain"
    />
    <div class="mt-10">
      <RouterLink
        v-for="link in menu"
        :key="link.id"
        class="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        :to="link.to"
      >
        <!-- <Discover /> -->
        <component :is="link.icon" />
        {{ link.title }}
      </RouterLink>
    </div>
  </div>
</template>
