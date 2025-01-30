<template>
    <div class="py-[40px] backgroundImage " style="background-image: src('../../assets/images/batik.jpg');">
      <div class="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-center gap-6 md:justify-between items-center">
        <div>
        <h2 class="text-2xl font-bold text-white text-center md:text-start">Beli Tiket Sekarang</h2>
        <h4 class="font-medium uppercase text-white text-center md:text-start">Udah dibuka nih!</h4>
      </div>
      <div>
        <a href="/tiket" class="border-2 border-white text-white text-xl cursor-pointer font-semibold px-4 py-2 hover:opacity-[0.8]">Beli yuk</a>
    </div>
    </div>
    </div>
  </template>

  <script>
  export default {
    methods: {
      navigateTo(tab) {
      this.activeTab = tab;
      const section = document.getElementById(tab);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    }
  };
  </script>
  
  
  <style>
.backgroundImage{
  background-image: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url('../../assets/images/batik.jpg');
}
</style>