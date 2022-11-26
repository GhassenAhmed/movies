<template>
    <div class="container profile py-5">
        <profile></profile>  
    </div>
</template>
<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";
export default {
  name: "ProfileView",
  components: {
    Profile,
  },
};
</script>