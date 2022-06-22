<template>
  <div class="about">
    <img src="\src\assets\2663517.jpg">
    <h1>404 - Page not found</h1>
    <p> The page you are looking for might have been temporarily removed, had its name changed, or is temporarily unavailable </p>
    
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