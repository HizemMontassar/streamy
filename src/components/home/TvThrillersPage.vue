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
    componentTitle: "Tv Thrillers",
    multipleSlidesCarouselShows: [
      {
        id: "0",
        name: "Seinfeld",
        image: require("../../assets/tv-shows/annee-with-an-e.jpg"),
      },
      {
        id: "1",
        name: "One Piece",
        image: require("../../assets/tv-shows/how-i-met-your-mother.jpg"),
      },
      {
        id: "2",
        name: "Blindspot",
        image: require("../../assets/tv-shows/dexter.jpg"),
      },
      {
        id: "3",
        name: "Brooklyn 99",
        image: require("../../assets/tv-shows/supernatural.jpg"),
      },
    ],
  }),
};
</script>
