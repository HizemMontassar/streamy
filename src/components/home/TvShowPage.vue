<template>
  <div class="relative flex flex-col my-8 mx-24">
    <div class="absolute w-full bg-gradient-to-r from-black">
      <div class="flex flex-row justify-center">
        <a
          href="#"
          class="px-4 py-2 mx-4 border-t-2 border-netflix-red-800 bg-gradient-to-b from-red-800"
          ><button>OVERVIEW</button></a
        >
        <a href="#" class="px-4 py-2 mx-4"><button>EPISODES</button></a>
        <a href="#" class="px-4 py-2 mx-4"><button>TRAILERS</button></a>
        <a href="#" class="px-4 py-2 mx-4"
          ><button>SIMILAR LIKE THIS</button></a
        >
      </div>
      <div class="flex flex-col my-12">
        <div
          class="py-1 px-2 w-52 border-l-4 border-netflix-red-800 bg-gradient-to-r from-red-800"
        >
          <img
            src="../../assets/streamy-logo-white.png"
            alt="Streamy"
            class="w-auto h-10"
          />
        </div>
        <h1 class="text-white text-6xl font-semibold mb-12 mt-6">
          Rick and Morty
        </h1>
        <div class="flex flex-row items-center space-x-3 text-xl font-bold">
          <span class="p-3 bg-gray-500">18+</span>
          <p>3 Seasons</p>
          <p>- 2020</p>
        </div>
        <div class="flex flex-row items-center space-x-3 my-6">
          <img
            src="../../assets/tv-shows/rick-and-morty-logo.png"
            alt="Rick and Mortly Logo"
            width="72px"
            height="72px"
          />
          <span class="text-yellow-300">#2 in Series Today</span>
        </div>
        <p class="w-1/3 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          consectetur rhoncus leo, at dictum massa congue laoreet. Fusce ac dui
          a justo consectetur rutrum vitae ac sapien.
        </p>
        <div class="flex items-center my-4">
          <button
            class="inline-flex items-center px-8 py-2 bg-netflix-red-800 mr-6"
          >
            <svg
              class="h-5 w-5 text-white mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Play Now
          </button>
          <button class="inline-flex items-center px-8 py-2 bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            My List
          </button>
        </div>
        <div class="my-12">
          <p>
            <span class="text-netflix-red-200">Starring: </span>Rick Sanchez,
            Morty Smith
          </p>
          <p>
            <span class="text-netflix-red-200">Genres: </span>Sitcom, Comedy,
            Adventure, Dark Comedy
          </p>
          <p>
            <span class="text-netflix-red-200">This Is: </span>Rick Sanchez,
            Morty Smith
          </p>
        </div>
      </div>
    </div>
    <img src="../../assets/tv-shows/rick-and-morty.jpg" alt="Rick and Morty" />
  </div>
</template>
