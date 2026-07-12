import { imgs } from "./data.js"
const images = document.getElementById("images")


// THIS EVENT OPERATES CLICKING ON THE MAIN SITE
document.addEventListener("click", function(e){

    if (e.target.matches(`span[class="pseudo-option"]`)){
        document.querySelectorAll(`span`).forEach(function(span){
        span.classList.remove("highlighted")
        })
        e.target.classList.add("highlighted")

    } else if (e.target.matches(`li[aria-label="link"]`)) {
        document.querySelectorAll(`span[class="pseudo-option"]`).forEach(function(span){
            span.classList.remove("highlighted")
        })
        console.log("Link!") // complete later

    } else if (e.target.matches(`button[class="get-image btn"]`)){
        document.querySelectorAll(`span[class="pseudo-option"]`).forEach(function(span){
            span.classList.remove("highlighted")
        })
        console.log("Button!") // complete later

    } else if (e.target.matches(`button[class="register btn"]`)){
        console.log("Register!") // complete later
    }

})

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

// THIS FUNCTION RENDERS CONTENT OF MAIN PAGE
function renderMainPage(){

    let imagesContent = ""
    let mainContent = `
    <section>
        <div class="flex" id="images"></div>
    </section>

    <div class="flex checkbox-container">
        <label for="is-gif">Enable a gifs?</label>
        <input type="checkbox" name="is-gif" id="is-gif">
    </div>

    <button class="get-image btn">Get image~!</button>`

    document.querySelector("main").innerHTML = `` // move this to separate function later

    document.querySelector("main").innerHTML = mainContent

    for (let image of imgs){
        imagesContent += `
        <span class="pseudo-option" data-tag="${image.tag}">${image.tag}</span>`
    }

    document.getElementById("images").innerHTML = imagesContent
}

renderMainPage()
