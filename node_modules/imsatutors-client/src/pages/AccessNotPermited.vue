<template>
  
<div class="about">
  <img src="\src\assets\access-denied.jpg">
  <h1>403 - Access Denied</h1>
  <p> The page you are looking for is secured and cannot be accessed at this time</p>
  
  <!--ToDo: Make it return home-->
  <button class="buttonClickable3d" role="button">Return Home</button>
</div>
</template>

<style scoped>
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