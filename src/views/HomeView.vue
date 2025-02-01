<template>
	<div class="w-full">
		<HeaderView id="home"/>
		<AboutView id="about"/>
		<EventView id="event"/>
		<RegistView/>
	</div>
  </template>
  
  <script>
  import HeaderView from "@/components/header/HeaderView.vue";
  import AboutView from "@/components/content/AboutView.vue";
  import EventView from "@/components/content/EventView.vue";
  import RegistView from "@/components/content/RegistView.vue";

  export default {
	metaInfo() {
    return {
      title: "Home",
      titleTemplate: "Karavista | %s",
    };
  },
	name: "HomeView",
	components: {
		HeaderView,
		EventView,
		AboutView,
		RegistView,
	},
	methods: {
  },
	computed: {},
  };
  </script>
  