<template>
    
      <div class="row d-flex flex-row">
        <!-----------col1------------>
        <div class="col" >
          <img :src=movie.postaire style="height:40%;">
        </div>
        <!-----------col2------------>
        <div class="col">
          <h2>{{movie.nomfilm}}</h2>
        </div>
     
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

<style scoped>
img{
  clip-path: polygon(100% 0, 100% 35%, 95% 43%, 100% 52%, 100% 100%, 65% 100%, 0 100%, 0% 70%, 0 0, 40% 0);
  float: left;
}

</style>