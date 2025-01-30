<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
// @ is an alias to /src

export default {
	components: {
	},
	computed: {
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap");

html,
body {
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  font-smooth: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
</style>