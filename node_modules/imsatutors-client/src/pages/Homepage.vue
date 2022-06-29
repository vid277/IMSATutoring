<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
</script>

<template>
<main>
    <div class = "container container1">
        <div class = "LeftContainer">
            <div class = "LeftContent">
                <h1 class = "maintext">Free Online Tutoring, <br> For IMSA Students <br> Like You.</h1>
                <br>
                <h1 class = "maindesc">Get 1-ON-1 Homework Help Led By <br> Verified IMSA Tutors</h1>
                <br>
                <div class = "button">
                    <form action="http://localhost:8080/Courses/">
                        <button class="learn">Learn Now!</button>
                    </form>
                </div>
            </div>
        </div>
        <div class = "RightContainer">
            <div class = "RightContent">
                <img src="../assets/thinking-person.png">
            </div>
        </div>
    </div>
    <!---<div class = "container container2">
        <div class = "LeftHandSide">
        </div>
        <div class = "RightHandSide"></div>
    </div>

    <div class = "container container3">
        <div class = "LeftHandSide">
        </div>
        <div class = "RightHandSide"></div>
    </div>-->
     
</main>
</template>

<style scoped>
* {
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  margin: 0%;
  overflow-x: hidden;
  padding: 0%;
  overflow-y: auto !important;
}
main 
{
    display: flex;
    flex-direction: column;
    overflow-y: hidden !important;
    height: 100%;
    width: 100%;
}
.container{
    height: 100%;
    width: 100%;
}
.container1{
    display: flex;
    flex-direction: row;
    background-image: url(../assets/HomePage1.svg);
    width: 100%;
    height: 100%;
    margin-top: 8vh;
}
/*.container2{
    display: flex;
    flex-direction: row;
    background-image: url(../assets/HomePage2.svg);
}
.container3{
    display: flex;
    flex-direction: row;
    background-image: url(../assets/HomePage3.svg);
}*/
.LeftContainer{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 28vw;
  background: #fff;
  width: 50%;
  float: left;
  margin-top: 8vh;
}
.RightContainer{
  float: left;
  height: 48vw;
  width: 50%; 
  overflow-y: hidden !important;
}
.LeftContent{
  max-width: 90%;
  margin-left: 8vw; 
}
.RightContent{
  width: 100%;
  height: 48vw;
  overflow-y: hidden !important;
  margin-left: 8vw;
}
.maintext{
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 3px;
}
.learn{
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 5em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
}
.maindesc{
    font-size: 28px;
}
</style>