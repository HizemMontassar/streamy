<template>
  <div class="slider-page">
    <single-slide-carousel
      :tvShows="singleSlideCarouselShows"
    ></single-slide-carousel>
  </div>
  <div class="favorites text-white">
    <favorites-page></favorites-page>
    <!-- <multiple-slides-carousel
      :tvShows="multipleSlidesCarouselShows"
    ></multiple-slides-carousel> -->
  </div>
  <div class="upcoming-movies text-white">
    <upcoming-movies-page></upcoming-movies-page>
  </div>
  <div class="top-10 text-white">
    <top-ten-page></top-ten-page>
  </div>
  <div class="suggested-for-you text-white">
    <suggested-page></suggested-page>
  </div>
  <div class="suggested-movie text-white">
    <suggested-movie></suggested-movie>
  </div>
  <div class="trending-page text-white">
    <trending-page></trending-page>
  </div>
  <div class="tv-show-page text-white">
    <tv-show-page></tv-show-page>
  </div>
  <div class="tv-thrillers-page text-white">
    <tv-thrillers-page></tv-thrillers-page>
  </div>
</template>
<script>
import FavoritesPage from "@/components/home/FavoritesPage.vue";
import UpcomingMoviesPage from "@/components/home/UpcomingMoviesPage.vue";
import TopTenPage from "@/components/home/TopTenPage.vue";
import SuggestedPage from "@/components/home/SuggestedPage.vue";
import SuggestedMovie from "@/components/home/SuggestedMovie.vue";
import TrendingPage from "@/components/home/TrendingPage.vue";
import TvShowPage from "@/components/home/TvShowPage.vue";
import TvThrillersPage from "@/components/home/TvThrillersPage.vue";
import SingleSlideCarousel from "@/components/home/singleSlideCarousel/CarouselPage.vue";
// import MultipleSlidesCarousel from "@/components/home/multipleSlidesCarousel/CarouselPage.vue";
export default {
  components: {
    // FavoritesPage,
    UpcomingMoviesPage,
    TopTenPage,
    SuggestedPage,
    SuggestedMovie,
    TrendingPage,
    TvShowPage,
    TvThrillersPage,
    SingleSlideCarousel,
    FavoritesPage,
  },
  data: () => ({
    singleSlideCarouselShows: [
      {
        id: "0",
        name: "Stranger Things",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur rhoncus leo, at dictum massa congue laoreet. Fusce ac dui a justo consectetur rutrum vitae ac sapien.",
        image: require("../assets/tv-shows/stranger-things.png"),
      },
      {
        id: "1",
        name: "Westworld",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur rhoncus leo, at dictum massa congue laoreet. Fusce ac dui a justo consectetur rutrum vitae ac sapien.",
        image: require("../assets/tv-shows/westworld.jpg"),
      },
      {
        id: "2",
        name: "Better Call Saul",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur rhoncus leo, at dictum massa congue laoreet. Fusce ac dui a justo consectetur rutrum vitae ac sapien.",
        image: require("../assets/tv-shows/better-call-saul.jpg"),
      },
    ],
    multipleSlidesCarouselShows: [
      [
        {
          id: "0",
          name: "Friends",
          image: require("../assets/tv-shows/friends.jpg"),
        },
        {
          id: "1",
          name: "Game Of Thrones",
          image: require("../assets/tv-shows/game-of-thrones.png"),
        },
        {
          id: "2",
          name: "Lucifer",
          image: require("../assets/tv-shows/lucifer.jpg"),
        },
        {
          id: "3",
          name: "The Walking Dead",
          image: require("../assets/tv-shows/the-walking-dead.jpg"),
        },
      ],
      [
        {
          id: "4",
          name: "John Wick",
          image: require("../assets/movies/john-wick.jpg"),
        },
        {
          id: "5",
          name: "Jurassic World",
          image: require("../assets/movies/jurassic-world.jpg"),
        },
        {
          id: "6",
          name: "Rampage",
          image: require("../assets/movies/rampage.jpg"),
        },
        {
          id: "7",
          name: "Sonic",
          image: require("../assets/movies/sonic.jpg"),
        },
      ],
    ],
    currentSlide: 0,
    slideInterval: null,
  }),

  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
  },

  mounted() {
    this.slideInterval = setInterval(() => {
      const index =
        this.currentSlide < this.singleSlideCarouselShows.length - 1
          ? this.currentSlide + 1
          : 0;
      this.setCurrentSlide(index);
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
};
</script>
