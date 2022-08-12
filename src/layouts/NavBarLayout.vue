<template>
  <nav class="sticky top-0 z-10">
    <div class="flex flex-row justify-around items-center bg-black bg-opacity-90 h-16">
      <a href="#"><img src="../assets/streamy-logo.png" alt="Streamy" class="w-auto h-12" /></a>
      <div class="flex flex-row justify-between items-center">
        <span class="text-white mx-4 font-semibold"><a href="#">Home</a></span>
        <span class="text-white mx-4 font-semibold"><a href="#">Tv Shows</a></span>
        <span class="text-white mx-4 font-semibold"><a href="#">Movies</a></span>
      </div>
      <button class="bg-netflix-red-800 py-2 px-6 text-white font-medium">Login</button>
    </div>
  </nav>
  <div class="w-full h-full bg-black">
    <router-view />
  </div>
</template>
