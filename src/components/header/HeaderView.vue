<template>
    <div class="relative w-full h-[300px] md:h-[400px] lg:h-[640px] z-0">
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <img v-for="(image, index) in images" :key="index" :src="require(`@/assets/images/image${index + 1}.jpg`)" :alt="`Image ${index + 1}`" class="w-full h-full object-cover" :class="{ 'hidden': activeImage !== index + 1 }">
      </div>
      <button @click="prevImage" class="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 ml-2 rounded-full opacity-[0.6] hover:opacity-[1] bg-gray-800 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button @click="nextImage" class="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 mr-2 rounded-full opacity-[0.6] hover:opacity-[1] bg-gray-800 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeImage: 1,
        images: [1, 2, 3],
        intervalId: null
      };
    },
    mounted() {
      this.intervalId = setInterval(this.nextImage, 5000);
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    },
    methods: {
      nextImage() {
        this.activeImage = (this.activeImage % this.images.length) + 1;
      },
      prevImage() {
        this.activeImage = (this.activeImage - 2 + this.images.length) % this.images.length + 1;
      }
    }
  };
  </script>
s  