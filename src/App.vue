
<template>
  <div id="App">

    <app-header />
    <router-view></router-view> 
    <app-footer />
  </div>

</template>

<script>
 import AppHeader from './components/Layouts/AppHeader.vue';
 import AppFooter from './components/Layouts/AppFooter.vue';



export default{
  name:"App",
    components:{
       AppHeader,
       AppFooter,
  }
}

</script>
<style>
#app{
  font-family: "Lato", sans-serif;

  /* font-family: "Lora", serif; */
}


</style>
