import { Tutorials } from "./data/tutorial.js"

import { References } from "./data/reference.js"

import { ExcercisesandQuizzes } from "./data/ExcercisesandQuizzes.js"



//section mobile btn

let MenuBtnMobileEl = document.getElementById("menu-btn-mobile")
let MenuBtnMobileElOpenBoolean=false
let mobileMenuNavEl = document.getElementById("mobile-menu-nav")

MenuBtnMobileEl.addEventListener("click",()=>{
    if(MenuBtnMobileElOpenBoolean){
        mobileMenuNavEl.style.display="none"
        MenuBtnMobileElOpenBoolean = false
        
    }else{
        mobileMenuNavEl.style.display="block"
        MenuBtnMobileElOpenBoolean = true
    }
})

let mobileNavcloseEl = document.getElementById("mobile-Nav-close")

mobileNavcloseEl.addEventListener("click",()=>{
    mobileMenuNavEl.style.display="none"
        MenuBtnMobileElOpenBoolean = false
    
})

//tutorial btn
const NestedNavigationContainer = document.getElementById("nested-navigation-container_id")
let TutorialEl = document.getElementById("tutorials-btn")
const nestedNavigationCloseBtn = document.getElementById("nested-navigation-close-Btn")


TutorialEl.addEventListener("click",toggletutorial)   
nestedNavigationCloseBtn.addEventListener("click",closeMenuContent)
    
function closeMenuContent(){
   NestedNavigationContainer.classList.toggle("nested_navigation-hidden")
   //tutorial
   TutorialEl.classList.remove("bg-black")
   TutorialEl.classList.remove("text-white")
   //reference
   referenceBtnEl.classList.remove("bg-black")
   referenceBtnEl.classList.remove("text-white")
   //excercise
   excerciseBtnEl.classList.remove("bg-black")
   excerciseBtnEl.classList.remove("text-white")   
}

    function toggletutorial(){
        TutorialEl.classList.toggle("bg-black")
        TutorialEl.classList.toggle("text-white")
        NestedNavigationContainer.classList.remove("nested_navigation-hidden")
        tutorialmenuDisplayAll()
         //reference
   referenceBtnEl.classList.toggle("bg-black")
   referenceBtnEl.classList.toggle("text-white")
   //excercise
   excerciseBtnEl.classList.remove("bg-black")
   excerciseBtnEl.classList.remove("text-white")

    }
   
    

/** tutoeial data **/
    console.log(Tutorials)



    /******** */

    let nestedNavigationContainerContentID = document.getElementById("nested-navigation-container-contentID")
    let nestedNavigationHeading = ''
    let nestedNavigationTab1 = ''
    let nestedNavigationTab2 = ''
    let nestedNavigationTab3 = ''
    let nestedNavigationTab4 = ''
  
     //render al the menu
     

//mobile menu tutorial
const tutorialMenulinkMobileEl = document.getElementById("tutorial_menulink_mobile")
let TutorialMenuMobileEl = document.getElementById("Tutorial_menu_mobile")


let TutorialMenuTab_Mobile = nestedNavigationTab1+ nestedNavigationTab2+nestedNavigationTab3+nestedNavigationTab4

tutorialMenulinkMobileEl.addEventListener("click", ()=>{
    tutorialMenulinkMobileEl.classList.toggle("mobile_menu_Active")
    TutorialMenuMobileEl.classList.toggle("mobile_menuActive_tutorial")

    TutorialMenuMobileEl.innerHTML = TutorialMenuTab_Mobile
})




