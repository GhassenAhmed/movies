<template>
  <div class="row" id="div-h2">
    <div class="col">
      <h2 class="mt-5">Upcoming</h2>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-4 col-md-5 px-5 py-4" v-for="movie of movies">
      <router-link :to="/MovieUpcoming/ + movie.id">
        <div class="card">
          <img
            :src="movie.postaire"
            class="card-img-top"
            alt=""
            style="height: 400px"
          />

          <div class="card-body mt-3">
            <h5 class="card-title">{{ movie.nomfilm }}</h5>
            <p class="card-text">
              <span style="color: black"><b>Genre |</b></span> {{ movie.genre }}
            </p>
          </div>
        </div>
      </router-link>
      <button
        type="button"
        class="btn btn-secondary mt-4"
        @click.prevent="AddWatch(movie)"
       
      >
        Add WatchList !
      </button>
    </div>
  </div>
  <router-view />
</template>
<script>
import MovieService from "@/services/MovieService";
export default {
  name: "MovieCardUpcoming",
  components: {},
  data() {
    return {
      movies: null,
      watchlist: [],
      
    };
  },
  created() {
    MovieService.getUpcomings().then((response) => {
      this.movies = response.data;
    });
  },
  mounted() {
    this.watchlist =
      JSON.parse(localStorage.getItem("watchlist")) == null
        ? localStorage.setItem("watchlist", JSON.stringify(this.watchlist))
        : JSON.parse(localStorage.getItem("watchlist"));
  },
  methods: {
    AddWatch(film) {
      let i = 0;
      let item = {
        index:'watchlist',
        id: film.id,
        postaire: film.postaire,
        nomfilm: film.nomfilm,
        genre: film.genre,
      };
      if (this.watchlist.length > 0) {
        for (i = 0; i < this.watchlist.length; i++) {
          if (this.watchlist[i].nomfilm == item.nomfilm ) {
            alert("film est deja ajoute");
            return;
          }
        }
      }
      this.watchlist.push(item);
      localStorage.setItem("watchlist", JSON.stringify(this.watchlist));
    },
  },
};
</script>
<style scoped>
#upcoming-h2 {
  border-bottom: 1px solid rgb(135, 36, 36);
  font-weight: 300;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  position: absolute;
}
#upcoming-h2:hover {
  border-bottom: 3px solid #cd0753;
}
#div-h2 h2 {
  text-align: center;
  padding-top: 50px;
}
.py-5 {
  padding-top: 7rem !important;
  padding-bottom: 5rem !important;
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
button {
  -webkit-box-shadow: -7px 7px 14px 0px rgba(0, 0, 0, 0.74);
  box-shadow: -7px 7px 14px 0px rgba(0, 0, 0, 0.74);
}
</style>
