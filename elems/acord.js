function accord () {
    const accord = document.querySelector(".accordion");


    const sliders = document.querySelectorAll(".slider");


    this.show = function (elem) {
        sliders.forEach(element => {
            element.lastElementChild.classList.add("hidecontent");
        })
        elem.lastElementChild.classList.remove("hidecontent");
    }


    sliders.forEach(elem => {
        console.log(elem.firstElementChild);
        elem.firstElementChild.addEventListener("click", () => {

            this.show(elem);
        })
    });
}  

const accordion = new accord();