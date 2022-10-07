<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchTerm = ref<string>();
const handleSearch = () => {
  router.push({ name: 'search', params: { searchTerm: searchTerm.value } });
};
</script>

<template>
  <div>
    <form
      autocomplete="off"
      class="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label for="search-field" class="sr-only">Search all files</label>
      <div class="flex flex-row justify-start items-center">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          class="w-5 h-5 ml-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <form @keypress.enter.prevent="handleSearch">
          <input
            name="search-field"
            autocomplete="off"
            id="search-field"
            class="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
            placeholder="Search - A Million Dreams"
            type="search"
            v-model="searchTerm"
            spellcheck="false"
            data-ms-editor="true"
          />
        </form>
      </div>
    </form>
  </div>
</template>
