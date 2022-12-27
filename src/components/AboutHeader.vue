<template>
    <div class="container px-5 mt-5">
      <img src="../assets/logo.png" class="img" alt="">
      <p class="mt-5">{{description}}</p>
      <h2>Minimal Ads Experience</h2>
      <p>{{ads}}</p>
      <h2>No Account / Registration Required</h2>
      <p>{{account}}</p>
      <h2>Good Reviews</h2>
      <p>{{}}</p>
    </div>
  </template>
  <script>
  export default {
    name: "AboutHeader",
    components: {},
    props: {
    description: {
      type: String,
      required: true,
    },
    ads:{
        type: String,
      required: true,
    },
    account:{
        type: String,
      required: true,
    },
    review:{
        type: String,
      required: true,
    }
  },
  };
  </script>
  <style scoped>
    .img{
        width: 350px;
        height: 250px;
        border-radius: 15px;
    }
    p{
        color: black;
        font-size: 20px;
        font-family:Arial, Helvetica, sans-serif;
    }
    h2{
        color:#570d29 ;
        font-weight: bolder;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
  </style>
  
