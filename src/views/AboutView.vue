<template>
<div class="mt-5 py-5">
    <AboutHeader :description="description" :ads="ads" :account="account" :review="review"></AboutHeader>
</div>
</template>

<script>
import AboutHeader from '@/components/AboutHeader.vue';
export default {
    name: "AboutView",
    components: {AboutHeader},
    data(){
        return{
            description:"Movies is one of the best sites for watching movies online for free. We offer full access to a database of more than 20,000 films and 5,000 high quality movies for free viewing without registration. movies is updated with new content daily and our huge database makes it easy to find all of your favorite movies .",
            ads:"Without ads and popups, your streaming site will die quickly. Ads are essential, but some sites want to limit the amount of ads in order to provide viewers with a more enjoyable viewing experience.",
            account:"To stay safe on the Internet, you should not disclose your personal information, especially on streaming sites. There are many sites that allow you to watch movies online for free without requiring an account or registration.",
            review:"Always read user reviews before entering a streaming site to avoid damaging your device or getting jailbroken. After reading them, you can also easily find the streaming site where you want to watch free movies online."
        }
       
    }
  };
</script>
<style>
</style>
