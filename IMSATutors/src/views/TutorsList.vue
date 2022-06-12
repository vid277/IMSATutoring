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
    <main>
      <div id="wrapper">
        <div class = "filterMenu">
          <fieldset>
            <h3><span>🗃️</span>Filter Menu</h3>
            <h4>Search by Tutor:</h4>
            <div class="search">
              <form>
                  <input type="text"
                      placeholder="Type to start searching..."
                      name="search"
                      maxlength="25"     
                  >
              </form>
            </div>
            <h4>Filter by Hall: </h4>
            <div>
              <input type="checkbox" id="1501" name="1501">
              <label for="1501">1501</label>
            </div>
            <div>
              <input type="checkbox" id="1502" name="1502">
              <label for="1502">1502</label>
            </div>
            <div>
              <input type="checkbox" id="1503" name="1503">
              <label for="1503">1503</label>
            </div>
            <div>
              <input type="checkbox" id="1504" name="1504">
              <label for="1504">1504</label>
            </div>
            <div>
              <input type="checkbox" id="1505" name="1505">
              <label for="1505">1505</label>
            </div>
            <div>
              <input type="checkbox" id="1506" name="1506">
              <label for="1506">1506</label>
            </div>
            <div>
              <input type="checkbox" id="1507" name="1507">
              <label for="1507">1507</label>
            </div>
            <h4>Filter by Urgency: </h4>
            <div>
              <input type="checkbox" id="1501" name="1501">
              <label for="1501">30 minutes</label>
            </div>
            <div>
              <input type="checkbox" id="1502" name="1502">
              <label for="1502">1 hour</label>
            </div>
            <div>
              <input type="checkbox" id="1503" name="1503">
              <label for="1503">Today</label>
            </div>
            <div>
              <input type="checkbox" id="1504" name="1504">
              <label for="1504">Tomorrow</label>
            </div>
            <h4>Filter by Availability: </h4>
            <div>
              <input type="checkbox" id="1501" name="1501">
              <label for="1501">Monday</label>
            </div>
            <div>
              <input type="checkbox" id="1502" name="1502">
              <label for="1502">Tuesday</label>
            </div>
            <div>
              <input type="checkbox" id="1503" name="1503">
              <label for="1503">Wednesday</label>
            </div>
            <div>
              <input type="checkbox" id="1504" name="1504">
              <label for="1504">Thursday</label>
            </div>
            <div>
              <input type="checkbox" id="1504" name="1504">
              <label for="1504">Friday</label>
            </div>
            <div>
              <input type="checkbox" id="1504" name="1504">
              <label for="1504">Saturday</label>
            </div>
            <div>
              <input type="checkbox" id="1504" name="1504">
              <label for="1504">Sunday</label>
            </div>
          </fieldset>
        </div>
        <br>
        <br>
      </div>
      <div class = "mainTextPlace">
        <h2>Hi</h2>
      </div>
    </main>
    </body>
</div>
<div v-else class = "mobileMessage">
  <h2> Sorry, this app is not supported on Mobile Devices </h2>
  <p> To use this app, please switch to a computer or tablet </p>
</div>
</template>

<style>
@font-face {
    font-family: 'proxima_nova';
    src: url('Font_Proximanova/proxima_nova_font-webfont.woff2') format('woff2'), url('Font_Proximanova/proxima_nova_font-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

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
  justify-content: flex-start;
  margin-top:  0px !important;
  padding: 0%;
}

#wrapper {
  height: 100vh;
  border: solid 0px #d9def9;
  border-right: 2px solid rgb(203, 213, 224);
  overflow-y: auto !important;
}

.filterMenu {
  width: max-content;
  padding: 25px;
  padding-right: 45px;
  position: relative;
}

.filterMenu h3 {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-bottom: solid 2px #d9def9;
}

.filterMenu h4 {
  font-weight: bold;
  margin-top: 13px;
}

#wrapper .filterMenu fieldset{
  border: solid 0px;
  justify-content: flex-start;
  width: max-content;
  height: 100%;
}

#wrapper .filterMenu div input {
  margin: 0.6rem;
}

#wrapper .filterMenu div label {
  margin: 0.1 rem;
}

.search input[type=text]{
  width: fit-content;
  height: 35px;
  border-radius: 5px;
  border: solid 1px;
  padding: 5px;
  font-size: small;
}

.search input{
  margin: 0% !important;
}

.search {
  margin-top: 10px;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgb(203, 213, 224);
}

.mainTextPlace {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>