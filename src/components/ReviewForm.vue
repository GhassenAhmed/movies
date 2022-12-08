<template>
  <form>
    <!-- name -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label float-start px-1"
        >Your Name</label
      >
      <input type="text" class="form-control" />
    </div>
    <!-- Favorite movies  -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label float-start px-1"
        >Your Favorite movies</label
      >
      <input type="text" class="form-control" />
    </div>
    <!-- Recomendation  -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label float-start px-1"
        >Recomendation</label
      >
      <input type="text" class="form-control" />
    </div>
    <!-- rating  -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label float-start px-1"
        >Rating</label
      >
      <input type="number" class="form-control" />
    </div>
    <!-- Review  -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label float-start px-1"
        >Review</label
      >
      <input type="text" class="form-control" />
    </div>
    <input type="submit" id="btn" class="btn btn-primary px-3" value="Send">
  </form>
</template>
<script>
export default {
  name: "ReviewForm",
  components: {},
  data() {
    return {
      name: "",
      review: "",
      favoriteMovies:"",
      rating: null,
      recommandation: null,
    };
  },
  methods:{
    onSubmit(){
            if(this.name==='' || this.review==='' ||favoriteMovies=='' || this.rating===null || this.recommandation===null){
                alert('remplissez vos champs !');
            }else{
            let MoviesReview = {
                name:this.name,
                review:this.review,
                favoriteMovies:this.favoriteMovies,
                rating:this.rating,
                recommandation:this.recommandation,
               
            }
            this.$emit('review-submitted',MoviesReview);
            this.name='';
            this.review='';
            this.favoriteMovies='';
            this.rating=null;
            this.recommandation=null;
        }
          
        },
  }
};
</script>
<style scoped>
input {
  border: 2px solid rgb(102, 2, 72);
}
input:hover {
  background-color: rgb(245, 250, 249);
  height: 50px;
  border: 3px solid rgb(102, 2, 72);
  cursor: pointer;
}
.btn-primary {
  background-color: #cd0753;
  border: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.btn-primary:hover {
  background-color: #c1517c9a;
}
#btn{
    width: 150px;
}

</style>
