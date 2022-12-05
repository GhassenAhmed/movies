<template>
  <div class=" h2 float-start mt-5" id="upcoming-h2">
    <h2>Upcoming</h2>
  </div>
  <div class="container-fluid">
    <!---------------row1------------>
    <div class="row mt-5 container-fluid ">
      <!--------col1------------>
      <div class="col d-flex py-5" v-for="movie of movies">
        <div class="card" style="width: 20rem;">
          <img :src="movie.postaire" class="card-img-top" alt="" style="height:450px" />
          <div class="card-body mt-5">
            <h5 class="card-title">{{movie.nomfilm}}</h5>
            <p class="card-text">Genre | {{movie.genre}}<span></span> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from"axios";
export default {
  name: "MovieCard",
  components: {
  },
  data(){
    return{
      movies:null
    }
  },
  created(){
    axios.get(
      'https://my-json-server.typicode.com/GhassenAhmed/movie/upcoming'
      ).then(response=>{
        console.log(this.movies=response.data);
        
      }).catch(error=>{
        console.log(error);
      })
  }
  
};
</script>
<style scoped>
.container {
  width: 100% !important;
  bottom: 50px;
  margin: 0;
  padding: 0;
}
#upcoming-h2{
  border-bottom: 1px solid rgb(58, 55, 55);
  font-weight: 300;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-left: 5rem;
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
.row{
  width: 100%;
  display: flex;
  row-gap: 1rem;
  gap: 1rem;
  
}
.card-text{
  color: rgb(13, 4, 4);
  font-size: 20px;
}
.card-body{
  height: 150px;
}


</style>
