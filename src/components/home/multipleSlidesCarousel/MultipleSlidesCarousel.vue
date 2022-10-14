<template>
  <div class="flex flex-col my-8 mx-24">
    <div class="flex flex-row justify-between">
      <span class="text-xl font-semibold">{{ componentTitle }}</span>
    </div>
    <div class="flex flex-row items-center justify-between mt-2 mb-8">
      <swiper
        :slides-per-view="4"
        :space-between="40"
        :loop="true"
        :navigation="true"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="show in showsList" :key="show.id">
          <div>
            <img :src="show.image" :alt="show.name" class="h-auto w-80" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["componentTitle", "showsList"],
  setup() {
    return {
      modules: [Navigation],
    };
  },
  mounted() {
    console.log(this.showsList);
  },
};
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  color: white;
  background-color: #e50914;
  opacity: 0.7;
  border-radius: 5%;
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev {
  left: 0;
}
</style>
