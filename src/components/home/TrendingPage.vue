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
    componentTitle: "Trending",
    multipleSlidesCarouselShows: [
      {
        id: "0",
        name: "Seinfeld",
        image: require("../../assets/tv-shows/seinfeld.jpg"),
      },
      {
        id: "1",
        name: "One Piece",
        image: require("../../assets/tv-shows/one-piece.png"),
      },
      {
        id: "2",
        name: "Blindspot",
        image: require("../../assets/tv-shows/blindspot.jpg"),
      },
      {
        id: "3",
        name: "Brooklyn 99",
        image: require("../../assets/tv-shows/brooklyn99.jpg"),
      },
    ],
  }),
};
</script>
