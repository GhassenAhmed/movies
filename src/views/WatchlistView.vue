<template>
    <div class="watch row py-5">

     <div class=" mt-5 py-5" v-if="loading">
      <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
     </div>

    <div  class="col-lg-4 col-md-5 px-5 py-5" v-for="i  in gallerie" >
        <div class="card">
        
          <img 
            :src="i.postaire"
            class="card-img-top"
            alt=""
            style="height: 400px"
          />
          <div class="card-body mt-3">
            <h5 class="card-title"></h5>
            <p class="card-text">
              <span style="color: black"><b>Genre |</b></span> 
            </p>
          </div>
        </div>
      </div>

      </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: "ProfileView",
    components: {
      
    },
    data(){
      return{
        gallerie:[],
        loading:true,
        test:[]


      }
    },
    mounted(){
      setTimeout(()=>this.loading=false,2000);
    },
    created(){
      this.gallerie=JSON.parse(localStorage.getItem("watchlist"));
      console.log(this.gallerie);
    },

  };
  </script>
  <style scoped>
  
  h1{
    padding-top: 200px;
  }
  .card {
  box-shadow: -12px 6px 36px -4px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: -12px 6px 36px -4px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: -12px 6px 36px -4px rgba(0, 0, 0, 0.68);
  border-radius: 10px;
}
.card-img-top:hover {
  -moz-transform: scale(0.9) skew(1deg, 0deg);
  -webkit-transform: scale(0.9) skew(1deg, 0deg);
  -o-transform: scale(0.9) skew(1deg, 0deg);
  -ms-transform: scale(0.9) skew(1deg, 0deg);
  transform: scale(0.9) skew(1deg, 0deg);
  outline: 5px solid #cd0753;
  outline-offset: 0px;
  border-radius: 39px 0px 40px 0px;
}
.card-text,
.card-title {
  color: rgb(13, 4, 4);
  font-size: 20px;
  border-bottom: none !important;
}
.card-body {
  height: 150px;
}
  </style>