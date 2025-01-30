<template>
    <div class="max-w-[1080px] mx-auto py-20 flex flex-col md:flex-row gap-4">
      <div class="w-full md:w-[50%]">
        <!-- Menambahkan kelas "hover:scale-105" untuk memberikan efek membesar saat dihover -->
        <img :src="require('@/assets/logo.png')" class="w-90 hover:scale-105"/>
      </div>
      <div class="p-4 w-full md:w-[50%]">
        <h2 class="text-4xl font-bold text-main">About Us</h2>
        <h3 class="text-xl text-[#696592] my-2"><i>Karavista</i></h3>
        <p>Lingkung Seni Mahasiswa Universitas Pasundan Bandung (LISMA UNPAS) adalah wadah bagi mahasiswa aktif yang peduli terhadap keberagaman budaya Indonesia, khususnya dalam seni pertunjukan. Kami menyadari bahwa kesenian budaya Indonesia, seperti tari, musik, dan teater, mengalami krisis eksistensi di era modern ini. <br/> <br/> Oleh karena itu, kami berupaya untuk melestarikan dan mengembangkan kekayaan budaya ini, salah satunya melalui kegiatan "KARAVISTA" dalam rangkaian PAGELARAN KRISIS KARYA LISMA 2.0. Kami ingin mengajak generasi muda untuk lebih mengenal dan mencintai budaya Indonesia, serta menumbuhkan rasa bangga terhadap keberagaman yang menjadi kekuatan bangsa.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
    }
  };
  </script>
  
  <style scoped>
  .hover\:scale-105:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
  
  .hover\:scale-105 {
    transition: transform 0.3s ease;
  }
  </style>
  