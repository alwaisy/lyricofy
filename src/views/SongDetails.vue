<script setup lang="ts">
import { RelatedSongs, DetailsHeader } from '@/components';
import { useApiStore } from '@/stores/useApiStore';

const props = defineProps<{ id: string }>();
const api = useApiStore();
await api.getSongDetails(props.id);

console.log(api.songDetails);
</script>

<template>
  <div class="flex flex-col">
    {{ api.songDetails.title }}
    <DetailsHeader :song="api.songDetails" />
    <div class="mb-10">
      <h2 class="text-white text-3xl font-bold">Lyrics:</h2>
      <div class="mt-5">
        <p
          class="text-gray-400 text-base my-1"
          v-for="(line, i) in api.songDetails.lyrics"
          :key="i"
        >
          {{ line }}
        </p>
      </div>
    </div>
    <RelatedSongs />
  </div>
</template>
