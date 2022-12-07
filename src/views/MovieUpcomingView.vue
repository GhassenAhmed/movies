<template>
  <div class="d-flex flex-row justify-content-center">
    <div class="row mt-5 px-5">
      <div class="col-lg-6 col-md-5 col-xxl-6 py-5">
        <div class="card">
          <img
            :src="movie.postaire"
            class="card-img-top"
            alt=""
            style="height: 600px;"
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-7 justify-content-center col-xxl-6 py-5">
        <div class="py-5">
          <h1 class="nomfilm">{{ movie.nomfilm }}</h1>
          <div class="">
            <div>
              <h2 class="py-2"><b>Genre</b> | {{ movie.genre }}</h2>
              <h3 class="py-2"><b>Date</b> | {{ movie.Date_de_sortie }}</h3>
              <h4 class="py-2"><b>Réalisateur</b> | {{ movie.Réalisateur }}</h4>
              <p class="py-5" id="propos">{{ movie.propos }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MoviesService from "@/services/MovieService.js";
export default {
  name: "MovieUpcomingView",
  components: {},
  data() {
    return {
      movie: null,
      id: -1,
    };
  },
  props: {},
  created() {
    this.id = this.$route.params.id;
    MoviesService.getUpcoming(this.id).then((response) => {
      this.movie = response.data;
    });
  },
};
</script>

<style scoped>
img {
  clip-path: polygon(
    100% 0,
    100% 35%,
    95% 43%,
    100% 52%,
    100% 100%,
    65% 100%,
    0 100%,
    0% 70%,
    0 0,
    40% 0
  );
  float: left;
}
.card {
  border: none;
  box-shadow: -12px 6px 36px -4px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: -12px 6px 36px -4px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: -12px 6px 36px -4px rgba(0, 0, 0, 0.68);
  border-radius: 10px;
}
#propos {
  font-size: 25px;
  text-align: justify;
  color: black;
}
</style>