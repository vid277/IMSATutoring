<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import axios from "axios"    
export default {
    data(){
      return {
        isMobile: null,
        mathVisible: true,
        scienceVisible: true,
        csVisible: true,
        wellnessVisible: true,
        selectedCategories: [],
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
      showCertainElements(event){
        if (event.target.checked){
          this.selectedCategories.push(event.target.id)
        }        
        else {
          const id = event.target.id;
          for (let data of this.selectedCategories){
            if (data === id){
              const index = this.selectedCategories.indexOf(data);
              this.selectedCategories.splice(index, 1)
            }
          }
        }
        if (this.selectedCategories.length >= 1){
            this.mathVisible = false;
            this.scienceVisible = false;
            this.wellnessVisible = false;
            this.csVisible = false;

            for (let category of this.selectedCategories) {
              if (category == "Math"){
                this.mathVisible = true;
              }
              else if (category == "Science") {
                this.scienceVisible = true;
              }
              else if (category == "ComputerScience"){
                this.csVisible = true;
              }
              else if (category == "Wellness"){
                this.wellnessVisible = true;
              }
            }
          }
          else {
            this.mathVisible = true;
            this.scienceVisible = true;
            this.wellnessVisible = true;
            this.csVisible = true;
          }
        }
      }
    } 
</script>

<template>
    <main>
      <div id="wrapper">
        <div class = "filterMenu">
          <fieldset>
            <h3><span>🗃️</span>Filter Menu</h3>
            <h4>Filter by Subject: </h4>
            <div>
                <div>
                    <input type="checkbox" id="Math" name="Math" @click="showCertainElements($event)">
                    <label for="Math">Math</label>
                </div> 
                <div>
                    <input type="checkbox" id="Science" name="Science" @click="showCertainElements($event)">
                    <label for="Science">Science</label>
                </div> 
                <div>
                    <input type="checkbox" id="ComputerScience" name="ComputerScience" @click="showCertainElements($event)"> 
                    <label for="ComputerScience">Computer Science</label>
                </div>
                <div>
                    <input type="checkbox" id="Wellness" name="Wellness" @click="showCertainElements($event)">
                    <label for="Wellness">Wellness</label>
                </div> 
            </div>
          </fieldset>
        </div>
        <br>
        <br>
      </div>
      <div class = "mainTextPlace">
        <div class = "innerBox">
          <div class = "TextPlaceWrapper">
            <h2>Courses Offered: </h2>
          </div>
          <div class = "textDiv" v-if="mathVisible">
            <h2>Math: </h2>
            <div class = "cardList mathCards">
              <div class="large-card">
                <div class = "inner-card">
                  <h5 class="card-title">Mathematical Investigations</h5>
                  <div class = "courses MI-Sequence">
                    <div class="card" id = "Mathematical Investigations 1/2" @click="redirectPage($event)">
                      <h3>MI - I/II</h3>
                    </div>
                    <div class="card">
                      <h3>MI - II</h3>
                    </div>
                    <div class="card">
                      <h3>MI - III</h3>
                    </div>
                    <div class="card">
                      <h3>MI - IV</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="large-card">
                <div class = "inner-card">
                  <h5 class="card-title">Calculus</h5>
                  <div class = "courses MI-Sequence">
                    <div class="card">
                      <h3>Calculus 1</h3>
                    </div>
                    <div class="card">
                      <h3>Calculus 2</h3>
                    </div>
                    <div class="card">
                      <h3>Calculus 3</h3>
                    </div>
                    <div class="card">
                      <h3>Multivariable Calculus</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="large-card">
                <div class = "inner-card">
                  <h5 class="card-title">Other Courses</h5>
                  <div class = "courses MI-Sequence">
                    <div class="card">
                      <h3>Number Theory</h3>
                    </div>
                    <div class="card">
                      <h3>Theory of Analysis</h3>
                    </div>
                    <div class="card">
                      <h3>Linear Algebra</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 2%" class = "textDiv" v-if="scienceVisible">
            <h2>Science: </h2>
            <div class = "cardList scienceCards">
              <div class="scienceCard large-card">
                <div class = "inner-card">
                  <h5 class="card-title">Chemistry</h5>
                  <div class = "courses MI-Sequence">
                    <div class="card">
                      <h3>SI - Chemistry</h3>
                    </div>
                    <div class="card">
                      <h3>Advanced Chemistry 1</h3>
                    </div>
                    <div class="card">
                      <h3>Advanced Chemistry 2</h3>
                    </div>
                    <div class="card">
                      <h3>Organic Chemistry 1</h3>
                    </div>
                    <div class="card">
                      <h3>Organic Chemistry 2</h3>
                    </div>
                    <div class="card">
                      <h3>Medicinal Chemistry</h3>
                    </div>
                    <div class="card">
                      <h3>Survey of Organic Chemistry</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="scienceCard large-card">
                <div class = "inner-card">
                  <h5 class="card-title">Physics</h5>
                  <div class = "courses MI-Sequence">
                    <div class="card">
                      <h3>SI - Physics</h3>
                    </div>
                    <div class="card">
                      <h3>Physics Sound and Light</h3>
                    </div>
                    <div class="card">
                      <h3>Physics: Electricity and Magnetism</h3>
                    </div>
                    <div class="card">
                      <h3>Physics: Calculus based Mechanics</h3>
                    </div>
                    <div class="card">
                      <h3>Modern Physics</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="scienceCard large-card">
                <div class = "inner-card">
                  <h5 class="card-title">Other Science Courses</h5>
                  <div class = "courses MI-Sequence">
                    <div class="card">
                      <h3>Advanced Biological Systems</h3>
                    </div>
                    <div class="card">
                      <h3>Biochemistry</h3>
                    </div>
                    <div class="card">
                      <h3>Planetary Science</h3>
                    </div>
                    <div class="card">
                      <h3>Engineering</h3>
                    </div>
                    <div class="card">
                      <h3>Computational Science</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 2%" class = "textDiv" v-if="csVisible">
            <h2>Computer Science: </h2>
            <div class = "cardList">
              <div class="computerCards large-card">
                <div class = "inner-card">
                  <h5 class="card-title">Computer Science Courses</h5>
                  <div class = "courses">
                    <div class="card">
                      <h3>Computer Science Inquiry</h3>
                    </div>
                    <div class="card">
                      <h3>Object Oriented Programming</h3>
                    </div>
                    <div class="card">
                      <h3>Advanced Programming</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="computerCards large-card">
                <div class = "inner-card">
                  <h5 class="card-title">CS Seminars</h5>
                  <div class = "courses">
                    <div class="card">
                      <h3>Machine Learning</h3>
                    </div>
                    <div class="card">
                      <h3>Android Apps Development</h3>
                    </div>
                    <div class="card">
                      <h3>Linux and Cybersecurity</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blankCard large-card">
              </div>
            </div>
          </div>
          <div style="margin-top: 2%" class = "textDiv" v-if="wellnessVisible">
            <h2>Wellness: </h2>
            <div class = "cardList">
              <div class="wellnessCard large-card">
                <div class = "inner-card">
                  <h5 class="card-title">General Wellness</h5>
                  <div class = "courses">
                    <div class="card">
                      <h3>Moving and Learning</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blankCard large-card">
              </div>
              <div class="blankCard large-card">
              </div>
            </div>
          </div>
        </div>
        <br>
        <br>
        <br>
      </div>
    </main>
</template>

<style>
* {
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  margin: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
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
  display: flex;
  flex: 1;
  flex-direction: row;

}

#wrapper {
  height: calc(100vh);
  border-right: 2px solid rgb(203, 213, 224);
  overflow-y: auto !important;
  width: 25%;
}

