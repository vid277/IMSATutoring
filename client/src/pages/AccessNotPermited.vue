<template>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&family=Nunito:wght@400;500&family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet">
<link href="\src\assets\commons.css" rel="stylesheet">
  
  <div v-if="!isMobile">
  <div class="about">
    <img src="\src\assets\access-denied.jpg">
    <h1>403 - Access Denied</h1>
    <p> The page you are looking for is secured and cannot be accessed at this time</p>
    
    <!--ToDo: Make it return home-->
    <button class="buttonClickable3d" role="button">Return Home</button>
    </div>
   </div>
       <div v-else class = "mobileMessage">
      <h2> Sorry, this app is not supported on Mobile Devices </h2>
      <p> To use this app, please switch to a computer or tablet </p>
  </div>

</template>

<style>
.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    row-gap: 0.5em;
    min-height: 100vh;
}

.about img{
    justify-content: start !important;
    align-items: flex-start;
    max-width: 34rem !important;
    max-height: 24rem !important;
}

p{
    font-size: medium;
    text-align: center;
}

button{
    font-family: 'Nunito', sans-serif !important;
}

</style>

<script>
</script>