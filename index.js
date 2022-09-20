

const startBtn = document.getElementById("Start-Button");
const bodyDiv = document.getElementsByClassName("bodyDiv")[0];
const bigOne =  document.getElementsByClassName("todoDiv")[0];
bigOne.style.display = "none";
startBtn.addEventListener("click", ()=>{
    prompt('Type here your name please');
    confirm("Confirm or Cancel your request");
    bodyDiv.style.display = "none";
    startBtn.style.display = "none";
    bigOne.style.display = "flex";

})

let addToDoButton = document.getElementById("addBtn");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let myUl = document.createElement('ul');
let refresh = document.getElementById("refresh");

toDoContainer.appendChild(myUl);
addToDoButton.addEventListener("click", ()=>{
    if(inputField.value === ""){
        alert("First type something")
    }else {
        var par = document.createElement('li');
        var x = document.createElement("button");
        var t = document.createTextNode("X");
        x.appendChild(t);
        par.innerText = "\u2733" + "  " + inputField.value;
        myUl.appendChild(par);
        x.classList.add("buttonX");
        par.appendChild(x);
        myUl.classList.add("ul-styling");
        inputField.value = "";
        par.addEventListener("click", ()=>{
            par.style.textDecoration = "line-through";
            x.addEventListener('click', () =>{
                par.style.display = "none";
            })
        });
        par.addEventListener("dblclick", ()=>{
            par.style.textDecoration = "none";
            
        });
        
    }
    refresh.addEventListener("click", ()=>{
        par.style.display = "none";
    })
});

