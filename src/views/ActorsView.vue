<template>
    <div class="container py-5 verify">
      <actors></actors>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import actors from "@/components/actors.vue";
  
  export default {
    name: "ActorsView",
    components: {
      actors,
    }, 
  };
  </script>
  <style scoped>
  
  </style>