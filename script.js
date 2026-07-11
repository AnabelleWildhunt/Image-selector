import { imgs } from "./data.js"
const selector = document.getElementById("images")


// THIS EVENT MAKES "#images" DIV HIGHLIGHT SPAN LIKE SELECT ELEMENT
document.addEventListener("click", function(e){

    if (e.target.matches(`span`)){
        document.querySelectorAll(`span`).forEach(function(span){
        span.classList.remove("highlighted")
        })
        e.target.classList.add("highlighted")
    } else {
        document.querySelectorAll(`span`).forEach(function(span){
            span.classList.remove("highlighted")
        })
    }

})