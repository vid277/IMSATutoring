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
    <title>Tutor Me</title>
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&family=Nunito:wght@400;500&family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet">
    <link href="\src\assets\commons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <div v-if="!isMobile">
      <header id="indexheader">
        <span id = "houseNavBar"><a href="index.html" class="homeButton"><router-link to="/">Home</router-link></a></span>
        <span><router-link to="/Courses">Courses</router-link></span>
        <span><a href="request.html">Become a Tutor</a></span>
        <span><a href="contact.html">Help</a></span>
        <span style="flex-grow: 100000"></span>
        <span id="whitesign" style="color: rgb(255, 255, 255);"><router-link to="/signin">Sign-In</router-link></span>
        <span id="bluesign" style="color: rgb(255, 255, 255)"><router-link to="/signup">Sign-Up</router-link></span>
    </header>
    <main>
        <div id="textcontent">
            <h2><b>Sign Up for Free</b></h2>
            <p2><b>Peer-to-peer tutoring</b></p2>
            <p3><i class="fa fa-check-circle" style="font-size:24px;color: rgb(93,170,244);"></i> Virtual peer tutoring 1-on-1 or in small-groups</p3>
            <p3><i class="fa fa-check-circle" style="font-size:24px;color: rgb(93,170,244);"></i> 100% free–for students, parents, and teachers</p3>
            <p3><i class="fa fa-check-circle" style="font-size:24px;color: rgb(93,170,244);"></i> Used across the IMSA community</p3>
        </div>
        <div id="sign-up-form">
            <form>
                <label id="label">Username: <br><input type="text" id = "Username" placeholder="  Create a username" class = "text-content" required></label>
                <br>
                <label id="label">Email: <br><input type="email"  id = "Email" placeholder="  Type your email" class = "text-content" required></label>
                <br>
                <label id="label">Password: <br><input type="password"  id = "Password" placeholder="  Create a password" class = "text-content" required></label>
                <br>
                <b><input type="submit" value="Submit" id="Submit"></b>
            </form>
            <p4 id="Signupplz"> Already have an account?
                <p4 id="bluetextlinking"><b><router-link to="/SignIn">Sign In</router-link></b> </p4>
            </p4>
        </div>
    </main>
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
  padding: 0%;
}

a{
    text-decoration: none;
    color: blue;
}

#indexheader {
  position: fixed;
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
    transition: 0.3s;
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


main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 3em;
    padding: 2em 0.5em;
    margin-top: 11vh;
}

#textcontent {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: baseline;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 1.5vh;
}

#textcontent h2 {
    color: black;
    font-size: 35px;
    margin: 0;
}

#textcontent p3 {
    display: flex;
    justify-content: start;
    align-items: center;
    color: rgb(92, 88, 88);
    font-size: 16px;
    gap: 10px;
    margin: 0.4px;
    flex-wrap: nowrap;
}

#textcontent p2 {
    color: rgb(112, 108, 108);
    font-size: 20px;
    margin: 0.6px;
    font-family: 'proxima_novaregular';
}

.fa fa-check-circle {
    height: auto;
    width: auto;
    z-index: 10000;
    color: rgb(92, 158, 235) !important;
    font-family: 'proxima_novaregular';
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#sign-up-form {
    display: flex;
    flex-direction: column;
    justify-content: column;
    align-items: center;
    padding: 3%;
    height: fit-content;
    border-radius: 10px;
    border: solid 1px;
    min-width: 35vw;
    max-width: 36vw;
    border: solid rgb(203, 213, 224) 2px;
    background-color: white;
}

#label {
    display: flex;
    flex-direction: column;
    justify-content: column;
    align-items: baseline;
    text-align: left;
    font-size: 16px;
    gap: 0.55rem;
    font-weight: 700;
    color: black;
    transition: 0.3s;
}

#Username {
    border: solid 2px;
    border-radius: 8px;
    height: 10%;
    flex-grow: 1;
    line-height: 20px;
    border: solid rgb(203, 213, 224) 2px;
    height: 45px;
    width: 32vw;
    font-size: 15px;
}

#Email {
    border: solid 2px;
    border-radius: 8px;
    height: 10%;
    flex-grow: 1;
    line-height: 20px;
    border: solid rgb(203, 213, 224) 2px;
    height: 45px;
    font-size: 15px;
    width: 32vw;
}

#Password {
    border: solid 2px;
    border-radius: 8px;
    height: 10%;
    flex-grow: 1;
    line-height: 20px;
    border: solid rgb(203, 213, 224) 2px;
    height: 45px;
    font-size: 15px;
    width: 32vw;
}

#Submit {
    border: 0px;
    width: 32vw;
    height: 7vh;
    border-radius: 5px;
    background-color: rgb(93, 170, 244) !important;
    color: white;
    font-size: large;
    text-align: center;
    margin-bottom: 0.5%;
    vertical-align: center;
}

#Password:focus-visible, #Password:active, #Password:focus {
    border-color: rgb(92, 158, 235) !important;
}

#Username:focus-visible, #Username:active, #Username:focus{
    border-color: rgb(92, 158, 235) !important;
}

#Email:focus-visible, #Email:active, #Email:focus {
    border-color: rgb(92, 158, 235) !important;
}

#Password:hover {
    border-color: rgb(92, 158, 235) !important;
    transition: 0.3s;
}

#Username:hover{
    border-color: rgb(92, 158, 235) !important;
    transition: 0.3s;
}

#Email:hover {
    border-color: rgb(92, 158, 235) !important;
    transition: 0.3s;
}

#bluetextlink {
    color: rgb(52, 129, 218);
}

#Signupplz {
    flex-direction: column;
    border: 0px;
    border-radius: 5px;
    color: black;
    font-size: 15.25px;
    text-align: center;
    margin-top: 3vh;
    line-height: 20px;
}

#Submit:after{
  background-color: antiquewhite;
}

#Submit:hover{
  background-color: rgb(74, 132, 220) !important;
    transition: 0.3s;
}
</style>