const burger = document.getElementById("burger")
const links = document.getElementsByClassName("link")

burger.addEventListener("click", function (){
    for (let link of links){
        link.classList.toggle ("block")
    }

    this.classList.toggle("rotate")
})




