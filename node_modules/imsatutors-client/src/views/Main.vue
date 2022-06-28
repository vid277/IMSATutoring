<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<script>
export default {
    data(){
      return {
        isMobile: null,
      }
    },
    created (){
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    },
    methods: {
      checkScreenSize(){
        const constWidth = window.innerWidth;
        if (constWidth <= 750){
          this.isMobile = true;
          return;
        }
        this.isMobile = false;
      }
    }
  }
</script>

<template>
<div id="main" v-if="!isMobile">
  <header id="indexheader">
        <span id = "houseNavBar"><a href="index.html" class="homeButton"><router-link to="/">Home</router-link></a></span>
        <span><router-link to="/Courses">Courses</router-link></span>
        <span><a href="request.html">Become a Tutor</a></span>
        <span><router-link to="/help">Help</router-link></span>
        <span style="flex-grow: 100000"></span>
        <span id="whitesign" style="color: rgb(255, 255, 255);"><router-link to="/signin">Sign-In</router-link></span>
        <span id="bluesign" style="color: rgb(255, 255, 255)"><router-link to="/signup">Sign-Up</router-link></span>
        </header>
  <RouterView />
</div>
<div v-else class="mobileMessage">
    <h2> Sorry, this app is not supported on Mobile Devices </h2>
    <p> To use this app, please switch to a computer or tablet </p>
</div>
</template>

<style scoped>
#indexheader {
position: relative !important;
top: 0;
left: 0;
width: 100%;
gap: 1em;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-flow: row nowrap;
z-index: 10000;
height: 10vh;
background-color: #ffffff;
border: solid rgb(203, 213, 224) 0px;
border-bottom-width: 2px;
}
  
#indexheader a {
  text-decoration: none;
  padding: 0px 10px 0px 15px;
  color: rgb(44, 43, 43);
  overflow: visible;
}

#indexheader span a:hover {
  color: rgb(18, 120, 236);
  transition: 0.3s;
}

#bluesign {
  padding: 10px;
}

#bluesign a {
  background-color: rgb(63, 123, 192);
  color: white;
  margin-right: 10px;
  border-radius: 15px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

#bluesign a:hover {
color: white !important;
background-color: rgb(47, 83, 125);
}

#main {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

</style>