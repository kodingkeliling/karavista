<template>
  <div class="py-20 bg-[#F5F8FD]">
    <div class="max-w-[1080px] mx-auto">
      <div class="p-4">
        <h2 class="text-4xl font-bold text-center text-main">Acara</h2>
        <h4 class="text-md text-center">Pagelaran Krisis Karya LISMA 2.0</h4>
      </div>
      <div class="flex justify-center flex-wrap mt-4 px-2">
        <div v-for="(v, i) in events" :key="i" class="flex flex-col items-center bg-opacity-30 bg-white rounded-lg overflow-hidden shadow-md w-90 md:w-72 lg:w-80 mx-2 my-2 duration-200 card hover:scale-[1.02]">
          <img :src="v.image" :alt="v.name" class="w-full object-cover object-center">
          <!-- <div class="overlay"> -->
            <div class="overlay-content">
              <h3 class="text-lg font-semibold text-gray-800 text-center">{{ v.name }}</h3>
              <!-- <p class="text-sm text-gray-600 mt-1 mb-8">{{ v.description }}</p> -->
              <!-- <a :href="v.link" class="bg-main px-4 py-2 hover:opacity-[0.8]" >Daftar</a> -->
            </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    data() {
      return {
        events: [
          { name: "Teater & Sastra", description: " ", image: require('@/assets/images/image5.jpg'), link: "/daftar-pencak-silat" },
          { name: "Kesenian Daerah Sunda", description: " ", image: require('@/assets/images/image2.jpg'), link: "/daftar-jaipong-rampak" },
          { name: "Paduan Suara & Musik", description: " ", image: require('@/assets/images/image3.jpg'), link: "/daftar-jaipong-tunggal" },
          { name: "Tari Kreasi", description: " ", image: require('@/assets/images/image1.jpg'), link: "/daftar-pupuh" },
          { name: "Fotografi", description: " ", image: require('@/assets/images/image6.jpg'), link: "/daftar-sajak"},
        ]
      };
    },
    methods: {
      lihatDetail(lomba) {
        console.log("Melihat detail lomba:", lomba);
      }
    }
  };
  </script>
  
  <style scoped>
.card {
  position: relative;
  overflow: hidden;
}

/* .card:hover .overlay {
  bottom: 0;
} */

.overlay {
  position: absolute;
  /* bottom: -20%; */
  bottom: 0px;
  left: 0;
  width: 100%;
  background-color: #ffff;
  color: #fff;
  transition: bottom 0.3s ease-in-out;
}

.overlay-content {
  padding: 20px;
}

</style>
