<script lang="ts" setup>
const props = defineProps<{
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: any;
  shuffle: boolean;
  setShuffle: any;
  currentSongs: string[];
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
}>();
</script>

<template>
  <div class="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat
      size="{20}"
      :color="repeat ? 'red' : 'white'"
      @click="() => setRepeat((prev: any) => !prev)"
      class="hidden sm:block cursor-pointer"
    />

    <MdSkipPrevious
      v-if="currentSongs?.length"
      size="30"
      color="#FFF"
      class="cursor-pointer"
      @click="handlePrevSong"
    />

    <BsFillPauseFill
      v-if="isPlaying"
      size="45"
      color="#FFF"
      @click="handlePlayPause"
      class="cursor-pointer"
    />

    <BsFillPlayFill
      v-else
      size="45"
      color="#FFF"
      @click="handlePlayPause"
      class="cursor-pointer"
    />
    <MdSkipNext
      v-if="currentSongs?.length"
      size="30"
      color="#FFF"
      class="cursor-pointer"
      @click="handleNextSong"
    />
    <BsShuffle
      size="20"
      :color="shuffle ? 'red' : 'white'"
      @click="() => setShuffle((prev: any) => !prev)"
      class="hidden sm:block cursor-pointer"
    />
  </div>
</template>

<style lang="scss"></style>
