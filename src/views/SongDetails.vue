<script setup lang="ts">
import { RelatedSongs } from '@/components';
</script>

<template>
  <div class="flex flex-col">
    <div class="relative w-full flex flex-col">
      <div
        class="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"
      ></div>
      <div class="absolute inset-0 flex items-center">
        <img
          alt="profile"
          src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/a4/0c/bd/a40cbd9d-bb38-8164-cd30-e107c8c7bb0e/22UMGIM83430.rgb.jpg/400x400cc.jpg"
          class="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div class="ml-5">
          <p class="font-bold sm:text-3xl text-xl text-white">Unholy</p>
          <a href="/artists/156488786"
            ><p class="text-base text-gray-400 mt-2">
              Sam Smith &amp; Kim Petras
            </p></a
          >
          <p class="text-base text-gray-400 mt-2">Pop</p>
        </div>
      </div>
      <div class="w-full sm:h-44 h-24"></div>
    </div>
    <div class="mb-10">
      <h2 class="text-white text-3xl font-bold">Lyrics:</h2>
      <div class="mt-5">
        <p class="text-gray-400 text-base my-1">
          Mummy don't know daddy's getting hot
        </p>
        <p class="text-gray-400 text-base my-1">
          At the body shop, doing something unholy
        </p>
        <p class="text-gray-400 text-base my-1">He lucky, lucky, yeah (ooh)</p>
        <p class="text-gray-400 text-base my-1">
          He lucky, lucky, yeah (ye-yeah)
        </p>
        <p class="text-gray-400 text-base my-1">He lucky, lucky, yeah</p>
        <p class="text-gray-400 text-base my-1">He lucky, lucky, yeah</p>
        <p class="text-gray-400 text-base my-1"></p>
        <p class="text-gray-400 text-base my-1">A lucky, lucky girl</p>
        <p class="text-gray-400 text-base my-1">
          She got married to a boy like you
        </p>
        <p class="text-gray-400 text-base my-1">
          She'd kick you out if she ever, ever knew
        </p>
        <p class="text-gray-400 text-base my-1">
          'Bout all the - you tell me that you do
        </p>
        <p class="text-gray-400 text-base my-1">Dirty, dirty boy</p>
        <p class="text-gray-400 text-base my-1">
          You know everyone is talking on the scene
        </p>
        <p class="text-gray-400 text-base my-1">
          I hear them whispering 'bout the places that you've been
        </p>
        <p class="text-gray-400 text-base my-1">
          And how you don't know how to keep your business clean
        </p>
        <p class="text-gray-400 text-base my-1"></p>
        <p class="text-gray-400 text-base my-1">
          Mummy don't know daddy's getting hot
        </p>
        <p class="text-gray-400 text-base my-1">
          At the body shop, doing something unholy
        </p>
        <p class="text-gray-400 text-base my-1">
          He's sat back while she's dropping it, she be popping it
        </p>
        <p class="text-gray-400 text-base my-1">Yeah, she put it down slowly</p>
        <p class="text-gray-400 text-base my-1">
          Oh-ee-oh-ee-oh, he left his kids at
        </p>
        <p class="text-gray-400 text-base my-1">
          Ho-ee-oh-ee-ome, so he can get that
        </p>
        <p class="text-gray-400 text-base my-1">
          Mummy don't know daddy's getting hot
        </p>
        <p class="text-gray-400 text-base my-1">
          At the body shop, doing something unholy (woo)
        </p>
        <p class="text-gray-400 text-base my-1"></p>
        <p class="text-gray-400 text-base my-1">
          Mmm, daddy, daddy, if you want it, drop the add'y (yuh)
        </p>
        <p class="text-gray-400 text-base my-1">
          Give me love, give me Fendi, my Balenciaga daddy
        </p>
        <p class="text-gray-400 text-base my-1">
          You gon' need to bag it up, 'cause I'm spending on Rodeo (woo)
        </p>
        <p class="text-gray-400 text-base my-1">
          You can watch me back it up, I'll be gone in the a.m.
        </p>
        <p class="text-gray-400 text-base my-1">
          And he, he get me Prada, get me Miu Miu like Rihanna (ah)
        </p>
        <p class="text-gray-400 text-base my-1">
          He always call me 'cause I never cause no drama
        </p>
        <p class="text-gray-400 text-base my-1">
          And when you want it, baby, I know I got you covered
        </p>
        <p class="text-gray-400 text-base my-1">
          And when you need it, baby, just jump under the covers
        </p>
        <p class="text-gray-400 text-base my-1"></p>
        <p class="text-gray-400 text-base my-1">
          Mummy don't know daddy's getting hot
        </p>
        <p class="text-gray-400 text-base my-1">
          At the body shop, doin' somethin' unholy
        </p>
        <p class="text-gray-400 text-base my-1">
          He's sat back while she's dropping it, she be popping it
        </p>
        <p class="text-gray-400 text-base my-1">Yeah, she put it down slowly</p>
        <p class="text-gray-400 text-base my-1">
          Oh-ee-oh-ee-oh, he left his kids at
        </p>
        <p class="text-gray-400 text-base my-1">
          Ho-ee-oh-ee-ome, so he can get that
        </p>
        <p class="text-gray-400 text-base my-1">
          Mummy don't know daddy's getting hot
        </p>
        <p class="text-gray-400 text-base my-1">
          At the body shop, doin' something unholy
        </p>
      </div>
    </div>
    <RelatedSongs />
  </div>
</template>
