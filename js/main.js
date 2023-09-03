
  $(document).ready(function(){
 $(".load-page").fadeOut(3000)
})  
  
var rep =[]
var ingMael=[]
var categoryarr=[]
var areaarr=[]
var inaarr=[]
var categoryMealArr=[]
var areaMael=[]

let meallist= []
let Catlist= []
let Arealist= []
let Ingredlist= []
let Detalies =[]

let contain= document.getElementById("rowFood")
let search= document.getElementById('search1')
let myicon = document.getElementById("openi")
let contacti=document.getElementById('contact')




$(document).ready(function () {
      
    let sideBarInnerWidth = $(".side-in").innerWidth();
    $(".sideBar ").css({left:-sideBarInnerWidth})

    // Api

 async function meal(){
    contain.innerHTML=" "
    var myHttp= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      var repo = await myHttp.json()
      rep=repo.meals
     display()
}

meal()

function display (){
    var  temp = ' '
    for (let i = 0; i < rep.length; i++) {
       temp+= `<div class="col-md-3" onclick="mealinfo(${rep[i].idMeal})">
       <div class="con ">
           <img src="${rep[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="titledis">${rep[i].strMeal}</div>
       </div>
       </div>
       
   </div>`
        
    }
    contain.innerHTML= temp
}

 })



    $("#icon-openn").click(function () {
        
        let width = $(".side-in").outerWidth()
        let left = $(".sideBar ").css("left")
        if (left == "0px") {
            $(".sideBar ").animate({ left: `-${width}px` }, 500  )
            myicon.classList.remove("fa-solid", "fa-x")
            myicon.classList.add( "fa-solid", "fa-bars")

        }

        else {
            $(".sideBar").animate({ left: "0px" }, 500)
            myicon.classList.remove("fa-solid", "fa-bars")
            myicon.classList.add("fa-solid", "fa-x")

        }



    })




// category 

async function category(){
    contacti.classList.remove('d-flex')
    contacti.classList.add('d-none')
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    contain.innerHTML=" "
    var myHttpcategory= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      var categoryRsponse = await myHttpcategory.json()
        categoryarr=categoryRsponse.categories
       
        displayCategory ()
        let sideBarInnerWidth = $(".side-in").innerWidth();
        $(".sideBar ").css({left:-sideBarInnerWidth})
} 

category()

function displayCategory (){
    var  corner = ' ' 
    for (let i = 0;  i < categoryarr.length; i++){
        corner+= `<div class="col-md-3 " >
       <div class="con " onclick="categorymeals('${categoryarr[i].strCategory}')">
           <img src="${categoryarr[i].strCategoryThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="title">${categoryarr[i].strCategory}</div>
           <p>${categoryarr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")} </p>
       </div>
       </div>
   </div>`
        
    }
    contain.innerHTML=corner
  
}

async function categorymeals(meal){
    contain.innerHTML=" "
    var myHttpcategorymeal= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`)
      var categorymaelRsponse = await myHttpcategorymeal.json()
      categoryMealArr=categorymaelRsponse.meals
      
      displaycatecoryMeal()
      
}

function displaycatecoryMeal(){
    var  exMeal = ' ' 
    for (let i = 0; i < categoryMealArr.length; i++){
        exMeal+= `<div class="col-md-3" onclick="mealinfo(${categoryMealArr[i].idMeal})">
       <div class="con ">
           <img src="${categoryMealArr[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="title">${categoryMealArr[i].strMeal}</div>
       </div>
       </div>
   </div>`
        
    }
    contain.innerHTML= exMeal
}


//  area 

async function area(){
    contain.innerHTML=" "
    contacti.classList.remove('d-flex')
    contacti.classList.add('d-none')
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    contacti.classList.add('d-none')
    var myHttparea= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      var areaRsponse = await myHttparea.json()
      
      areaarr=areaRsponse.meals
      
      displayarea()
      let sideBarInnerWidth = $(".side-in").innerWidth();
        $(".sideBar ").css({left:-sideBarInnerWidth})
}


area()

function displayarea (){
    var  areacorner = ''
    for (let i = 0; i < areaarr.length; i++) {
        areacorner+= `<div class="col-md-3 text-center text-white ing my-3" onclick="areaMeal('${areaarr[i].strArea}')">
        <i class="fa-solid fa-house-laptop "></i>
        <h4 class="fs-4 fw-bold">${areaarr[i].strArea}</h4>
       </div>`
    
    }
    contain.innerHTML=areacorner
    
}
async function areaMeal(AreaaMeal){
    contain.innerHTML=" "
    
    var myHttpareaMealL= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreaaMeal}`)
    var areaRsponse = await myHttpareaMealL.json()
    areaMael=areaRsponse.meals
    displayAreaMeal()
    let sideBarInnerWidth = $(".side-in").innerWidth();
        $(".sideBar ").css({left:-sideBarInnerWidth})
}

