<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
</script>

<template>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&family=Nunito:wght@400;500&family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet">
<link href="\src\assets\commons.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

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
}
.container{
    height: 100%;
    width: 100%;
}
.container1{
    display: flex;
    flex-direction: row;
    background-image: url(.../assets/HomePage1.svg);
}
.container2{
    display: flex;
    flex-direction: row;
    background-image: url(.../assets/HomePage2.svg);
}
.container3{
    display: flex;
    flex-direction: row;
    background-image: url(.../assets/HomePage3.svg);
} 
</style>