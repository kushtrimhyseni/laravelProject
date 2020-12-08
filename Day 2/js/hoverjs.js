let pointerOn = false;

let myFunction = function (){
  let getImageBoxP = document.querySelector(".imagebox p");
  let getImageBoxImg = document.querySelector(".imagebox img");

 if (pointerOn === false){
    getImageBoxImg.style.opacity = "0.5";
    getImageBoxP.style.visibility = "visible";
    getImageBoxP.style.opacity = "1";
    getImageBoxP.style.color = "#F98F83";
    getImageBoxP.style.margin = "20px";

    pointerOn = true;
  }
  else if (pointerOn === true){
    getImageBoxP.style.visibility = "hidden";
    getImageBoxP.style.opacity = "0";
    getImageBoxImg.style.opacity = "1";

    pointerOn= false;
  }
}
