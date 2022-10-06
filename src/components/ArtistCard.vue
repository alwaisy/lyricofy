<template>
  <div
    class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
    <img
      alt="song_img"
      :src="$attrs.track?.images?.coverart"
      class="w-full h-56 rounded-lg"
    />
    <p class="mt-4 font-semibold text-lg text-white truncate">
      {{ $attrs.track?.subtitle }}
    </p>
  </div>
</template>
