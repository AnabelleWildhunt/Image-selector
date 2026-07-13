// ---------- GLOBAL VARIABLES ----------

import { imgs } from "./data.js"


// ---------- EVENT LISTENERS ----------

// THIS EVENT OPERATES CLICKING ON THE MAIN SITE
document.addEventListener("click", function(e){

    if (e.target.matches(`span.pseudo-option`)){
        removeHighlight()
        e.target.classList.add("highlighted")

    } else if (e.target.matches(`li[aria-label="link"]`)) {
        removeHighlight()
        anchor(e.target)

    } else if (e.target.matches(`button[class="get-image btn"]`)){
        const chosenTag = document.querySelector(`span.highlighted`).dataset.tag
        removeHighlight()
        handleImageBtn(chosenTag)

    } else if (e.target.matches(`button[class="sign-in btn"]`)){
        console.log("Sign In!") // complete later

    } else if (e.target.matches(`button[class="register btn"]`)){
        console.log("Register!") // complete later

    } else if (!document.getElementById("modal-container").classList.contains("hidden") && !e.target.matches("#modal-container") && !e.target.matches("#modal") && !e.target.matches("img") && !e.target.matches(`button[class="modal-btn btn"]`)){
        document.getElementById("modal-container").classList.toggle("hidden")

    } else if (!document.getElementById("modal-container").classList.contains("hidden") && !Boolean(document.querySelector(`img.image-highlighted`)) && e.target.matches("img")){
        e.target.classList.add("image-highlighted")

    } else if (!document.getElementById("modal-container").classList.contains("hidden") && Boolean(document.querySelector(`img.image-highlighted`)) && e.target.matches("img")){
        removeImageHighlight()
        e.target.classList.add("image-highlighted")
    } else if (e.target.matches(`button[class="modal-btn btn"]`)){
        console.log("URL GOTTEN!") // complete later

    }

})

// ---------- UX FUNCTIONALITY ----------

// THIS FUNCTION REMOVES THE HIGHLIGHTING FROM TAG SPANS WHICH ARE NOT CURRENTLY SELECTED
function removeHighlight(){
    document.querySelectorAll(`span.pseudo-option`).forEach(function(span){
        span.classList.remove("highlighted")
    })
}

// THIS FUNCTION REMOVES THE HIGHLIGHTING FROM IMAGES WHICH ARE NOT CURRENTLY SELECTED
function removeImageHighlight(){
    document.querySelectorAll(`img`).forEach(function(img){
        img.classList.remove("image-highlighted")
    })
}

// ---------- IMAGE MODAL FUNCTIONALITY ----------

function handleImageBtn(chosenTag){
    let modalContent = ``
    const imagesArray = imgs.filter(function(img){
        return img.tag.includes(chosenTag)
    })
    const imagesArrayWithoutGifs = imagesArray.filter(function(img){
        return img.isGif === false
    })

    if (document.querySelector(`input[type="checkbox"]`).checked){
        for (let chosenImage of imagesArray){
            modalContent += `
            <div class="image-container">
            <img src="${chosenImage.image}" alt="${chosenImage.alt}">
            </div>`
        }

    } else {
        for (let chosenImage of imagesArrayWithoutGifs){
            modalContent += `
            <div class="image-container">
            <img src="${chosenImage.image}" alt="${chosenImage.alt}">
            </div>`
        }
    }

    
    document.getElementById("modal").innerHTML = modalContent

    document.getElementById("modal-container").classList.toggle("hidden")

}

// ---------- NAVIGATION FUNCTIONALITY ----------

// THIS FUNCTION ACTS AS AN ANCHORS MANAGER OF THE SITE
function anchor(eventTarget){

    document.querySelector("main").innerHTML = ``

    if (eventTarget.dataset.anchor === "main-page"){
        renderMainPage()
    } else if (eventTarget.dataset.anchor === "manage"){
        renderManage()
    } else if (eventTarget.dataset.anchor === "sign-in"){
        renderSignIn()
    } else if (eventTarget.dataset.anchor === "register"){
        renderRegister()
    }

}

// THIS FUNCTION RENDERS CONTENT OF MAIN PAGE
function renderMainPage(){

    let imagesContent = ""
    let tagArray = []
    let mainContent = `
    <section>
        <div class="flex" id="images"></div>
    </section>

    <div class="flex checkbox-container">
        <label for="is-gif">Enable gifs?</label>
        <input type="checkbox" name="is-gif" id="is-gif">
    </div>

    <button class="get-image btn">Get image~!</button>`

    document.querySelector("main").innerHTML = mainContent

    // THE METHOD OF CREATING AN ARRAY OF ALL TAGS
    for (let image of imgs){
        for (let imageTag of image.tag){
            if (!tagArray.includes(imageTag)){
                tagArray.push(imageTag)
            }
        }
    }

    // THE METHOD OF RENDERING TAGS INTO IMAGES DIV
    for (let spanTag of tagArray){
        imagesContent += `
        <span class="pseudo-option" data-tag="${spanTag}">${spanTag}</span>`
    }

    document.getElementById("images").innerHTML = imagesContent

}

// THIS FUNCTION RENDERS CONTENT OF MANAGE PAGE
function renderManage(){
    let manageContent = `
    <p>Lorem Ipsum</p>`
    // Work in progress...

    document.querySelector("main").innerHTML = manageContent

}

// THIS FUNCTION RENDERS CONTENT OF SIGN IN PAGE
function renderSignIn(){
    let signInContent = `
    <form class="flex" action="">

        <label for="sign-in-login">Login</label>
        <input type="text" id="sign-in-login" name="sign-in-login">

        <label for="sign-in-password">Password</label>
        <input type="password" id="sign-in-password" name="sign-in-password">

        <button class="sign-in btn">Sign In!</button>

    </form>`

    document.querySelector("main").innerHTML = signInContent

}

// THIS FUNCTION RENDERS CONTENT OF REGISTER PAGE
function renderRegister(){

    let registerContent = `
    <form class="flex" action="">

        <label for="login">Login</label>
        <input type="text" id="login" name="login">
            
        <label for="email">Email</label>
        <input type="email" id="email" name="email">

        <label for="password">Password</label>
        <input type="password" id="password" name="password">

        <label for="repeat-password">Repeat Password</label>
        <input type="password" id="repeat-password" name="repeat-password">

        <button class="register btn">Register!</button>

    </form>`

    document.querySelector("main").innerHTML = registerContent
    
}

// ---------- INSTANT SCRIPTS ----------

renderMainPage()

// ---------- TO-DO MEMOS ----------
// Complete event listeners for clicking "SIGN IN!", "REGISTER!" and "GET IMAGE URL!" buttons
// Style "Manage" manu and add its functionality (including adding its 'if conditions' for global "click" event listener)