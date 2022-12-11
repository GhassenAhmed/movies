<template>
  <div class="container px-5 mt-5">
    <div class="row py-5">
      <div class="col-5" v-for="(review, index) in reviews" :key="index">
        <ul class="list-group card shadow-lg">
          <li class="list-group-item name" style="background-color: #cd0753">
            {{ review.name }}
          </li>
          <li class="list-group-item">{{ review.review }}</li>
          <li class="list-group-item">{{ review.favoriteMovies }}</li>
          <li class="list-group-item">
            {{ review.rating }}<i class="bi bi-star"></i>
          </li>
          <li class="list-group-item">{{ review.recommandation }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReviewList",
  components: {},
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
li {
  list-style-type: none;
  border: none;
  width: 100%;
  text-align: left;
}
li:first-child {
  width: 100%;
}
.card {
  width: 100%;
}
.name {
  color: aliceblue;
  font-weight: bolder;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
