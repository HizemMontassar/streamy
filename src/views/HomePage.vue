<template>
  <div class="slider-page">
    <slider-page></slider-page>
  </div>
  <div class="favorites text-white">
    <div class="flex flex-col my-8 mx-24">
      <div class="flex flex-row justify-between">
        <span class="text-xl font-semibold">Your Favorites</span>
        <div class="flex flex-row justify-between">
          <button class="p-1 mr-2 bg-netflix-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
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
          <button class="p-1 bg-netflix-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
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
      <div class="flex flex-row items-center justify-between mt-2 mb-8">
        <div>
          <img
            src="../assets/tv-shows/friends.jpg"
            alt="John Wick"
            class="h-auto w-80"
          />
        </div>
        <div>
          <img
            src="../assets/tv-shows/game-of-thrones.png"
            alt="John Wick"
            class="h-auto w-80"
          />
        </div>
        <div>
          <img
            src="../assets/tv-shows/lucifer.jpg"
            alt="John Wick"
            class="h-auto w-80"
          />
        </div>
        <div>
          <img
            src="../assets/tv-shows/the-walking-dead.jpg"
            alt="John Wick"
            class="h-auto w-80"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="upcoming-movies text-white">
    <div class="flex flex-col my-8 mx-24">
      <div class="flex flex-row justify-between">
        <span class="text-xl font-semibold">Upcoming Movies</span>
        <div class="flex flex-row justify-between">
          <button class="p-1 mr-2 bg-netflix-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
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
          <button class="p-1 bg-netflix-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
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
      <div class="flex flex-row items-center justify-between mt-2 mb-8">
        <div>
          <img
            src="../assets/movies/john-wick.jpg"
            alt="John Wick"
            class="h-auto w-80"
          />
        </div>
        <div>
          <img
            src="../assets/movies/jurassic-world.jpg"
            alt="John Wick"
            class="h-auto w-80"
          />
        </div>
        <div>
          <img
            src="../assets/movies/rampage.jpg"
            alt="John Wick"
            class="h-auto w-80"
          />
        </div>
        <div>
          <img
            src="../assets/movies/sonic.jpg"
            alt="John Wick"
            class="h-auto w-80"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SliderPage from "@/components/SliderPage.vue";
export default {
  components: {
    SliderPage,
  },
};
</script>
