let modeBtn = document.querySelector("#mode");
let body = document.querySelector('body');
let currMode = "dark";


modeBtn.addEventListener("click", () =>{
    if(currMode ==="light"){
        currMode = "dark";
        body.classList.add('dark');
        body.classList.remove('light');
        document.querySelector("body").style.backgroundColor = "#0a192f";
        document.querySelector("body").style.color = "white";
        modeBtn.textContent = "light mode";
    } 
    else{
        currMode = "light"
        body.classList.add('light');
        body.classList.remove('dark');
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        modeBtn.textContent = "dark mode";
    }
    console.log(currMode);
});
