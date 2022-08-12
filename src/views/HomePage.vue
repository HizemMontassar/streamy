<template>
  <div class="slider-page">
    <slider-page></slider-page>
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
import SliderPage from "@/components/home/SliderPage.vue";
import FavoritesPage from "@/components/home/FavoritesPage.vue";
import UpcomingMoviesPage from "@/components/home/UpcomingMoviesPage.vue";
import TopTenPage from "@/components/home/TopTenPage.vue";
import SuggestedPage from "@/components/home/SuggestedPage.vue";
import SuggestedMovie from "@/components/home/SuggestedMovie.vue";
import TrendingPage from "@/components/home/TrendingPage.vue";
import TvShowPage from "@/components/home/TvShowPage.vue";
import TvThrillersPage from "@/components/home/TvThrillersPage.vue";
export default {
  components: {
    SliderPage,
    FavoritesPage,
    UpcomingMoviesPage,
    TopTenPage,
    SuggestedPage,
    SuggestedMovie,
    TrendingPage,
    TvShowPage,
    TvThrillersPage,
  },
};
</script>
