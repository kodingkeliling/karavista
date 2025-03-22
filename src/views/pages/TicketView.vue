<template>
  <div class="max-w-[1080px] mx-auto pb-4 py-[40px] px-2 font-bold text-main">
    <div class="bg-white shadow-md rounded-lg p-6 relative">
      <div v-if="formClosed" class="text-center text-main text-xl h-[200px] flex items-center justify-center font-medium">
        <p>
          Terima kasih atas antusiasme Anda! 🎉 <br />
          Kuota pembelian telah terpenuhi. Sampai jumpa di acara kami! 😊
        </p>
      </div>

      <div v-if="loading && !formClosed" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
        <div class="animate-spin rounded-full h-10 w-10 border-4 border-main border-t-transparent"></div>
      </div>

      <iframe
        v-if="!formClosed"
        ref="tallyIframe"
        :data-tally-src="tallySrc"
        loading="lazy"
        width="100%"
        :height="loading ? 500 : 2552"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Karavista"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { GET_SHEETS } from '@/store/sheet.module';

export default {
  metaInfo() {
    return {
      title: "Tiket",
      titleTemplate: "Karavista | %s",
    };
  },
  data() {
    return {
      loading: true, // Buffer loading aktif saat awal
      umum1: 0,
      umum2: 0,
      siswa1: 0,
      siswa2: 0,
      maxUmum: 50,
      maxSiswa: 281,
    };
  },
  computed: {
    ...mapState('sheet', ['dataSheets']),
    tallySrc() {
      return `https://tally.so/embed/wbYLy6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&umum1=${this.umum1}&umum2=${this.umum2}&siswa1=${this.siswa1}&siswa2=${this.siswa2}`;
    },
    formClosed() {
      return this.umum1 >= this.maxUmum && this.umum2 >= this.maxUmum && this.siswa1 >= this.maxSiswa && this.siswa2 >= this.maxSiswa;
    },
  },
  async mounted() {
    try {
      await this.getData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    this.loadTallyEmbeds();
    this.observeIframeLoad();
  },
  methods: {
    ...mapActions('sheet', [GET_SHEETS]),
    async getData() {
      await this[GET_SHEETS]();
      this.umum1 = this.dataSheets["Jumlah Sesi 1 Umum"];
      this.umum2 = this.dataSheets["Jumlah Sesi 2 Umum"];
      this.siswa1 = this.dataSheets["Jumlah Sesi 1 Siswa"];
      this.siswa2 = this.dataSheets["Jumlah Sesi 2 Siswa"];
    },
    loadTallyEmbeds() {
      const d = document;
      const w = "https://tally.so/widgets/embed.js";
      const v = () => {
        if (typeof Tally !== "undefined") {
          Tally.loadEmbeds();
        } else {
          d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
            e.src = e.dataset.tallySrc;
          });
        }
      };

      if (typeof Tally !== "undefined") {
        v();
      } else if (!d.querySelector(`script[src="${w}"]`)) {
        const s = d.createElement("script");
        s.src = w;
        s.onload = v;
        s.onerror = () => console.error("Failed to load Tally script");
        d.body.appendChild(s);
      }
    },
    observeIframeLoad() {
      const iframe = this.$refs.tallyIframe;
      if (!iframe) return;

      const observer = new MutationObserver(() => {
        if (iframe.src) {
          this.loading = false; // Sembunyikan loading ketika iframe telah dimuat
          observer.disconnect(); // Hentikan observer setelah iframe selesai dimuat
        }
      });

      observer.observe(iframe, { attributes: true, attributeFilter: ["src"] });
    },
  },
};
</script>