function displayAreaMeal(){
    var  exMealArea = ' ';
    for (let i = 0;  i < areaMael.length; i++) {
        exMealArea+= `<div class="col-md-3"onclick="mealinfo(${areaMael[i].idMeal})">
       <div class="con ">
           <img src="${areaMael[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="title">${areaMael[i].strMeal}</div>
       </div>
       </div>
   </div>`
        
    }
    contain.innerHTML= exMealArea
}


//  ingredient 

async function ingredient(){
    contain.innerHTML=""
    contacti.classList.remove('d-flex')
    contacti.classList.add('d-none')
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    var myHttpin= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      var inRsponse = await myHttpin.json()
      inaarr=inRsponse.meals
      console.log(inaarr)
      displayingredient ()
      let sideBarInnerWidth = $(".side-in").innerWidth();
        $(".sideBar ").css({left:-sideBarInnerWidth})
}
ingredient()

function displayingredient(){
    var  ingrediatss = ''
    for (let i = 0; i < 20; i++) {
        ingrediatss+= `<div class="col-md-3 text-center text-white ing" onclick="ingredientMeal('${inaarr[i].strIngredient}')">
        <i class="fa-solid fa-drumstick-bite"></i>
        <h4 class="fs-4 fw-bold">${inaarr[i].strIngredient}</h4>
        <p class="fs-5">${inaarr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
       </div>`
        
    }
    contain.innerHTML=ingrediatss
   
}
async function ingredientMeal(ingaMeal){
    contain.innerHTML=" "
    
    var myHttpIngMealL= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingaMeal}`)
    var ingRsponse = await myHttpIngMealL.json()
    ingMael=ingRsponse.meals
    displayingMeal()
    let sideBarInnerWidth = $(".side-in").innerWidth();
        $(".sideBar ").css({left:-sideBarInnerWidth})
}


function displayingMeal(){
    var  exMealIng = ' ';
    for (let i = 0;  i<ingMael.length; i++) {
        exMealIng+= `<div class="col-md-3" onclick="mealinfo(${ingMael[i].idMeal})">
       <div class="con ">
           <img src="${ingMael[i].strMealThumb}" alt="" class="w-100">
       <div class="layer">
           <div class="title">${ingMael[i].strMeal}</div>
       </div>
       </div>
   </div>`
        
    }
    contain.innerHTML= exMealIng
}

//  details of meals 

async function mealinfo(detailMeall){
    contain.innerHTML=" "
    var myHttpMealInfo= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailMeall}`)
    var mealInfoRsponse = await myHttpMealInfo.json()
    details = mealInfoRsponse.meals[0]
    mealInfoDisplay()
}
function mealInfoDisplay(){
    let recipes = ``
    for (let i = 1; i <= 20; i++) {
        if (details[`strIngredient${i}`]) {
            recipes +=   `<span class="bg-info  rounded-2 mx-1 my-2  d-flex   p-1 flex-wrap">${details[`strMeasure${i}`]} ${details[`strIngredient${i}`]}</span>`  
        }

    }
    
    let tags = details.strTags?.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `<span class="bg-secondary   rounded-2 mx-1 my-2 p-1 d-flex   flex-wrap">${tags[i]}</span>`
    }
    
        info=`<div class="col-md-4 my-5 mx-1 text-white">
        <img src="${details.strMealThumb}" alt="" class="w-100 rounded-3">
        <h2 class="my-2">${details.strMeal}</h2>
        <h2></h2>
     </div>
     <div class="col-md-7 my-5 mx-1 text-white">
      <h2>Instructions</h2>
      <p>${details.strInstructions}</p>
      <h2>Area : ${details.strArea}</h2>
      <h2>Category :${details.strCategory}</h2>
      <h2>Recipes :</h2>
      <p class="my-4 g-2 d-flex flex-wrap g-5 ">
      ${recipes}
     </p>
      <h2>Tags :</h2>
      <p class="my-4 g-2 d-flex  flex-wrap g-4"> ${tagsStr} </p>
      <p>
      <a href="${details.strSource}"><button class="btn btn-success">source</button></a>
    <a href="${details.strYoutube}"><button class="btn btn-danger">youtube</button></a>
     </p>
     
     </div>`

    contain.innerHTML= info
}

//  contactt

function contactUs(){
    contain.innerHTML=" "
    contacti.classList.remove('d-none')
    contacti.classList.add('d-flex')
    
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    
   
    let sideBarInnerWidth = $(".side-in").innerWidth();
        $(".sideBar ").css({left:-sideBarInnerWidth})
       
}

//  search 

function displaySaerch(){
    contain.innerHTML=" "
    contacti.classList.remove('d-flex')
    contacti.classList.add('d-none')
    
    search.classList.remove('d-none')
    search.classList.add('d-flex')
    
    let sideBarInnerWidth = $(".side-in").innerWidth();
        $(".sideBar ").css({left:-sideBarInnerWidth})
}



