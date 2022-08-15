<template>
  <div class="slider-page">
    <carousel :tvShows="tvShows"></carousel>
  </div>
  <div class="favorites text-white">
    <favorites-page></favorites-page>
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
//import SliderPage from "@/components/home/SliderPage.vue";
import FavoritesPage from "@/components/home/FavoritesPage.vue";
import UpcomingMoviesPage from "@/components/home/UpcomingMoviesPage.vue";
import TopTenPage from "@/components/home/TopTenPage.vue";
import SuggestedPage from "@/components/home/SuggestedPage.vue";
import SuggestedMovie from "@/components/home/SuggestedMovie.vue";
import TrendingPage from "@/components/home/TrendingPage.vue";
import TvShowPage from "@/components/home/TvShowPage.vue";
import TvThrillersPage from "@/components/home/TvThrillersPage.vue";
import Carousel from "@/components/home/carousel/CarouselPage.vue";
export default {
  components: {
    //SliderPage,
    FavoritesPage,
    UpcomingMoviesPage,
    TopTenPage,
    SuggestedPage,
    SuggestedMovie,
    TrendingPage,
    TvShowPage,
    TvThrillersPage,
    Carousel,
  },
  data: () => ({
    tvShows: [
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
        this.currentSlide < this.tvShows.length - 1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
};
</script>
