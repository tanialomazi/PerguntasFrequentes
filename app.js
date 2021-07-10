// Perguntas Frequentes
const qt = document.querySelectorAll(".qt");
const btnPlus = document.querySelectorAll(".bt-plus");
const btnMinus = document.querySelectorAll(".bt-minus");
const ans = document.querySelectorAll(".ans");

btnPlus.forEach(function (button) {
    button.addEventListener("click", function (e) {
        let x = Array.from(btnPlus).indexOf(e.currentTarget); //dá o index do elemento que está sendo clicado
        btnPlus[x].classList.toggle("ride-bt-plus");
        btnMinus[x].classList.toggle("show-bt-minus");
        ans[x].classList.toggle("show-ans");
    })
})

btnMinus.forEach(function (button) {
    button.addEventListener("click", function (e) {
        let x = Array.from(btnMinus).indexOf(e.currentTarget); //dá o index do elemento que está sendo clicado
        btnPlus[x].classList.toggle("ride-bt-plus");
        btnMinus[x].classList.toggle("show-bt-minus");
        ans[x].classList.toggle("show-ans");
    })
})


//btnPlus.forEach(function () {
//    if (btnPlus[x].addEventListener("click", function () {
//        btnPlus[x].classList.toggle("ride-bt-plus");
//        btnMinus[x].classList.toggle("show-bt-minus");
//        ans[x].classList.toggle("show-ans");
//    }));
//})

//btnMinus.forEach(function () {
//    if (btnMinus[x].addEventListener("click", function () {
//        btnPlus[x].classList.toggle("ride-bt-plus");
//        btnMinus[x].classList.toggle("show-bt-minus");
//        ans[x].classList.toggle("show-ans");
//    }));
//})
