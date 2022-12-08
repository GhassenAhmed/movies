<template>
  <form>
    <!-- name -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label float-start px-1" >Your Name</label>
      <input
        type="text"
        class="form-control"
      />
    </div>
     <!-- Favorite movies  -->
     <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label float-start px-1" >Your Favorite movies</label>
      <input
        type="text"
        class="form-control"
      />
    </div>
    <!-- Recomendation  -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label float-start px-1" >Recomendation</label>
      <input
        type="text"
        class="form-control"
      />
    </div>
    <!-- rating  -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label float-start px-1" >Rating</label>
      <input
        type="text"
        class="form-control"
      />
    </div>
    <button type="submit" class="btn btn-primary  px-3">Send</button>
  </form>
</template>
<script>
export default {
  name: "ReviewForm",
  components: {},
};
</script>
<style scoped>

input{
    border: 2px solid rgb(102, 2, 72)
}
input:hover{
    background-color: rgb(245, 250, 249);
    height: 70px;
    border: 3px solid rgb(102, 2, 72);
    cursor: pointer;
}
.btn-primary{
    background-color:#cd0753 ;
    border: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.btn-primary:hover{
    background-color:#c1517c9a
}
</style>
