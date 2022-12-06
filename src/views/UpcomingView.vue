<template>
  <div class="main">
    <MovieCard ></MovieCard>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from"@/components/MovieCard.vue";
export default {
  name: "UpcomingView",
  components: {
    MovieCard
  },
  data(){
    return{
      
    }
  },
};
</script>
<style scoped>
  body{
    background-color: #c5dfdf;
  }
</style>