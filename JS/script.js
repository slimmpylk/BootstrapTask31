let p = document.querySelector("p");

p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
p.addEventListener("click", changeBg);


function changeColor(){
    p.classList.toggle("textcolor");

}

function changeBg(){
    p.classList.toggle("textback");
}


fetch('https://yesno.wtf/api')

  .then(response => response.json())

  .then( 
      data => {document.getElementById('printHere').innerHTML = 
      data.answer
      document.getElementById('printHere').innerHTML +=
      '<img src="' + data.image + '"/>' ;
  }
); 