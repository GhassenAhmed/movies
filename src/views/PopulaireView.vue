<template>
  <div class=" container events py-5">
   <MovieCardPopulaire></MovieCardPopulaire>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCardPopulaire from "@/components/MovieCardPopulaire.vue"
export default {
  name: "PopulaireView",
  components: {
    MovieCardPopulaire
  },
  data(){
    return{
      
    }
  }
};
</script>
<style scoped>
</style>