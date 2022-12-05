<template>
  <div class=" container events py-5">
    <MovieCard></MovieCard>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from"@/components/MovieCard.vue";
export default {
  name: "HomeView",
  components: {
    MovieCard
  },
  data(){
    return{
      
    }
  }
};
</script>
<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
</style>