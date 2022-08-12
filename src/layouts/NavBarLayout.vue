<template>
  <nav class="sticky top-0 z-10">
    <div
      class="flex flex-row justify-around items-center bg-black bg-opacity-90 h-16"
    >
      <a href="#"
        ><img
          src="../assets/streamy-logo.png"
          alt="Streamy"
          class="w-auto h-12"
      /></a>
      <div class="flex flex-row justify-between items-center">
        <span class="text-white mx-4 font-semibold"><a href="#">Home</a></span>
        <span class="text-white mx-4 font-semibold"
          ><a href="#">Tv Shows</a></span
        >
        <span class="text-white mx-4 font-semibold"
          ><a href="#">Movies</a></span
        >
      </div>
      <button class="bg-netflix-red-800 py-2 px-6 text-white font-medium">
        Login
      </button>
    </div>
  </nav>
  <div class="w-full h-full bg-black">
    <router-view />
  </div>
  <footer class="mx-24 p-8 bg-[#191919]">
    <div class="flex flex-row justify-between text-white">
      <div class="flex flex-col space-y-2">
        <a href="#">About Us</a>
        <a href="#">Movies</a>
        <a href="#">Tv Shows</a>
        <a href="#">Coporate Information</a>
      </div>
      <div class="flex flex-col space-y-2">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Help</a>
      </div>
      <div class="flex flex-col space-y-2">
        <a href="#">FAQ</a>
        <a href="#">Contacct Us</a>
        <a href="#">Legal Notice</a>
      </div>
      <div class="flex flex-row items-center space-x-2">
        <button class="rounded-full p-2 bg-[#191919]">
          <svg
            class="h-4 w-4 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path
              d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            />
          </svg>
        </button>
        <button class="rounded-full p-2 bg-[#191919]">
          <svg
            class="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </button>
        <button class="rounded-full p-2 bg-[#191919]">
          <svg
            class="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </button>
        <button class="rounded-full p-2 bg-[#191919]">
          <svg
            class="h-4 w-4 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path
              d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z"
            />
          </svg>
        </button>
      </div>
    </div>
  </footer>
  <div class="text-white flex">
    <p class="mx-auto">STREAMY - 2022 All Rights Reserved</p>
  </div>
</template>
