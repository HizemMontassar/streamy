<template>
  <multiple-slides-carousel
    :showsList="multipleSlidesCarouselShows"
    :componentTitle="componentTitle"
  ></multiple-slides-carousel>
</template>
<script>
import MultipleSlidesCarousel from "@/components/home/multipleSlidesCarousel/MultipleSlidesCarousel.vue";

export default {
  components: {
    MultipleSlidesCarousel,
  },
  data: () => ({
    componentTitle: "Suggested For You",
    multipleSlidesCarouselShows: [
      {
        id: "0",
        name: "Sex Education",
        image: require("../../assets/tv-shows/sex-education.jpg"),
      },
      {
        id: "1",
        name: "Euphoria",
        image: require("../../assets/tv-shows/euphoria.jpg"),
      },
      {
        id: "2",
        name: "House Of The Dragon",
        image: require("../../assets/tv-shows/house-of-dragons.jpg"),
      },
      {
        id: "3",
        name: "Hannibal",
        image: require("../../assets/tv-shows/hannibal.jpg"),
      },
    ],
  }),
};
</script>
