<template>
  <div>
    <div class=" h2 float-start mt-5" id="upcoming-h2">
    <h2>Upcoming</h2>
  </div>

 
    <!---------------row1------------>

    
      <!--------col1------------>
      <div class="justify-content-center d-flex">
      <div class="row container gap-5 mt-5">
        <div class="col-lg-3 col-md-5 col-xxl-3  py-5" v-for="movie of movies">
        <router-link :to="/Movie/+movie.id">
        <div class="card" >
          <img :src="movie.postaire" class="card-img-top" alt="" style="height:450px"/>
          <div class="card-body mt-5">
            <h5 class="card-header">{{movie.nomfilm}}</h5>
            <p class="card-text">Genre | {{movie.genre}}<span></span> </p>
          </div>
        </div>
      </router-link>
      </div>  
      </div>
    </div>
    </div>
  
  <router-view />
</template>
<script>
import MovieService from '@/services/MovieService';
export default {
  name: "MovieCard",
  components: {
  },
  data(){
    return{
      movies:null,
    }
  },
  created(){
    MovieService.getUpcomings().then((response)=>{
      this.movies=response.data;
    })
  }
  
  
};
</script>
<style scoped>
#upcoming-h2{
  border-bottom: 1px solid rgb(135, 36, 36);
  font-weight: 300;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-left: 5rem;
  position: absolute;
}
#upcoming-h2:hover{
  border-bottom:3px solid #cd0753 ;
}
.py-5{
  padding-top: 7rem!important;
  padding-bottom: 5rem!important;
}
.card{
  box-shadow: -12px 6px 36px -4px rgba(0,0,0,0.68);
-webkit-box-shadow: -12px 6px 36px -4px rgba(0,0,0,0.68);
-moz-box-shadow: -12px 6px 36px -4px rgba(0,0,0,0.68);
  border-radius: 10px;

}
.card-img-top:hover{
-moz-transform: scale(0.9) skew(1deg, 0deg);
-webkit-transform: scale(0.9) skew(1deg, 0deg);
-o-transform: scale(0.9) skew(1deg, 0deg);
-ms-transform: scale(0.9) skew(1deg, 0deg);
transform: scale(0.9) skew(1deg, 0deg);
outline: 5px solid #cd0753;
outline-offset: 0px;
border-radius: 39px 0px 40px 0px;
}
/*.row{
  width: 100%;
  display: flex;
  row-gap: 1rem;
  gap: 1rem;
  position: relative;
  
}*/
.card-text, .card-title{
  color: rgb(13, 4, 4);
  font-size: 20px;
  border-bottom: none;
}
.card-body{
  height: 150px;
}


</style>
