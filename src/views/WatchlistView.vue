<template>
  <h1>WatchList <span class="watchlistLength">{{watchlistMovies}} <i class="bi bi-cart-check"></i></span></h1
  <div class="row mt-2 w-100 py-3">
     <div class="col-lg-6 w-50">
      <form  class="mx-5" >
     <div v-if="vide!=''">
        <div class="alert alert-danger">
            Empty Film
        </div>
     </div>
      <div class="">
          <input
            v-model="search"
            class="form-control me-2 mb-2 text-center"
            type="search"
            placeholder="search movie"
            aria-label="Search"
          />
          <button class="btn btn-outline-success"  type="submit">Search</button>
        </div>
    </form>
     </div>
     <div class="col-lg-6 w-50">
      <div>
        <select v-model="select" class="form-control" id="">
            <option value="Action/Aventure" selected>Action/Aventure</option>
            <option value="Action/Cinéma de fantasy">Action/Cinéma de fantasy</option>
            <option value="Action" >Action</option>
            <option value="Cinéma de fantasy/Drame" selected>Cinéma de fantasy/Drame</option>
            <option value="Action/SF">Action/SF</option>
            <option value="SF/Aventure" > SF/Aventure</option>
            <option value="Comedie">Comedie</option>
            <option value="Film à énigme/Thriller"> Film à énigme/Thriller</option>
            <option value="Drame">Drame</option>
            <option value="Action/Aventure">Action/Aventure</option>
        </select> 
      </div>
    </div>
    <!-- <div>
     <div class="col-lg-12 mt-2 d-flex justify-content-center ">
     <select v-model="record"   class="form-control select_widht w-50" id="">
         <option value="2" selected>2</option>
         <option value="5">5</option>
         <option value="3" >3</option>
         <option value="10">10</option>
         <option value="15" > 15</option>
     </select> 
    </div>
   </div> -->
  </div>
  <div class="watch row py-5">
    <div class="col-lg-4 col-md-5 px-5 py-5" v-for="i in serched_movie">
      <div class="card">
        <img
          :src="i.postaire ? i.postaire : '' "
          class="card-img-top"
          alt=""
          style="height: 400px"
        />
        <div class="card-body mt-3">
          <h5 class="card-title">{{i.nomfilm}}</h5>
          <p class="card-text">
            <span style="color: black"><b>Genre |</b>{{i.genre}}</span>
          </p>
        </div>
      </div>
      <button type="button" class="btn btn-danger mt-4" @click="Delete(i)">
        Delete !
      </button>
    </div>
  </div>
  <!-- <div class="d-flex justify-content-center">
  <nav aria-label="...">
  <ul class="pagination pagination-lg">
     <li  class="page-item " :class="pagination.pagecurrent==i ? 'active' : ''" v-for="i in total_film_paginate"  :key="i"><a @click="changerpage(i)" class="page-link" href="#">{{i}}</a></li>
  </ul>
</nav>
</div> -->
</template>

<script>

export default {
  name: "ProfileView",
  components: {},
  data() {
    return {
      gallerie: [],
      search:'',
      vide:'',
      tab:[],
      select:'',
      record:-1,
    //   pagination:{
    //     pagecurrent:0,
    //     pageprecedent:0
    //  }
    };
  },
 
  created() {
    this.gallerie = JSON.parse(localStorage.getItem("watchlist"));
    console.log(this.gallerie);
  },
  methods: {
    changerpage(i){
     // this.pagination.pageprecedent= this.pagination.pagecurrent;
      this.pagination.pagecurrent=i;
    },
    Delete(film) {
      this.gallerie = JSON.parse(localStorage.getItem("watchlist"));
      this.gallerie = this.gallerie.filter((x) => x.nomfilm != film.nomfilm);
      localStorage.setItem("watchlist", JSON.stringify(this.gallerie));
    },
  },
  computed:{
    watchlistMovies(){
      return this.gallerie.length;
    },  
    // start(){
    //     return (this.pagination.pagecurrent-1)*this.record;
    // },
    serched_movie(){
      let i=0;
      let trouve=0;
      if(this.search!=''){
       while( i< this.watchlistMovies && trouve==0 ){
         if(this.gallerie[i].nomfilm==this.search){
           trouve=1;
           this.tab.push(this.gallerie[i]);
           return this.tab;
         }
         i=i+1;
       }
     }else{
        this.tab=[];
        if(this.select!=''){
          while( i< this.watchlistMovies && trouve==0 ){
         if(this.gallerie[i].genre==this.select){
           trouve=1;
           this.tab.push(this.gallerie[i]);
           return this.tab;
         }
         i=i+1;
       }
        }else{
           if(this.record!=-1 ){
               for(let i=this.start;i<this.record;i++){
                  this.tab.push(this.gallerie[i]);
               }
               return this.tab;
           }
          this.tab=[];
          return this.gallerie;
        }
      }
    },
    // total_film_paginate(){
    //    if(this.record!=-1){
    //      return Math.ceil(this.watchlistMovies/this.record);
    //    }else{
    //      return 3;
    //    }
    // }
  }
};
</script>
<style scoped>

.select_widht{
  width: 30% !important;
}
h1 {
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
.watchlistLength{
  margin-left: 1rem;
  color:#cd0753 ;
  border-bottom: 5px solid black;
  border-radius: 30%;
}
</style>
