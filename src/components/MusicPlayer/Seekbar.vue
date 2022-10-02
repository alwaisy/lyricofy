<script lang="ts" setup>
const props = defineProps<{
  value: number;
  min: number;
  max: Number;
  setSeekTime: any;
  appTime: number;
}>();

const getTime = (time: number) =>
  `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
</script>

<template>
  <div class="hidden sm:flex flex-row items-center">
    <button
      type="button"
      @click="() => setSeekTime(appTime - 5)"
      class="hidden lg:mr-4 lg:block text-white"
    >
      -
    </button>
    <p class="text-white">
      {{ props.value === 0 ? '0:00' : getTime(props.value) }}
    </p>
    <input
      type="range"
      step="any"
      :value="props.value"
      :min="props.min"
      :max="props.max"
      @input="() => {}"
      class="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
    />
    <p class="text-white">{props.max === 0 ? '0:00' : getTime(props.max)}</p>
    <button
      type="button"
      @click="() => setSeekTime(props.appTime + 5)"
      class="hidden lg:ml-4 lg:block text-white"
    >
      +
    </button>
  </div>
</template>