function tutorialmenuDisplayAll(){
  /*  heading */
  nestedNavigationHeading += `<h1>${Tutorials.name}</h1>`

  /******** sub menu */
  nestedNavigationTab1 += `<h2>${Tutorials.HTMLandCSS.name}</h2>`

  Tutorials.HTMLandCSS.menu.forEach(el =>{
     nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
  })
  nestedNavigationTab2 += `<h2>${Tutorials.JavaScript.name}</h2>`
  Tutorials.JavaScript.menu.forEach(el =>{
     nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
  })
  nestedNavigationTab2 += `<h2>${Tutorials.Programming.name}</h2>`
  Tutorials.Programming.menu.forEach(el =>{
     nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
  })
  nestedNavigationTab3 += `<h2>${Tutorials.ServerSide.name}</h2>`
  Tutorials.ServerSide.menu.forEach(el =>{
     nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
  })
  nestedNavigationTab3 += `<h2>${Tutorials.WebBuilding.name}</h2>`
  Tutorials.WebBuilding.menu.forEach(el =>{
     nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
  })
  nestedNavigationTab4 += `<h2>${Tutorials.DataAnalyst.name}</h2>`
  Tutorials.DataAnalyst.menu.forEach(el =>{
     nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
     
  })
  nestedNavigationTab4 += `<h2>${Tutorials.XMLTutorials.name}</h2>`
  Tutorials.XMLTutorials.menu.forEach(el =>{
     nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
  })



    nestedNavigationContainerContentID.innerHTML = `
    ${nestedNavigationHeading}
 <div class="nested-navigation-container_content_data">

     <div class="nested-navigation-item">
      ${nestedNavigationTab1}
  </div>
     <div class="nested-navigation-item">
      ${nestedNavigationTab2}
  </div>
     <div class="nested-navigation-item"> 
    ${nestedNavigationTab3}
  </div>
     <div class="nested-navigation-item">
     ${nestedNavigationTab4}
  </div>
  </div>
  
  
  
  `
 nestedNavigationHeading = ''
 nestedNavigationTab1 = ''
 nestedNavigationTab2 = ''
 nestedNavigationTab3 = ''
 nestedNavigationTab4 = ''
}

//reference section   javascript
console.log(References)
let referenceBtnEl = document.getElementById("reference-btn")

referenceBtnEl.addEventListener("click",()=>{
   TutorialEl.classList.toggle("bg-black")
   TutorialEl.classList.toggle("text-white")
   NestedNavigationContainer.classList.remove("nested_navigation-hidden")
      //tutorial
      TutorialEl.classList.remove("bg-black")
      TutorialEl.classList.remove("text-white")
 
      //excercise
      excerciseBtnEl.classList.remove("bg-black")
      excerciseBtnEl.classList.remove("text-white")
      referenceContent()

})


function referenceContent(){
   nestedNavigationHeading = ''
   nestedNavigationTab1 = ''
   nestedNavigationTab2 = ''
   nestedNavigationTab3 = ''
   nestedNavigationTab4 = ''
   /*  heading */
  nestedNavigationHeading += `<h1>${References.name}</h1>`

  /******** sub menu */
  nestedNavigationTab1 = `<h2>${References.HTML.name}</h2>`
  References.HTML.menu.forEach(el =>{
     nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
  })
  nestedNavigationTab1 += `<h2>${References.CSS.name}</h2>`
  References.CSS.menu.forEach(el =>{
     nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
  })


  nestedNavigationTab2 = `<h2>${References.JavaScript.name}</h2>`
  References.JavaScript.menu.forEach(el =>{
     nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
  })
  nestedNavigationTab2 += `<h2>${References.Programming.name}</h2>`
  References.Programming.menu.forEach(el =>{
     nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
  })

  nestedNavigationTab3 = `<h2>${References.ServerSide.name}</h2>`
  References.ServerSide.menu.forEach(el =>{
     nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
  })
  nestedNavigationTab3 += `<h2>${References.XML.name}</h2>`
  References.XML.menu.forEach(el =>{
     nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
  })

  nestedNavigationTab4 = `<h2>${References.CharacterSets.name}</h2>`
  References.CharacterSets.menu.forEach(el =>{
     nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
     
  })
 


//RENDER ALL MENU
    nestedNavigationContainerContentID.innerHTML = `
    ${nestedNavigationHeading}
 <div class="nested-navigation-container_content_data">

     <div class="nested-navigation-item">
      ${nestedNavigationTab1}
  </div>
     <div class="nested-navigation-item">
      ${nestedNavigationTab2}
  </div>
     <div class="nested-navigation-item"> 
    ${nestedNavigationTab3}
  </div>
     <div class="nested-navigation-item">
     ${nestedNavigationTab4}
  </div>
  </div>
  
  
  
  `
 nestedNavigationHeading = ''
 nestedNavigationTab1 = ''
 nestedNavigationTab2 = ''
 nestedNavigationTab3 = ''
 nestedNavigationTab4 = ''
}

