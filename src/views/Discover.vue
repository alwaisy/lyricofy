<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <div
      class="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10"
    >
      <h2 class="font-bold text-3xl text-white text-left">Discover</h2>
      <select
        class="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
      >
        <option value="POP">Pop</option>
        <option value="HIP_HOP_RAP">Hip-Hop</option>
        <option value="DANCE">Dance</option>
        <option value="ELECTRONIC">Electronic</option>
        <option value="SOUL_RNB">Soul</option>
        <option value="ALTERNATIVE">Alternative</option>
        <option value="ROCK">Rock</option>
        <option value="LATIN">Latin</option>
        <option value="FILM_TV">Film</option>
        <option value="COUNTRY">Country</option>
        <option value="WORLDWIDE">Worldwide</option>
        <option value="REGGAE_DANCE_HALL">Reggae</option>
        <option value="HOUSE">House</option>
        <option value="K_POP">K-Pop</option>
      </select>
    </div>
    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/a4/0c/bd/a40cbd9d-bb38-8164-cd30-e107c8c7bb0e/22UMGIM83430.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/632531170">Unholy</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/156488786">Sam Smith &amp; Kim Petras</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/614204083">I Ain't Worried</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/260414340">OneRepublic</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/04/be/81/04be81e8-9cb9-f8a2-6201-9741404cb775/21UMGIM74865.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/629204672">Hold Me Closer</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/54657">Elton John &amp; Britney Spears</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/609260140">As It Was</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/471260289">Harry Styles</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music4/v4/d4/18/b4/d418b413-0c0d-91af-c04a-0f4710d8d133/081227842765.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/2906646">Please Don't Go</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/14589060">KC and the Sunshine Band</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/00/d3/af/00d3af07-4932-0b60-72f9-2411623cc62a/196589007094.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/618322930">DON'T YOU WORRY</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/360391"
              >Black Eyed Peas, Shakira &amp; David Guetta</a
            >
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/630520607"
              >STAR WALKIN' (League of Legends Worlds Anthem)</a
            >
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1400730578">Lil Nas X</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/612684931">Late Night Talking</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/471260289">Harry Styles</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/619940012">CUFF IT</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1419227">Beyoncé</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/db/11/f5/db11f57b-6f54-6cf8-2140-be0fc1a3b495/093624864462.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/616669220">Glimpse of Us</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1258279972">Joji</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/eb/17/f2/eb17f226-831a-b913-0435-748346326f10/196589096296.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/614356939"
              >Vegas (From the Original Motion Picture Soundtrack ELVIS)</a
            >
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/830588310">Doja Cat</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/613891396">Hold My Hand</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/277293880">Lady Gaga</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/628712770">Calm Down</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1304716885">Rema &amp; Selena Gomez</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/308021058">Unstoppable</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/28721078">Sia</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/aa/3a/43/aa3a4356-17ae-acc1-44ac-d7edd16f2c8b/886448988809.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/528311140">World's Smallest Violin</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/359553651">AJR</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/c8/3f/14/c83f14cc-ec3d-ad8e-dfd3-1c7602cc063f/196589131317.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/591322562">Sunroof</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1514850269">Nicky Youre &amp; Dazy</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/64/03/cb/6403cb43-d892-4663-d759-5093b5ed610c/886448203087.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/506004198">MIDDLE OF THE NIGHT</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/394295270">Elley Duhé</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/b6/f5/5a/b6f55a44-1fa9-d5fb-90f6-61443755013e/886449980949.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/10304502">Stumblin' In</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/7595134">Chris Norman &amp; Suzi Quatro</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/ff/f3/06/fff3062e-3d63-d7f8-30dd-2ee49010b731/190295559472.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/357149358">IDGAF</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1031397873">Dua Lipa</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/67/ae/70/67ae7043-0764-0fb0-b32d-b30be74b767a/21UMGIM74865.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/579595745">Cold Heart (PNAU Remix)</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/54657">Elton John &amp; Dua Lipa</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/22/2e/e5/222ee57c-fed2-cd66-4da6-db372a5496e2/5099902930152.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/393331">Running Up That Hill (A Deal With God)</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/487277">Kate Bush</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/63/4a/b8/634ab8d4-abbd-d00a-8913-3048bc89cb4d/075679749123_01.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/612151743">About Damn Time</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/472949623">Lizzo</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/7d/1c/7a/7d1c7afc-432b-5bf6-6581-d745be9da33f/093624883982.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/603703604"
              >Evergreen (You Didn’t Deserve Me At All)</a
            >
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1258165134">Omar Apollo</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/b7/e3/2f/b7e32fd7-7ca3-edf6-7df8-861bfcfd6f9a/886449526772.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/605312680">Bam Bam (feat. Ed Sheeran)</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/935727853">Camila Cabello</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/b8/20/f9/b820f951-e53c-93bf-e75d-33df6165e7c1/075679736109.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/612187248">2 Be Loved (Am I Ready)</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/472949623">Lizzo</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/47/55/0c/47550cd6-7ef5-bf86-c194-c7695d63c759/dj.xuditatj.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/40087819">Careless Whisper</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/894337">George Michael</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/619940014">BREAK MY SOUL</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1419227">Beyoncé</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/43/3d/14/433d14e3-a987-62f9-6910-7feb82101ba0/653738999322.png/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/620295943">2 Die 4</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/570136838">Tove Lo</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/bf/1b/ce/bf1bce38-c018-bf71-4a93-d82221c00ea7/cover.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/629242848">Позвони</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/15861463">DJ Smash &amp; NIVESTA</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/67/a8/01/67a8011c-9334-1db8-78fe-e8c00350df7f/22UMGIM84578.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/244019">Everybody Wants To Rule The World</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/45218">Tears for Fears</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/09/82/85/09828539-6725-293b-6455-b5425a86e701/859381167419.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/10748557">Hijo de la luna</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/27373453">Mecano</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/3c/35/17/3c351726-e6ec-d7ac-12b0-06f5ce932f35/075679736321.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/620263268">Left and Right</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/336249253">Charlie Puth &amp; Jung Kook</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music111/v4/2d/1c/4f/2d1c4fd7-018c-0529-693b-c67fea53b698/190295851286.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/342514741">Perfect</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/183313439">Ed Sheeran</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/5d/68/64/5d6864de-3809-0257-ceaa-9f7f1bbd1172/5056167175650_1.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/620822112">golden hour</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1439925456">JVKE</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/a5/e9/3b/a5e93b77-3ccd-a5d1-79cb-6a8832998810/22UMGIM88288.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/515024">Gypsy Woman (La Da Dee)</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/248109">Crystal Waters</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/65/3e/2e/653e2ee4-e4a9-1a77-7a5d-952dcbec1a7d/075679733535.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/623878225">Million Dollar Baby</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1265164818">Ava Max</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9d/47/d2/9d47d24b-c35d-5db2-0fe7-3a07670adc44/14UMGIM07612.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/42912214"
              >Gimme! Gimme! Gimme! (A Man After Midnight)</a
            >
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/372976">ABBA</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/bb/58/53/bb5853b1-529a-7a30-e0d8-91b57ee47cff/196589138170.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/613815741">SUPERMODEL</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1312874741">Måneskin</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/a8/3a/22/a83a22f7-af18-7ef6-a7de-74816c532a44/886449475421.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/552221348">STAY</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1435848034">The Kid LAROI &amp; Justin Bieber</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/82/19/ca/8219cade-b37e-4334-c60b-d0a8204b0564/21UMGIM78498.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/575387772">dumb dumb</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/1508029053">mazie</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/fd/b4/d3/fdb4d385-da25-2b5b-b6d6-49ecadf66649/cover.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/624549785">Стрелы</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/659860538">Markul &amp; Тося Чайкина</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/581315745">Shivers</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/183313439">Ed Sheeran</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/573386652">Bad Habits</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/183313439">Ed Sheeran</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/1b/86/e6/1b86e6dc-eca8-6b90-f6ac-6bc22c098380/5054197268748.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/629197514">Bellissima</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/422762545">Annalisa</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3f/f9/9f3ff904-2c70-4b70-0501-f57fd330e031/13UAAIM70462.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/97557561">Dark Horse (feat. Juicy J)</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/64387566">Katy Perry</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/22/c5/e4/22c5e46c-280f-23a1-001d-ac5fc0ceec67/22UMGIM96358.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/104794581">I'm Not The Only One</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/156488786">Sam Smith</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/79/8c/fe/798cfeed-94ab-2217-ffa7-25102da3bf48/00851365006530.rgb.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/310300106">Love On The Brain</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/63346553">Rihanna</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/11/56/9a/11569a34-032e-645a-7db9-38c95ec55ac7/859721293037_cover.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/105845771">Let Her Go</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/396255033">Passenger</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/dd/07/e4/dd07e4cb-d4b3-2896-d4e5-2462bd748f67/886444678384.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/106807815">Only Love Can Hurt Like This</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/298591627">Paloma Faith</a>
          </p>
        </div>
      </div>
      <div
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        <div class="relative w-full h-56 group">
          <div
            class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-300"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              ></path>
            </svg>
          </div>
          <img
            alt="song_img"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/ea/1a/84/ea1a84ce-b15e-73ee-9747-f3621b201af0/196589459435.jpg/400x400cc.jpg"
            class="w-full h-full rounded-lg"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <p class="font-semibold text-lg text-white truncate">
            <a href="/songs/632758956">Ricordi</a>
          </p>
          <p class="text-sm truncate text-gray-300 mt-1">
            <a href="/artists/901354715">Pinguini Tattici Nucleari</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
