<template>
    <div class=" container py-5 contact">
        
        <contact></contact>
        
    </div>
</template>
<script>
// @ is an alias to /src
import Contact from "@/components/Contact.vue";
import Profile from "@/components/Profile.vue";
export default {
  name: "ContactView",
  components: {
    Contact,Profile
  },
};
</script>