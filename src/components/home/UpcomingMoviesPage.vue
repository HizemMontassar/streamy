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
    componentTitle: "Upcoming Movies",
    multipleSlidesCarouselShows: [
      {
        id: "0",
        name: "Friends",
        image: require("../../assets/movies/john-wick.jpg"),
      },
      {
        id: "1",
        name: "Game Of Thrones",
        image: require("../../assets/movies/jurassic-world.jpg"),
      },
      {
        id: "2",
        name: "Lucifer",
        image: require("../../assets/movies/rampage.jpg"),
      },
      {
        id: "3",
        name: "The Walking Dead",
        image: require("../../assets/movies/sonic.jpg"),
      },
      {
        id: "4",
        name: "Lucifer",
        image: require("../../assets/tv-shows/lucifer.jpg"),
      },
    ],
  }),
};
</script>