//excercise btn
let excerciseBtnEl = document.getElementById("excercises-btn")
excerciseBtnEl.addEventListener("click",()=>{
   excerciseBtnEl.classList.toggle("bg-black")
   excerciseBtnEl.classList.toggle("text-white")
   NestedNavigationContainer.classList.remove("nested_navigation-hidden")
      //tutorial
      excerciseBtnEl.classList.remove("bg-black")
      excerciseBtnEl.classList.remove("text-white")
      //reference
      referenceBtnEl.classList.remove("bg-black")
      referenceBtnEl.classList.remove("text-white")
      
      excercisesContent()
    
})

function excercisesContent(){
   nestedNavigationHeading = ''
   nestedNavigationTab1 = ''
   nestedNavigationTab2 = ''
   nestedNavigationTab3 = ''
   nestedNavigationTab4 = ''
   /*  heading */
  nestedNavigationHeading += `<h1>${ExcercisesandQuizzes.name}</h1>`

  /******** sub menu */
  nestedNavigationTab1 = `<h2>${ExcercisesandQuizzes.Excercises.name}</h2>`
  ExcercisesandQuizzes.Excercises.menu.forEach(el =>{
     nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
  })
  


  nestedNavigationTab2 = `<h2>${ExcercisesandQuizzes.Quizzes.name}</h2>`
  ExcercisesandQuizzes.Quizzes.menu.forEach(el =>{
     nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
  })


  nestedNavigationTab3 = `<h2>${ExcercisesandQuizzes.Course.name}</h2>`
  ExcercisesandQuizzes.Course.menu.forEach(el =>{
     nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
  })

  nestedNavigationTab4 = `<h2>${ExcercisesandQuizzes.Certificates.name}</h2>`
  ExcercisesandQuizzes.Certificates.menu.forEach(el =>{
     nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
     
  })
 


//RENDER ALL MENU
    nestedNavigationContainerContentID.innerHTML = `
    ${nestedNavigationHeading}
 <div class="nested-navigation-container_content_data">

     <div class="nested-navigation-item">
      ${nestedNavigationTab1}
  </div>
     <div class="nested-navigation-item">
      ${nestedNavigationTab2}
  </div>
     <div class="nested-navigation-item"> 
    ${nestedNavigationTab3}
  </div>
     <div class="nested-navigation-item">
     ${nestedNavigationTab4}
  </div>
  </div>
  
  
  
  `
 nestedNavigationHeading = ''
 nestedNavigationTab1 = ''
 nestedNavigationTab2 = ''
 nestedNavigationTab3 = ''
 nestedNavigationTab4 = ''
}


//body part of website

const htmlCode = `<!DOCTYPE html>
   <html>
      <head>
         <title>HTML Tutorial</title>
      </head>
   <body>

         <h1>This is a heading</h1>
         <p>This is a paragraph.</p>

   </body>
   </html>`

let htmlCodeEl = document.getElementById("htmlCode").innerHTML = htmlCode


const cssCode = 
`body {
   background-color: lightblue;
}

h1 {
   color: white;
   text-align: center;
}

p {
   font-family: verdana;
}



` 

let cssCodeEl = document.getElementById("cssCode").innerText = cssCode


const javascriptCode = 
`
<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>

}

`
let javascriptCodeEl = document.getElementById("JavaScriptCode").innerText = javascriptCode


const PythonCode = 
`
if 5 > 2:
  print("Five is greater than two!")
  





`
document.getElementById("PythonCode").innerText = PythonCode


const SQLCode =
` 
SELECT * FROM Customers
WHERE Country='Mexico';




`

document.getElementById("SQLCode").innerText = SQLCode



//CARDS
