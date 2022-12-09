<template>
  <div class="container px-5 mt-5">
    <div class="row gap-5">

      <ul class=" list-group card shadow-lg col" v-for="(review, index) in reviews" :key="index">
      <li class="list-group-item" style="background-color: #cd0753">
        {{ review.name }}
      </li>
      <li class="list-group-item">{{ review.review }}</li>
      <li class="list-group-item">{{ review.favoriteMovies }}</li>
      <li class="list-group-item">{{ review.rating }}<i class="bi bi-star"></i></li>
      <li class="list-group-item">{{ review.recommandation }}</li>
    </ul>
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
  width: 50%;
  text-align: left;
}
li:first-child{
  width: 103%;
}
.row{
  width: 100%;
}
li{
  /* border: 2px solid #46051e; */
}
.card{
  width: 50% !important;
}

</style>
