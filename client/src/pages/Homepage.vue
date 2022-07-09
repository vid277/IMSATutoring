<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
</script>

<template>
<main>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap" rel="stylesheet">
    <div class = "container container1">
        <div class = "LeftContainer">
            <div class = "LeftContent">
            <div class = "maincontent">
                <h1 class="maintext">Free Online Tutoring, <br> For IMSA Students <br> Like You.</h1>
                <br>
                <h1 class = "maindesc">Get 1-ON-1 Homework Help Led By <br> Verified IMSA Tutors</h1>
                <br>
            </div>
            <div class = "button">
                <form action="https://imsatutors.herokuapp.com/Courses">
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
    <br>
    <div class = "container container2">
         <div class =  "LeftCont">
            <div class = "LeftContent1">
            <div class = "maincontent">
                <h1 class = "headtext"> How You Learn!</h1>
                <br>
                <br>
                <h1 class="Text">1-ON-1 HELP WITH CERTIFIED TUTORS</h1>
                <br>
                <h1 class = "desc">Struggling with homework? Get live, one-on-one help <br> sessions from IMSA tutors certified in
                the subject. <br> Available at any time.</h1>
                <br>
            </div>
            <div class = "button">
                <form action="https://imsatutors.herokuapp.com/Courses">
                    <button class="learn">Get Live Help!</button>
                </form>    
            </div>
            <br>
            <br>
            <br>
            <div class = "maincontent">
                <h1 class="Text">WORK WITH YOUR PEERS IN A SMALL GROUP</h1>
                <br>
                <h1 class = "desc">Collaborate with other IMSA students on the same subject. <br> Prepare for exams, get help on assignments,
                work ahead,  <br> and clear up all your doubts.</h1>
                <br>
            </div>
            <div class = "button">
                <form action="https://imsatutors.herokuapp.com/Courses">
                    <button class="learn">Explore Courses!</button>
                </form>    
            </div>
            </div>
        </div>
        <div class = "RightCont">
            <div class = "RightContent1">
                <img src="../assets/Page2IMG1.png">
                <br>
                <img src="../assets/Page2IMG2.png">
            </div>
        </div>
    </div>
    <div class = "container container3">
        <div class = "header">
            <h1 class="help">Get help with math, science, and more.</h1> 
            <br>
            <br> 
            <div class = "buttons">
                <form action="https://imsatutors.herokuapp.com/tutors/Mathematical%20Investigations%201%2F2">
                <button class="MI1">MI I/II</button>
                </form> 
                <form action="https://imsatutors.herokuapp.com/tutors/Mathematical%20Investigations%202">
                 <button class="MI2">MI II</button>
                </form> 
                <form action="https://imsatutors.herokuapp.com/tutors/Mathematical%20Investigations%203">
                 <button class="MI3">MI III</button>
                </form> 
                 <form action="https://imsatutors.herokuapp.com/tutors/Mathematical%20Investigations%204">
                 <button class="MI4">MI IV</button>
                </form> 
                <form action="https://imsatutors.herokuapp.com/tutors/BC%20Calculus%201">
                 <button class="BCI">BC I</button>
                </form> 
            </div>
            <br>
            <br>
            <div class = "buttons1">
                <form action="https://imsatutors.herokuapp.com/tutors/BC%20Calculus%202">
                 <button class="BC2">BC II</button>
                </form> 
                <form action="https://imsatutors.herokuapp.com/tutors/BC%20Calculus%203">
                 <button class="BC3">BC III</button>
                </form> 
                <form action="https://imsatutors.herokuapp.com/tutors/Multivariable%20Calculus">
                 <button class="MVC">MVC</button>
                </form> 
                <form action="https://imsatutors.herokuapp.com/tutors/Linear%20Algebra">
                 <button class="DIFF">LIN ALG</button>
                </form> 
                <form action="https://imsatutors.herokuapp.com/Courses">
                 <button class="EXPLORE">See Subjects</button>
                </form> 
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
    </div>
    <div class = "container container4">
        <div class = "header">
            <h1 class="help">Meet Our Volunteer Tutors</h1>
        </div>
         <div class = "LeftContainer">
            <div class = "LeftCo">
            <div class = "maincontent">
                <h1 class="maintext">100+ Tutors</h1>
                <h1 class = "maindesc"> IMSA Tutors are certified and trained in subject(s) <br>
                                        that they specialize in. Connect to our tutors and <br>     
                                        form connections with upperclassmen at IMSA.</h1>
                <br>
            </div>
            <div class = "button">
                <form action="https://imsatutors.herokuapp.com/Courses">
                    <button class="learn">Meet Our Tutors</button>
                </form>
            </div>
            </div>
        </div>
        <div class = "RightContainer">
            <div class = "RightSide">
                <img src="../assets/people.png">
            </div>
        </div>
    </div>
     <div class = "container container5">
        <p class="links">
        <a class="footlink" href="https://www3.imsa.edu/wp-content/uploads/2013/04/academic_support.pdf">IMSA Academic Support Services</a>
        <br>
        <br>
        <a class="footlink" href="https://www.imsa.edu/academics/academic-programs/">IMSA Academic Programs</a>
        <br>
        <br>
        <a class="footlink" href="https://www.imsa.edu/academics/campus-resources/">Campus Resources</a>
        <br>
        <br>
        <a class="footlink" href="https://www.imsa.edu/academics/the-writing-center/">Writing Center</a>
        <br>
        <br>
        <a class="credits" href="">Made by Vidyoot Senthilvenkatesh and Sahil Veeravalli</a>
        </p>
        <div class="RightContainer">
            <img href="../assets/logoI.png">
        </div>
     </div>


        
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
main 
{
    overflow-y: scroll !important;
    height: 100%;
    width: 100%;
}
.container{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.container1{
    display: flex;
    flex-direction: row;
    background-image: url(../assets/HomePage1.png);
    width: 100%;
    height: 27%;
    background-repeat: no-repeat;
    background-size: cover;
}
.container2{
    display: flex;
    flex-direction: row;
    background-image: url(../assets/HomePage2.svg);
    width: 100%;
    height: 30%;
    background-repeat: no-repeat;
    background-size: 100%;
    
}
.LeftContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 65%;
  float: left;
  margin-right: 8vh;
  margin-top: 15vh;
}
.RightContainer{
  float: left;
  height: 100%;
  width: 50%; 
  overflow-y: hidden !important;
  margin-top: 8vh;
  margin-right: 8vh;
}
.LeftContent{
  max-width: 100%;
  height:100%;
  margin-left: 8vw; 
}
.RightContent{
  width: 100%;
  height: 100%;
  overflow-y: hidden !important;
  margin-left: 8vw;
  margin-bottom: 5vw;
}
.maintext{
  font-size: 55px;
  font-weight: 900;
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
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
.maindesc{
    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
}
.RightCont{
  float: left;
  height: 100%;
  width: 50%; 
  overflow-y: hidden !important;
  margin-top: 8vh;
}
.LeftCont{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 80%;
  float: left;
  margin-top: 3vh;
}
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');
.Text{
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 3px;
  font-family: 'Nunito', sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap');
.desc{
    font-size: 20px;
    font-weight:400;
    font-family: 'Nunito', sans-serif;
}
.headtext{
    text-align: right;
    font-size: 36px;
    font-weight: 1000;
    letter-spacing: 3px;
    font-family: 'Nunito', sans-serif;
}
.LeftContent1{
  height: 100%;
  max-width: 90%;
  margin-left: 8vw; 
}
.RightContent1{
  width: 100%;
  height: 100%;
  overflow-y: hidden !important;
  margin-left: 8vw;
}

.container3{
    display: flex;
    flex-direction: row;
    background-image: url(../assets/HomePage3.png);
    width: 100%;
    height: 16%;
    background-repeat: no-repeat;
    background-size: 100%;
    position:relative;
}
.buttons{
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
}
.MI1{
    display: inline-flex;
    white-space: nowrap;
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
}
.MI2{
    display: inline-flex;
    white-space: nowrap;
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
}
.MI3{
    display: inline-flex;
    white-space: nowrap;
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
}
.MI4{
    display: inline-flex;
    white-space: nowrap;
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
}
.BCI{
    display: inline-flex;
    white-space: nowrap;
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
}
.buttons1{
    display: inline-flex;
    white-space: nowrap;
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
}
.BC2{
    display: inline-flex;
    white-space: nowrap;
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
}
.BC3{
    display: inline-flex;
    white-space: nowrap;
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
}
.MVC{
    display: inline-flex;
    white-space: nowrap;
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
}
.DIFF{
    display: inline-flex;
    white-space: nowrap;
    background-color: #6497E4;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
}
.EXPLORE{
    display: inline-flex;
    white-space: nowrap;
    background-color: white;
    border-radius: 15px;
    padding: 12px 4em;
    outline:none;
    border: transparent;
    color: #6497E4;
    font-size: 15px;
    font-weight: bold;
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 120px; 
    font-size: 25px;
    text-decoration: underline;
}

.header{
    align-items: center; 
    width:100%;
    margin-top: 4vh;
    z-index: 9;
    position:absolute;
}
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');
.help{
    width:100%;
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 3px;
    margin-left: 2vh;
    font-family: 'Nunito', sans-serif;
}
.hyperlink{
    display:flex;
    align-items: right; 
    width:100%;
    height:25%;
    margin-left: 154vh;
    margin-top: 28vh;
}
.link{
    text-align: right;
    font-size: 28px;
    font-weight: 950;
    letter-spacing: 3px;
    text-decoration: underline;
    align-self: flex-end;
}
.container4{
    display: flex;
    flex-direction: row;
    background-image: url(../assets/HomePage4.svg);
    width: 100%;
    height: 25%;
    background-repeat: no-repeat;
    background-size: 100%;
    position:relative;
}
.RightSide{
  width: 100%;
  height: 100%;
  overflow-y: hidden !important;
  margin-top: 8vh;
}
.LeftCo{
  max-width: 90%;
  height:100%;
  margin-left: 8vw; 
  margin-top: 15vh;
}
.container5{
    display: flex;
    flex-direction: row;
    background-image: url(../assets/HomePage5.svg);
    width: 100%;
    height: 86%;
    background-repeat: no-repeat;
}
.links{
    height: 70%;
    width:80%;
    margin-top:2vh;
    text-decoration: none;
}
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');
.footlink{
    text-align: right;
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 3px;
    text-decoration: underline;
    align-self: flex-end;
    color: white;
    margin-left:4vh;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
.credits{
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 1px;
    text-decoration: underline;
    align-self: flex-end;
    color: white;
    margin-left:4vh;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
}


</style>