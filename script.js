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

    }

})

// THIS FUNCTION RENDERS CONTENT OF MAIN PAGE
function renderMainPage(){
    
    let mainContent = ""
    let imagesContent = ""

    document.querySelector("main").innerHTML = ``

    mainContent += `
    <section>
        <div class="flex" id="images"></div>
    </section>

    <div class="flex checkbox-container">
        <label for="is-gif">Is a gif?</label>
        <input type="checkbox" name="is-gif" id="is-gif">
    </div>

    <button class="get-image btn">Get image~!</button>`

    document.querySelector("main").innerHTML = mainContent

    for (let image of imgs){
        imagesContent += `
        <span class="pseudo-option" data-tag="${image.tag}">${image.tag}</span>`
    }

    document.getElementById("images").innerHTML = imagesContent
}

renderMainPage()