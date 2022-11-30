<template>
  <div class=" container events py-5">
    <home>ghassen</home>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
export default {
  name: "HomeView",
  components: {
    Home
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