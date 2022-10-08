<script setup lang="ts">
import { defineProps } from 'vue';
import type { RouteRecordName } from 'vue-router';

const props = defineProps<{ routeName: string | RouteRecordName }>();
</script>

<template>
  <div class="flex flex-row justify-between items-center">
    <h2 class="text-white font-bold text-2xl">Top Charts</h2>
    <RouterLink :to="{ name: props.routeName }">
      <p class="text-gray-300 text-base cursor-pointer">See more</p>
    </RouterLink>
  </div>
</template>
