<template>
  <div>
    <img
      :src="test"
      alt="John Wick"
      class="w-full h-screen"
    />
    <div
      class="flex flex-row justify-between items-center w-full h-screen text-white bg-gradient-to-r from-black absolute inset-y-16 inset-x-0"
    >
      <button class="p-1 mx-4 border border-gray-500 rounded-full">
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
      <div class="flex flex-col -ml-20">
        <div class="flex flex-row items-center">
          <button class="py-6 px-1 bg-netflix-red-400"></button>
          <div class="py-1 px-2 w-52 bg-gradient-to-r from-red-800">
            <img
              src="../../assets/streamy-logo-white.png"
              alt="Streamy"
              class="w-auto h-10"
            />
          </div>
        </div>
        <h1 class="text-white text-8xl font-semibold mb-12 mt-6">
          Stranger Things
        </h1>
        <div class="flex flex-row items-center text-sm">
          <span class="p-1 bg-gray-600 mr-4">20+</span>
          <span>3h</span>
        </div>
        <p class="w-1/3 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          consectetur rhoncus leo, at dictum massa congue laoreet. Fusce ac dui
          a justo consectetur rutrum vitae ac sapien.
        </p>
        <div class="flex flex-row justify-between items-center my-4">
          <div class="flex items-center">
            <button
              class="inline-flex items-center px-8 py-2 bg-netflix-red-800 mr-6"
            >
              <svg
                class="h-5 w-5 text-white mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Play Now
            </button>
            <button class="inline-flex items-center px-8 py-2 bg-black">
              More Details
            </button>
          </div>
          <div>
            <button
              class="inline-flex items-center text-2xl font-semibold px-4 py-2 bg-gradient-to-r from-[#191919] bg-opacity-50 rounded"
            >
              <svg
                class="h-8 w-8 text-white mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      <button class="mx-4 p-1 border border-gray-500 rounded-full">
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image"],
  data: () => ({
    test: "../../assets/tv-shows/stranger-things.png",
  }),
};
</script>
