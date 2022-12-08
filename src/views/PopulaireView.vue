<template>
  <div class=" container events py-5">
    <div class="row py-5">
      <div class="py-5 mt-5" v-if="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
   <MovieCardPopulaire></MovieCardPopulaire>
  </div>
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