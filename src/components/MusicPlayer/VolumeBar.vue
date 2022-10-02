import React from 'react'; import { BsFillVolumeUpFill, BsVolumeDownFill,
BsFillVolumeMuteFill } from 'react-icons/bs'; const VolumeBar = ({ }) => ( );
export default VolumeBar;

<script lang="ts" setup>
const props = defineProps<{
  value: number;
  min: number;
  max: number;
  setVolume: any;
}>();
</script>
<template>
  <div class="hidden lg:flex flex-1 items-center justify-end">
    <BsFillVolumeUpFill
      v-if="props.value <= 1 && props.value > 0.5"
      :size="25"
      color="#FFF"
      @click="() => setVolume(0)"
    />
    <BsVolumeDownFill
      v-if="props.value <= 0.5 && props.value > 0"
      :size="25"
      color="#FFF"
      @click="() => setVolume(0)"
    />
    <BsFillVolumeMuteFill
      v-if="props.value === 0"
      :size="25"
      color="#FFF"
      @click="() => setVolume(1)"
    />
    <input
      type="range"
      step="any"
      :value="props.value"
      :min="min"
      :max="max"
      class="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
    />
  </div>
</template>

<style lang="scss"></style>
