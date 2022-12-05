<template>
    <div class="movie">
        <h1>GhassenAhmed{{movie}}</h1>
    </div>
</template>
<script>
/*import axios from"axios";*/
import MoviesService from "@/services/MovieService.js";
export default {
  name: "MovieView",
  components: {
  },
  data(){
    return{
      movie:null,
      id:-1
    }
  },
  props:{
   
  },
  
  created(){
    this.id=this.$route.params.id;
    MoviesService.getUpcoming(this.id).then((response)=>{
      this.movie=response.data;
    })
  }
  
};
</script>

<style>
</style>