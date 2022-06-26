<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
</script>

<template>
<main>
    <div class = "container container1"></div>
    <div class = "container container2"></div>
    <div class = "container container3"></div>
</main>
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
main 
{
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
}
.container{
    height: 100%;
    width: 100%;
}
.container1{
    display: flex;
    flex-direction: row;
    background-image: url("../assets/HomePage1.svg");
    width: 100%;
    height: 100%;
}
.container2{
    display: flex;
    flex-direction: row;
    background-image: url("../assets/HomePage2.svg");
}
.container3{
    display: flex;
    flex-direction: row;
} 
</style>