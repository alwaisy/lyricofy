<script setup lang="ts">
import { useEffect } from 'vue3-hooks';
const ref = useRef(null);
// eslint-disable-next-line no-unused-expressions
if (ref.current) {
  if (isPlaying) {
    ref.current.play();
  } else {
    ref.current.pause();
  }
}
useEffect(() => {
  ref.current.volume = volume;
}, [volume]);
// updates audio element only on seekTime change (and not on each rerender):
useEffect(() => {
  ref.current.currentTime = seekTime;
}, [seekTime]);
</script>
<template>
  <audio
    src="{activeSong?.hub?.actions[1]?.uri}"
    ref="{ref}"
    loop="{repeat}"
    onEnded="{onEnded}"
    onTimeUpdate="{onTimeUpdate}"
    onLoadedData="{onLoadedData}"
  />
</template>
<style scoped></style>
