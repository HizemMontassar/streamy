<template>
  <div class="">
    <div class="carousel-inner h-screen relative overflow-hidden">
      <carousel-item
        v-for="(tvShow, index) in tvShows"
        :tvShow="tvShow"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      ></carousel-item>
      <carousel-controls @next="next" @prev="prev"></carousel-controls>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
export default {
  props: ["tvShows"],
  components: {
    CarouselItem,
    CarouselControls,
  },
  data: () => ({
    currentSlide: 0,
    slideIntervale: null,
    direction: "right",
  }),

  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    _next() {
      const index =
        this.currentSlide > 0 ? this.currentSlide - 1 : this.tvShows.length - 1;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next() {
      this._next();
    },

    prev() {
      const index =
        this.currentSlide < this.tvShows.length - 1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
      this.direction = "left";
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, 5000);
    },
    stopSlideTimer() {
      clearInterval(this.slideIntervale);
    },
  },

  mounted() {
    // this.startSlideTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  width: auto;
}
</style>