.filterMenu {
  padding: 25px;
}

.filterMenu h3 {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-bottom: solid 2px #69696929;
  text-align: center;
}

.filterMenu h4 {
  font-weight: bold;
  margin-top: 13px;
}

.filterMenu h5 {
  margin-top: 5px;
  margin-left: 10px;
  font-size: 14.5px;
  font-weight: 700;
  text-decoration: underline;
}

#wrapper .filterMenu fieldset{
  border: solid 0px;
  justify-content: flex-start;
  height: 100%;
}

#wrapper .filterMenu div input {
  margin: 0.6rem;
}

#wrapper .filterMenu div label {
  margin: 0.6rem;
  font-size: 15.5px !important;
  font-weight: normal !important;
}

.search input[type=text]{
  height: 35px;
  border-radius: 5px;
  border: solid 1px;
  padding: 5px;
  font-size: small;
  width: 100%;
}

.search input{
  margin: 0% !important;
}

.search {
  margin-top: 10px;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgb(203, 213, 224);
}

.mainTextPlace{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  height: calc(100vh);
  width: 100%;
}

.mainTextPlace .innerBox {
  width: 100%;
  padding: 2%;
  height: 100%;
  overflow-y: auto;
}

.TextPlaceWrapper h2{
    font-weight: 700;
    background-color: rgba(203, 213, 224, 0.24);
    border-radius: 4px;
    padding: 1.75%;
}

.card {
  padding: 1em 2em 1em;
  border-radius: 10px;
  text-align: center;
  border: solid 2px;
  border-color: rgb(203, 213, 224);
  background-color: white;
  display: flex;
  height: fit-content;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  row-gap: 0.25em;
  transition: 0.3s;
  width: 100%;
}

.inner-card {
  width: 100%;
}

.large-card .card-title {
  font-weight: 700;
  font-size: 15px;
}

.card:hover {
  background-color: #69696929;
  color: #000000;
}

.textDiv {
  margin: 1%;
  transition: 0.3s;
}

.textDiv h2{
  font-size: 22px;
  font-weight: 700;
  text-decoration: underline;
  margin-left: 1%;
  margin-top: 10px;
}

.cardList {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1%;
  gap: 1em;
}

.courses {
  padding: 1%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
}

.large-card {
  border-radius: 15px;
  text-align: center;
  border: solid 2px;
  border-color: rgb(203, 213, 224);
  background-color: rgb(240, 245, 251);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  row-gap: 0.25em;
  transition: 0.3s;
  padding: 1%;
  flex: 1;
}

.inner-card {
  width: 100%;
  height: 100%;
}

.inner-card h5 {
  padding: 0.5%;
  margin-bottom: 1%;
  font-size: 19px !important;
}

.scienceCard {
  background-color: rgb(251, 240, 249);
}

.computerCards {
  background-color: rgb(251, 249, 240)
}

.blankCard {
  border: none;
  background-color: transparent;
}

.wellnessCard {
  background-color: rgb(240, 251, 246);
}
</style>