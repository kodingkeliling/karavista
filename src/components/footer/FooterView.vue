<template>
    <footer class="bg-[white] text-main py-4">
      <div class="max-w-[1080px] mx-auto flex justify-between flex-col md:flex-row gap-4 px-4 items-start">
        <div class="flex items-start w-full md:w-[80%]">
          <div class="w-[50%] hidden md:block">
            <img :src="require('@/assets/logo.png')" alt="Pasanggiri Seni Sunda" class="object-contain mr-2 object-center">
          </div>
          <div>
            <p class="text-lg mb-2"><strong>Karavista</strong></p>
            <p class="text-sm">KARAVISTA dalam rangkaian PAGELARAN KRISIS KARYA LISMA 2.0. Kami ingin mengajak generasi muda untuk lebih mengenal dan mencintai budaya Indonesia, serta menumbuhkan rasa bangga terhadap keberagaman yang menjadi kekuatan bangsa.</p>
          </div>
        </div>
        <div>
          <p class="text-lg mb-2"><strong>Contact Us:</strong></p>
          <ul>
            <li><span class="text-sm">Whatsapp: </span> <a href="http://wa.me/6282240031723?text=Hallo%20kak,%20ada%20yang%20saya%20bisa%20bantu?" target="_blank" class="text-sm hover:text-gray-400">+62 822 4003 1723 (Karavista)</a></li>
            <li><span class="text-sm">Email: </span> <a href="mailto:krikil2024@gmail.com" target="_blank" class="text-sm hover:text-gray-400">krikil2024@gmail.com</a></li>
            <li><span class="text-sm">Address: </span> <a href="https://maps.app.goo.gl/5zWyjKzD2Kq7cVaw8" class="text-sm hover:text-gray-400">Jl. Tamansari No. 6-8 Kota Bandung, Jawa Barat, Indonesia</a></li>
          </ul>
          <div class="flex gap-2 mt-2">
          <a href="https://www.instagram.com/karavista2.0/" target="_blank" class="bg-main hover:opacity-[0.8] flex w-fit p-2 rounded-full" >
            <img :src="require('@/assets/icons/icon-instagram.png')" width="14px"/>
          </a>
          <a href="#" target="_blank" class="bg-main hover:opacity-[0.8] flex w-fit py-1 px-2 items-center rounded-full">
            <img :src="require('@/assets/icons/icon-whatsapp.png')" width="14px"/>
          </a>
          <a href="https://www.youtube.com/@lingkungsenimahasiswa8569" target="_blank" class="bg-main hover:opacity-[0.8] flex w-fit py-1 px-2 items-center rounded-full">
            <img :src="require('@/assets/icons/icon-youtube.png')" width="14px"/>
          </a>
        </div>
        </div>
      </div>
      <div class="max-w-[1080px] mx-auto flex justify-center items-center text-center text-sm mt-4 border-t-2 border-gray-200 pt-2">
        <p class="mr-4">&copy; 2025 <a href="https://www.instagram.com/karavista2.0/" target="_blank" class="hover:font-medium">Karavista</a>. Powered by <a href="https://www.kodingkeliling.com" target="_blank" class="hover:font-medium">KodingKeliling</a>.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Komponen footer
  };
  </script>
  
  <style scoped>
  /* Styling sesuai kebutuhan Anda */
  </style>
  