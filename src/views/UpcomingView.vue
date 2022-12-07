<template>
  <div class="main">
    <MovieCardUpcoming></MovieCardUpcoming>
  </div>
</template>

<script>
import MovieCardUpcoming from "@/components/MovieCardUpcoming.vue";
export default {
  name: "UpcomingView",
  components: {
    MovieCardUpcoming,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
body {
  background-color: #c5dfdf;
}
</style>