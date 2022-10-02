<script setup lang="ts">
const props = defineProps<{
  isPlaying: boolean;
  isActive: boolean;
  activeSong: { title: string; subtitle: string; images: { coverart: string } };
}>();
</script>

<template>
  <div class="flex-1 flex items-center justify-start">
    <div
      :class="[
        props.isPlaying && props.isActive
          ? 'animate-[spin_3s_linear_infinite]'
          : ''
      ]"
      class="hidden sm:block h-16 w-16 mr-4"
    >
      <img
        :src="activeSong?.images?.coverart"
        alt="cover art"
        class="rounded-full"
      />
    </div>
    <div class="w-[50%]">
      <p class="truncate text-white font-bold text-lg">
        {{
          props.activeSong?.title ? props.activeSong?.title : 'No active Song'
        }}
      </p>
      <p class="truncate text-gray-300">
        {{
          props.activeSong?.subtitle
            ? props.activeSong?.subtitle
            : 'No active Song'
        }}
      </p>
    </div>
  </div>
</template>
