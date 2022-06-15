<script setup>
    import { RouterLink, RouterView } from 'vue-router'
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
<head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&family=Nunito:wght@400;500&family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet">
    <link href="\src\assets\commons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<div v-if="!isMobile">
    <header id="indexheader">
      <span id = "houseNavBar"><a href="index.html" class="homeButton"><router-link to="/">Home</router-link></a></span>
      <span><a href="tutor.html">Courses</a></span>
      <span><a href="request.html">Become a Tutor</a></span>
      <span><a href="contact.html">Help</a></span>
      <span style="flex-grow: 100000"></span>
      <span id="whitesign" style="color: rgb(255, 255, 255);"><router-link to="/signin">Sign-In</router-link></span>
      <span id="bluesign" style="color: rgb(255, 255, 255)"><router-link to="/signup">Sign-Up</router-link></span>
    </header>
    <body>
        <div class = "mainPageWrapper">
            <div class = "innerBox">
                <h2>Courses Offered:</h2>
            </div>
        </div>
    </body>
</div>
<div v-else class = "mobileMessage">
  <h2> Sorry, this app is not supported on Mobile Devices </h2>
  <p> To use this app, please switch to a computer or tablet </p>
</div>
</template>

<style>
* {
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  margin: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0%;
}

#indexheader {
  position: relative !important;
}

.mainPageWrapper {
    width: 100%;
    height: 100%;
}

.innerBox{
    margin: 1%;
    width: 100%;
    height: 100%;
}

.innerBox h2 {
    font-weight: 500;
    font-size: 25px;
    border-bottom: solid 2px;
    max-width: fit-content;
    padding: 0%;
    margin: 0%;
}

</style>