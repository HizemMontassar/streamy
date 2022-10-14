<template>
  <button
    class="carousel-control left-0 inline-block absolute top-1/2 p-1 mx-4 border border-gray-500 rounded-full text-white hover:cursor-pointer"
    @click="$emit('prev')"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
  <button
    class="carousel-control right-0 absolute top-1/2 p-1 mx-4 border border-gray-500 rounded-full text-white hover:cursor-pointer"
    @click="$emit('next')"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</template>
<script>
export default {
  emits: ["prev", "next"],
};
</script>
