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
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&family=Nunito:wght@400;500&family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet">
  <link href="\src\assets\commons.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div v-if="!isMobile">
    <header id="indexheader">
      <span id = "houseNavBar"><a href="index.html" class="homeButton"><router-link to="/">Home</router-link></a></span>
      <span><router-link to="/Courses">Courses</router-link></span>
      <span><a href="request.html">Become a Tutor</a></span>
      <span><router-link to="/help">Help</router-link></span>
      <span style="flex-grow: 100000"></span>
      <span id="whitesign" style="color: rgb(255, 255, 255);"><router-link to="/signin">Sign-In</router-link></span>
      <span id="bluesign" style="color: rgb(255, 255, 255)"><router-link to="/signup">Sign-Up</router-link></span>
    </header>
    <body>
      <main>
        <div class = "textContent">
          <div id = "nameBox">
            <h1>[Tutor Name]</h1>
          </div>
          <div id = "tutorDescription">
            <div id = "tutorImage">
              <img src="\src\assets\access-denied.jpg">
            </div>
            <div id = "textbooking">
            <!--ToDo: Add a text area with details for booking a tutor-->
            </div>
          </div>
          <br>
          <br>
          <br>
        </div>
      </main>
    </body>
</div>
<div v-else class = "mobileMessage">
  <h2> Sorry, this app is not supported on Mobile Devices </h2>
  <p> To use this app, please switch to a computer or tablet </p>
</div>
</template>

<style scoped>
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

main {
  margin-top:  0px !important;
  padding: 0% !important;
  width: 100%;
  height: 100%;
}

.textContent {
  padding: 1%;
  width: 100%;
}

.textContent #nameBox{
  width: 100%;
  text-align: center;
  background-color: rgb(203, 213, 224);
  padding: 1%;
  border-radius: 10px;
}

.textContent #nameBox h1{
  font-weight: 700 !important;
}

.textContent #tutorDescription {
  display: flex;
  row-gap: 1em;
  gap: 1em;
  height: calc(100vh);
  width: 100%;
  overflow-y: auto !important;
}

.textContent #tutorDescription #tutorImage{
  margin-top: 1%;
}
</style>