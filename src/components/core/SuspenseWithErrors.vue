<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{ error: string }>();
</script>

<template>
  <slot name="error" :error="props.error" v-if="props.error" />
  <Suspense v-else>
    <template #default>
      <slot name="default" />
    </template>
    <template #fallback>
      <slot name="fallback" />
    </template>
  </Suspense>
</template>
