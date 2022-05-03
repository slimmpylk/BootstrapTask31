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


fetch('http://ip-api.com/json')
.then(response => response.json())
.then(data => {document.getElementById('printHere').innerHTML =
JSON.stringify(data)
});

//document.getElementById('printHere').innerHTML