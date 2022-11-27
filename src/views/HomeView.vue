<template>
  <div class=" container events py-5">
    <home/>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import home from "@/components/home.vue";
export default {
  name: "HomeView",
  components: {
    home
  },
  data(){
    return{
      
    }
  }
};
</script>
<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
</style>