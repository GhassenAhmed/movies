<template>
 <div class=" container events py-5">
    <div class="row py-5">
      <div class="py-5 mt-5" v-if="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
   <MovieCardUpcoming></MovieCardUpcoming>
  </div>
  </div>
</template>

<script>
import MovieCardUpcoming from "@/components/MovieCardUpcoming.vue";

export default {
  name: "UpcomingView",
  components: {
    MovieCardUpcoming
  },

  data() {
    return {
    };
  },
};
</script>
<style scoped>
body {
  background-color: #c5dfdf;
}
</style>