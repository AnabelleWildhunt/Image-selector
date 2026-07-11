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
        document.querySelectorAll(`span`).forEach(function(span){
            span.classList.remove("highlighted")
        })
        console.log("Link!")
    }

})