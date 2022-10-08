<script setup lang="ts">
import { SeeMore, TChartCard, TArtistComp } from './';
</script>

<template>
  <div
    class="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
  >
    <div class="w-full flex flex-col">
      <SeeMore routeName="top-charts" />
      <div class="mt-4 flex flex-col gap-1">
        <Suspense>
          <TChartCard />
          <template #fallback> Loading... </template>
        </Suspense>
      </div>
    </div>
    <div class="w-full flex flex-col mt-8">
      <SeeMore routeName="top-artists" />
      <Suspense>
        <TArtistComp />
        <template #fallback> Loading... </template>
      </Suspense>
    </div>
  </div>
</template>
