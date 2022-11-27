<template>
  <div class="container py-5 verify">
    <movies></movies>
    <footer></footer>
  </div>
  
</template>

<script>
// @ is an alias to /src
import movies from "@/components/movies.vue";
export default {
  name: "MoviesView",
  components: {
    movies
  },
 
};
</script>
<style scoped>

</style>