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
    componentTitle: "Your Favorites",
    multipleSlidesCarouselShows: [
      {
        id: "0",
        name: "Friends",
        image: require("../../assets/tv-shows/friends.jpg"),
      },
      {
        id: "1",
        name: "Game Of Thrones",
        image: require("../../assets/tv-shows/game-of-thrones.png"),
      },
      {
        id: "2",
        name: "Lucifer",
        image: require("../../assets/tv-shows/lucifer.jpg"),
      },
      {
        id: "3",
        name: "The Walking Dead",
        image: require("../../assets/tv-shows/the-walking-dead.jpg"),
      },
    ],
  }),
};
</script>
