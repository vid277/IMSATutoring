<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
</script>

<template>
    <main>
        <div id="textcontent">
            <h2><b>Sign In Now!</b></h2>
            <p2>Peer-to-peer tutoring in 3 easy steps</p2>
            <p3><i class="fa fa-check-circle" style="font-size:24px;color: rgb(93,170,244);"></i> Create an account </p3>
            <p3><i class="fa fa-check-circle" style="font-size:24px;color: rgb(93,170,244);"></i> Find available tutors across IMSA </p3>
            <p3><i class="fa fa-check-circle" style="font-size:24px;color: rgb(93,170,244);"></i> Sign-up and meet with your tutor </p3>
        </div>
        <div id="sign-up-form">
            <form>
                <label id="label">Email: <br><input type="email"  id = "Email" placeholder="  Type your email" class = "text-content" required></label>
                <br>
                <label id="label">Password: <br><input type="password"  id = "Password" placeholder="  Create a password" class = "text-content" required></label>
                <br>
                <b><input type="submit" value="Submit" id="Submit"></b>
            </form>
            <p4 id="Signupplz"> Don't have an account?
                <p4 id="bluetextlinking"><router-link to="/SignUp">Sign Up</router-link> </p4>
            </p4>
        </div>
    </main>
</template>

<style scoped>
#indexheader {
    margin-bottom: 0% !important ;
}

main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 3em !important;
    height: 90vh !important;
    width: 100% !important;
    background-image: url(../assets/Background_signin_svg.svg);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

#textcontent {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: baseline;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 1.5vh !important;
}

#textcontent h2 {
    color: black;
    font-size: 35px;
    margin: 0;
    flex-wrap: nowrap;
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
    padding: 2px;
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
    padding: 2px;
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
    padding: 2px;
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