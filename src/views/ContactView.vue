<template>
      <div class="row mt-5 py-5">
        <div class="col-md-4 col-lg-4 col-xxl-4 px-5">
        <ReviewFrom @review-submitted="addReview"></ReviewFrom>
      </div>

      <div class="col-md-8 col-lg-8 col-xxl-8">
        <ReviewList :reviews="reviews" v-if="reviews.length"></ReviewList>
      </div>
      </div>
  </template>
  
  <script>
  // @ is an alias to /src
import ReviewFrom from "@/components/ReviewForm.vue";
import ReviewList from "@/components/ReviewList.vue";
  export default {
    
    name: "ContactView",
    components: {
      ReviewFrom,ReviewList
    },
    data(){
      return{
        reviews:[],
      }
    },
    methods:{
      addReview(review){
            this.reviews.push(review);
            console.log(this.reviews);
        },
    },
    

  };
  </script>
  <style scoped>
    
  </style>