<template>
  <div>
    <NavbarView v-if="currentUrl == '/'"/>
    <NavbarView2 v-else/>
    <div>
    <router-view />
  </div>
   <FooterView/>
  </div>
</template>

<script>
import NavbarView from "@/components/navbar/NavbarView.vue";
import NavbarView2 from "@/components/navbar/NavbarView2.vue";
import FooterView from "@/components/footer/FooterView.vue";

export default {
  name: "LayoutDashboard",
  components: {
    NavbarView,
    NavbarView2,
    FooterView,
},
  computed: {
    currentUrl() {
      return this.$route.fullPath;
    },
  },
  methods: {
  },
};
</script>
