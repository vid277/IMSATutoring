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
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700;800&family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet">
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
            <h4>Search by Course:</h4>
            <div class="search">
              <form>
                  <input type="text"
                      placeholder="Type to start searching..."
                      name="search"
                      maxlength="20"     
                  >
              </form>
            </div>
            <h4>Filter by Subject: </h4>
            <div>
                <div>
                    <input type="checkbox" id="Math" name="Math">
                    <label for="Math">Math</label>
                </div> 
                <div>
                    <input type="checkbox" id="Science" name="Science">
                    <label for="Science">Science</label>
                </div> 
                <div>
                    <input type="checkbox" id="ComputerScience" name="ComputerScience">
                    <label for="ComputerScience">Computer Science</label>
                </div>
                <div>
                    <input type="checkbox" id="Wellness" name="Wellness">
                    <label for="Wellness">Wellness</label>
                </div> 
            </div>
          </fieldset>
        </div>
        <br>
        <br>
      </div>
      <div class = "mainTextPlace">
        <div class = "innerBox">
          <div class = "TextPlaceWrapper">
            <h2>Courses Offered: </h2>
          </div>
          <div class = "textDiv">
            <h2>Math: </h2>
            <div class = "courses mathCourses">
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">MI - I/II</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">MI - II</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">MI - III</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">MI - IV</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">BC - Calculus 1</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">BC - Calculus 2</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">BC - Calculus 3</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">Multivariable Calculus</h5>
                </div> 
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">Number Theory</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">Linear Algebra</h5>
                </div>
            </div>
          </div>
          </div>
          <div class = "textDiv" style = "background-color: rgba(235, 206, 232, 0.556);">
            <h2>Science: </h2>
            <div class = "courses scienceCourses">
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">SI - Chemistry</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">SI - Physics</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">MI - III</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">MI - IV</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">BC - Calculus 1</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">BC - Calculus 2</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">BC - Calculus 3</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">Multivariable Calculus</h5>
                </div> 
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">Number Theory</h5>
                </div>
            </div>
            <div class="card">
                <div class = "innerCard">
                    <h5 class="card-title">Linear Algebra</h5>
                </div>
            </div>
          </div>
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
  text-align: center;
}

main {
  margin-top:  0px !important;
  padding: 0% !important;
  width: 100%;
  height: 100%;
  gap: 0rem !important;
}

#wrapper {
  height: calc(100vh);
  border-right: 2px solid rgb(203, 213, 224);
  overflow-y: auto !important;
  width: 25%;
}

.filterMenu {
  padding: 25px;
}

.filterMenu h3 {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-bottom: solid 2px #69696929;
  text-align: center;
}

.filterMenu h4 {
  font-weight: bold;
  margin-top: 13px;
}

.filterMenu h5 {
  margin-top: 5px;
  margin-left: 10px;
  font-size: 14.5px;
  font-weight: 700;
  text-decoration: underline;
}

#wrapper .filterMenu fieldset{
  border: solid 0px;
  justify-content: flex-start;
  height: 100%;
}

#wrapper .filterMenu div input {
  margin: 0.6rem;
}

#wrapper .filterMenu div label {
  margin: 0.6rem;
}

.search input[type=text]{
  height: 35px;
  border-radius: 5px;
  border: solid 1px;
  padding: 5px;
  font-size: small;
  width: 100%;
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

.mainTextPlace{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  height: calc(100vh);
  width: 100%;
}

.mainTextPlace .innerBox {
  width: 100%;
  padding: 2%;
  height: 100%;
  overflow-y: auto;
}

.TextPlaceWrapper h2{
    font-weight: 700;
    background-color: rgba(203, 213, 224, 0.24);
    border-radius: 4px;
    padding: 1.75%;
}

.courses {
    display: flex;
    gap: 0.5em;
    row-gap: 0.5em;
    flex-wrap: wrap;
}

.card {
  padding: 0em 1em 0em ;
  border-radius: 25px;
  text-align: center;
  border: solid 2px;
  border-color: rgb(203, 213, 224);
  background-color: rgb(244, 241, 241);
  display: flex;
  height: fit-content;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  row-gap: 0.25em;
  transition: 0.3s;
}

.card .innerCard {
    width: 100%;
    margin: 20px;
}

.card .innerCard h5{
    font-size: medium;
}

.card .card-title {
  font-weight: 700;
  font-size: 1.5em;
}

.card:hover {
  background-color: #69696929;
  color: #000000;
}

.textDiv {
    padding: 1%;
    background-color: rgb(153, 189, 227, 0.5);
    margin-top: 1%;
    border-radius: 5px;
}

.textDiv h2 {
    font-weight: 700;
    font-size: 20px;
    text-decoration: underline;
    padding: 0.5%;
    margin-bottom: 0.5%;
    width: max-content;
}
</style>