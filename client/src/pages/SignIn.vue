<template>
<main>
  <div id="textcontent">
      <h2><b>Sign Up for Free</b></h2>
      <p2>Peer-to-peer tutoring</p2>
      <p3><i class="fa fa-check-circle" style="font-size:24px;color: rgb(93,170,244);"></i> Virtual peer tutoring 1-on-1 or in small-groups</p3>
      <p3><i class="fa fa-check-circle" style="font-size:24px;color: rgb(93,170,244);"></i> 100% free–for students, parents, and teachers</p3>
      <p3><i class="fa fa-check-circle" style="font-size:24px;color: rgb(93,170,244);"></i> Used across the IMSA community</p3>
  </div>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click = "handleSignIn()" :disabled='!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized' id = "Sign-In"><img src = "../assets/googleLogo.png" style="width:20px">Sign in with Google</button>
  </div>
</main>
</template>

<script>
import {inject} from 'vue';

export default {
  name: 'HelloWorld',
  data(){
    return {
      user: '',
    }
  },
  methods : {
    async handleSignIn(){
      try {
        const googleUser = await this.$gAuth.signIn();
        console.log(this.$gAuth.signIn)
        if (!googleUser) {
          return null;
        }
      }
      catch (error){
        console.log(error)
        return null;
      }
    },
    async handleSignOut(){
      try {
        await this.$gAuth.signOut();
        this.user = '';
      }
      catch (error){
        console.log(error)
        return null;
      }
    }
  },
  setup(){
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');
    return {
      Vue3GoogleOauth
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  overflow-y: hidden;
}

main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 3em !important;
    padding: 2em 0.5em !important;
    height: 90vh !important;
}

@media only screen and (max-width: 900px)  {
    main {
        flex-direction: column;
    }
    #sign-up-form {
        width: 50vw; 
    }
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
    font-family: 'Nunito';
}

.fa fa-check-circle {
    height: auto;
    width: auto;
    z-index: 10000;
    color: rgb(92, 158, 235) !important;
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
    max-width: 40vw;
    border: solid rgb(203, 213, 224) 2px;
    background-color: white;
}

#Sign-In {
  padding: 20px 4em;
  background-color: transparent;
  border-radius: 15px;
  font-size: 16px;
  border-width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  border: solid 2px rgb(92, 158, 235, 0.75);
  row-gap: 1em;
}

#Sign-In:hover {
  background-color: rgb(92, 158, 235, 0.35);
  box-shadow: 5px;
}
</style>