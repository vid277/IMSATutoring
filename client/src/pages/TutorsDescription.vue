<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  data () {
    return {
      tutorDetails:[],
      mathCourses: [],
      csCourses: [],
      otherCourses: [],
      chemCourses: [],
      physicsCourses: [],
      bioCourses: [],
    };
  },
  methods : {
  },
  computed: {
    tutorName() { 
      return this.$route.params.tutorName 
    }
  },
  created() {
    console.log(this.tutorName);
    fetch(`/api/booktutor/${encodeURIComponent(this.tutorName)}`)
      .then(response => (response.json()))
      .then((stringify) => {this.tutorDetails = stringify;})
      .then(() => {
        var tempChem = [];
        var tempPhysics = [];
        var tempBio = [];

        if(this.tutorDetails.math_courses != null){
          for (var i = 0; i < this.tutorDetails.math_courses.length; i++){
            this.mathCourses.push(this.tutorDetails.math_courses[i])
          }
        }
        if(this.tutorDetails.cs_courses != null){
          for (var i = 0; i < this.tutorDetails.cs_courses.length; i++){
            this.csCourses.push(this.tutorDetails.cs_courses[i])
          }
        }
        if(this.tutorDetails.other_courses != null){
          for (var i = 0; i < this.tutorDetails.other_courses.length; i++){
            this.otherCourses.push(this.tutorDetails.other_courses[i])
          }
        }
        if(this.tutorDetails.chem_course != null){
          for (var i = 0; i < this.tutorDetails.chem_course.length; i++){
            this.chemCourses.push(this.tutorDetails.chem_course[i])
          }
        }
        if(this.tutorDetails.physics_courses != null){
          for (var i = 0; i < this.tutorDetails.physics_courses.length; i++){
            this.physicsCourses.push(this.tutorDetails.physics_courses[i])
          }
        }
        if(this.tutorDetails.bio_courses != null){
          for (var i = 0; i < this.tutorDetails.bio_courses.length; i++){
            this.bioCourses.push(this.tutorDetails.bio_courses[i])
          }
        }
      })
    },
}
</script>

<template>
<main>
    <h2> {{tutorDetails.first_name + " " + tutorDetails.last_name}} </h2>
    <div class = "mainTextArea">
        <div class = "publicProfile">
            <div id="sign-up-form">
            <div class="aboutmeDiv">
                <h3 id = "label">About Me:</h3>
                <p1 class = "aboutMe">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium rem ad molestiae, itaque architecto! Doloremque possimus ex, odio assumenda ratione laborum maiores, facere perferendis voluptatum mollitia hic molestias libero.
                </p1>
                </div>
                <div class = "tutorSubjectsDiv">
                  <h3 id = "label">Subjects I Tutor:</h3>
                  <div class = "tutorCourses">
                    <div class = "courses" v-if="!(mathCourses.length == 0)">
                    <h3 id = "labelUnder">Math Courses</h3>
                      <div class = "courses" v-for = "math in mathCourses">
                        <ul>{{math}}</ul>
                      </div>
                  </div>
                  <div class = "courses" v-if="!(csCourses.length == 0)">
                    <h3 id = "labelUnder">Computer Science Courses</h3>
                      <div class = "courses" v-for = "cs in csCourses">
                        <ul>{{cs}}</ul>
                      </div>
                  </div>
                  <div class = "courses" v-if="!(chemCourses.length == 0)">
                    <h3 id = "labelUnder">Chemistry Courses</h3>
                      <div class = "courses" v-for = "chem in chemCourses">
                        <ul>{{chem}}</ul>
                      </div>
                  </div>
                  <div class = "courses" v-if="!(physicsCourses.length == 0)">
                    <h3 id = "labelUnder">Physics Courses</h3>
                      <div class = "courses" v-for = "physics in physicsCourses">
                        <ul>{{physics}}</ul>
                      </div>
                  </div>
                  <div class = "courses" v-if="!(bioCourses.length == 0)">
                    <h3 id = "labelUnder">Biology Courses</h3>
                      <div class = "courses" v-for = "bio in bioCourses">
                        <ul>{{bio}}</ul>
                      </div>
                  </div>
                </div>
              </div>
              <div id = "twotable">
                <div>                    
                  <h3 id = "label">Hall:</h3>
                  <p6 class = "hallNumber">{Hall Number}</p6>
                </div>
                <div>                    
                  <h3 id = "label">Wing:</h3>
                  <p6 class = "hallNumber">{Wing Number}</p6>
                </div>                  
                </div>
                <button href="#" class = "studentBookingLink" id = "Submit">Click here to schedule a time</button>
            </div>
            <div class = "imageSelector">
                  <div
                      class="base-image-input"
                    >
                    <span
                        v-if="!imageData"
                        class="placeholder"
                    >
                    Image Here
                    </span>
                </div>
            </div>
            <br>
            <br>
            <br>
            <br>
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
  overflow-y: scroll;
  display: flex;
  flex-flow: column nowrap;
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
    /*flex: 1;*/
    margin: 0% !important;
    width: 100%;
    flex-grow: 10000000;
    background-image: url(../assets/whiteBackground.png);
    background-size: 500px;
    background-repeat: repeat;
    background-color: white;
}

main h2 {
    font-weight: 700;
    text-align: start;
    margin: 2%;
    padding-bottom: 2%;
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

@media only screen and (max-width: 900px)  {
  .publicProfile {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      width: 100%;
      height: 100%;
      margin-left: 2%;
      margin-right: 2%;
      overflow-y: auto !important;
      margin-top: 2%;
  }
}

.textSelector {
    width: 100%;
    height: 100%;
}

label {
    font-weight: bold;
    font-size: 26px;
}

form {
    width: 65%;
}

#sign-up-form {
    display: flex;
    flex-direction: column;
    justify-content: column;
    padding: 3%;
    height: fit-content;
    border-radius: 10px;
    border: solid 1px;
    width: 75%;
    border: solid rgb(203, 213, 224) 2px;
    background-color: white;
    row-gap: 0.5em;
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

#labelUnder {
    display: flex;
    flex-direction: column;
    justify-content: column;
    align-items: baseline;
    text-align: left;
    font-size: 16px;
    gap: 0.55rem;
    margin-top: 1.5%;
    font-weight: 500;
    text-decoration: underline;
    color: black;
    width: 100%;
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

h3 {
  text-align: left;
}

#twotable {
  display: flex;
  gap: 1.5em;
  align-items: flex-start;
  margin-top: 2%;
}

.tutorSubjectsDiv {
  margin-top: 2%;
}

#Submit {
  border: 0px;
  height: 7vh;
  border-radius: 5px;
  background-color: rgb(93, 170, 244) !important;
  color: white;
  font-size: large;
  text-align: center;
  margin-bottom: 0.5%;
  vertical-align: center;
  cursor: pointer;
  margin-top: 2%;
}

#Submit:hover{
  background-color: rgb(74, 132, 220) !important;
    transition: 0.3s;
} 

.tutorCourses {
  display: flex;
  flex-direction: row;
  gap: 1.2em;
  flex-wrap: wrap;
}

.courses {
  display: flex;
  flex-direction: column;
  row-gap: 0.25em;
}
</style>