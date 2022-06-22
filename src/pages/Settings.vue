<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
    data(){
      return {
        isMobile: null,
        imageData: null
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
    },
    onSelectFile () {
        const input = this.$refs.fileInput
        const files = input.files
        if (files && files[0]) {
            const reader = new FileReader
            reader.onload = e => {
            this.imageData = e.target.result
            }
            reader.readAsDataURL(files[0])
            this.$emit('input', files[0])
        }
    },
    chooseImage () {
        this.$refs.fileInput.click()
    },
    
    }
}
</script>

<template>
    <main>
        <h2> Public Profile </h2>
        <div class = "mainTextArea">
            <div class = "publicProfile">
                <div id="sign-up-form">
                    <form>
                        <label id="label" for="username">Name: <br><input type="text" id = "Username" placeholder="{{username}}" class = "text-content" name = "username"></label>
                        <br>
                        <label id="label" for="email">Email: <br><input type="email"  id = "Email" placeholder="{{email}}" class = "text-content" name = "email"></label>
                        <br>
                        <label id="label" for="password">Password: <br><input type="password"  id = "Password" placeholder="" class = "text-content" name = "password"></label>
                        <br>
                        <label id="label" for="textAreaBio">Bio: <br>
                            <textarea name = "textAreaBio" rows="4"></textarea>                                    
                        <br></label>
                        <div class = "Bar2">
                            <label id="label" for="hall">Hall: <br><input type="text"  id = "hall" placeholder="" class = "text-content" name = "hall"></label>
                            <label id="label" for="wing">Wing: <br><input type="text"  id = "wing" placeholder="" class = "text-content" name = "wing"></label>
                        </div>
                        <label id="label" for = "remindLink">Calendly Meeting Link: <br><input type="url"  id = "Password" placeholder="{{remind link}}" class = "text-content" name = "remindLink"></label>
                        <br>
                        <b><input type="button" value="Update Information" id="updateButton"></b>
                    </form>
                </div>
                <div class = "imageSelector">
                    <label id = "label">Profile Picture: </label>
                    <div
                        class="base-image-input"
                        :style="{ 'background-image': `url(${imageData})` }"
                        @click="chooseImage"
                    >
                        <span
                            v-if="!imageData"
                            class="placeholder"
                        >
                        Choose an Image
                        </span>
                        <input
                        class="file-input"
                        ref="fileInput"
                        type="file"
                        @input="onSelectFile"
                        >
                    </div>
                </div>
            </div>
        </div> 
        <br>
    </main>
</template>

<style scoped>
* {
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  margin: 0%;
  overflow-x: hidden;
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

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgb(203, 213, 224);
}

.mainTextArea {
    display: flex;
    flex-direction: row;
    flex: 1;
    margin: 0% !important;
    width: 100%;
    height: 100%;
    background-image: url(../assets/whiteBackground.png);
    background-size: 500px;
    background-repeat: repeat;
    background-color: white;
}

main h2 {
    font-weight: 700;
    text-align: start;
    margin: 2%;
    font-size: 25px;
    border-bottom: solid 2px black;
    margin-bottom: 0%;
}

.publicProfile {
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 100%;
    height: 100%;
    margin-left: 2%;
    margin-right: 2%;
    overflow-y: auto !important;
    margin-top: 2%;
}

.textSelector {
    width: 100%;
    height: 100%;
}

label {
    font-weight: bold;
    font-size: 17px;
}

.textSelector input[type="textbox"]

.imageSelector {
    width: 100%;
    height: 100%;
    margin: 2%;
    margin-top: 0.5% !important;
}
 
textarea {
    width: 100%;
    padding: 2%;
    border-radius: 8px;
    border: solid rgb(203, 213, 224) 2px;
    resize: none; 
}

form {
    width: 65%;
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
    width: 75%;
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
    width: 100%;
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
    padding: 2%;
    width: 100%;
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
    width: 100% !important;
    padding: 2%;
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
    width: 100%;
    padding: 2%;
}

#updateButton {
    border: 0px;
    width: 100%;
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

textarea:hover {
    border-color: rgb(92, 158, 235) !important;
    transition: 0.3s;
}


#bluetextlink {
    color: rgb(52, 129, 218);
}

#updateButton:hover{
  background-color: rgb(74, 132, 220) !important;
    transition: 0.3s;
}

.imageSelector {
    height: 100%;
    width: 50%;
    margin: 3%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center !important;
}

.imageSelector #label{
    text-align: center !important;
    align-items: center;
    padding: 2%;
    background-color: white;
    width: fit-content;
    border-radius: 8px;
}

.base-image-input {
  display: flex;
  width: 300px;
  height: 300px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  margin-top: 5%;
  background-color: white;
  border:solid 1.75px rgb(203, 213, 224);
}

.base-image-input:hover {
    border-color: rgb(52, 129, 218);
}

.placeholder {
  background: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 50%;
  border: solid 1.75px  rgb(203, 213, 224);
}

.placeholder:hover {
  background: #E0E0E0;
}

.file-input {
  display: none;
}

.Bar2 {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    gap: 1em;
    flex: 1;
}

.Bar2 #label{
    padding: 0px;
}

#hall {
    border: solid 2px;
    border-radius: 8px;
    line-height: 20px;
    border: solid rgb(203, 213, 224) 2px;
    height: 45px;
    font-size: 15px;
    padding: 2%;
    width: 100%;
    margin-bottom: 5%;
}

#wing {
    border: solid 2px;
    border-radius: 8px;
    line-height: 20px;
    border: solid rgb(203, 213, 224) 2px;
    height: 45px;
    font-size: 15px;
    padding: 2%;
    width: 100%;
}



</style>