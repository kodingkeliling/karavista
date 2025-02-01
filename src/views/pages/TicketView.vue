<template>
  <div class="max-w-[1080px] mx-auto pb-4 pt-[80px] px-2 font-bold text-main">
    <div class="bg-white shadow-md rounded-lg p-6">
      <!-- <h2 class="text-4xl mb-4">Beli Tiket Karavista!</h2> -->
      <iframe data-tally-src="https://tally.so/embed/wbYLy6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="2552" frameborder="0" marginheight="0" marginwidth="0" title="Karavista"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Tiket",
      titleTemplate: "Karavista | %s",
    };
  },
  mounted() {
    console.log("Title saat ini:", document.title);
    this.loadTallyEmbeds();
  },
  watch: {
  // eslint-disable-next-line no-unused-vars
  $route(to, from) {
    this.$meta().refresh();
  }
},
  methods: {
    loadTallyEmbeds() {
      var d = document;
      var w = "https://tally.so/widgets/embed.js";
      var v = () => {
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
      } else if (d.querySelector('script[src="' + w + '"]') == null) {
        var s = d.createElement("script");
        s.src = w;
        s.onload = v;
        s.onerror = v;
        d.body.appendChild(s);
      }
    },
  },
};
</script>
