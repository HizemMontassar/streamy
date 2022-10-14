<template>
  <transition :name="transitionEffect">
    <div
      class="absolute top-0 left-0 right-0 bottom-0"
      v-show="currentSlide === index"
    >
      <img :src="tvShow.image" />
      <div
        class="flex flex-row justify-between items-center w-full h-full text-white bg-gradient-to-r from-black absolute inset-y-0"
      >
        <div class="flex flex-col px-24">
          <div class="flex flex-row items-center">
            <button class="py-6 px-1 bg-netflix-red-400"></button>
            <div class="bg-gradient-to-r from-red-800">
              <img
                src="../../../assets/streamy-logo-white.png"
                alt="Streamy"
                class="w-auto h-10"
              />
            </div>
          </div>
          <h1 class="text-white text-8xl font-semibold mb-12 mt-6">
            {{ tvShow.name }}
          </h1>
          <div class="flex flex-row items-center text-sm">
            <span class="p-1 bg-gray-600 mr-4">20+</span>
            <span>3h</span>
          </div>
          <p class="w-1/3 my-4">
            {{ tvShow.description }}
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
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["tvShow", "currentSlide", "index", "direction"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
};
</script>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
