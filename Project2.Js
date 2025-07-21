function maindiv(){
    let Headdiv = document.createElement("div");
    Headdiv.id = "div1";
    Headdiv.style.height = "500px";
    Headdiv.style.width = "100%";
    Headdiv.style.border = "1px solid black";
    Headdiv.style.display = "flex";
    Headdiv.style.justifyContent = "center";
    Headdiv.style.alignItems = "center";
    Headdiv.style.background =  "";
    Headdiv.style.borderRadius = "10px";
    Headdiv.style.backgroundImage = "linear-gradient(90deg, #8B624B, #D8B4A6)";
    console.log("Headdiv");
    return Headdiv;
}

let maindiv1 = maindiv();
document.body.appendChild(maindiv1);

function leftdiv(){
    let Childdiv = document.createElement("div");
    Childdiv.id = "div2";
    Childdiv.style.height = "450px";
    Childdiv.style.width = "500px";
    Childdiv.style.border = "1px solid black";
    // Childdiv.style.backgroundColor = "whitesmoke";
    Childdiv.style.margin = "0px 120px 0px 0px";
    Childdiv.style.borderRadius = "10px";
    console.log("Childdiv");
    return Childdiv;
}

let leftdiv1 = leftdiv();
maindiv1.appendChild(leftdiv1);

function rightdiv(){
    let Childdiv = document.createElement("div");
    Childdiv.id = "div2";
    Childdiv.style.height = "450px";
    Childdiv.style.width = "500px";
    Childdiv.style.border = "1px solid black";
    Childdiv.style.borderRadius = "10px";
    Childdiv.style.overflowY = "auto";
    console.log("Childdiv");
    return Childdiv;
}

let rightdiv1 = rightdiv();
maindiv1.appendChild(rightdiv1);


function leftbutton(){
    let buttonleft = document.createElement("button");
    buttonleft.id = "leftbutton";
    buttonleft.style.height = "50px";
    buttonleft.style.border = "1 solid black";
    buttonleft.style.width = "100px";
    buttonleft.style.backgroundColor = "#00A9E0";
    buttonleft.innerHTML = "Click me!";
    buttonleft.style.margin = "10px 0px 0px 50px";
    buttonleft.style.borderRadius = "10px";
    // buttonleft.style.backgroundColor = "#94B3F7";
    console.log(buttonleft);
    return buttonleft;
}

let button1 = leftbutton();
leftdiv1.appendChild(button1);


function inleftdiv(){
    let div4 = document.createElement("div");
    div4.id = "inleftdiv";
    div4.style.margin = "30px 0px 0px 42px";
    div4.style.border = "2px solid transparent";
    // div4.style.backgroundColor = "whitesmoke";
    div4.style.backgroundColor = "#F4EDE8";
    div4.style.borderRadius = "10px";
    div4.style.height = "320px";
    div4.style.width = "400px";
    console.log("div4");
    return div4;
}

let callinleftdiv = inleftdiv();
leftdiv1.appendChild(callinleftdiv);

function funinputtittle(){
    let tasktittle = document.createElement("input");
    tasktittle.id = "task";
    tasktittle.style.height = "50px";
    tasktittle.style.width = "300px";
    tasktittle.style.margin = "10px 0px 0px 40px";
    tasktittle.style.border = "1px solid black";
    tasktittle.style.borderRadius = "8px";
    tasktittle.placeholder = "Enter Task tittle";
    tasktittle.style.backgroundColor = "#B4CDBA";
    tasktittle.style.box = "border-box";
    console.log("tasktittle");
    return tasktittle;
}

let inputtittle = funinputtittle();
callinleftdiv.appendChild(inputtittle);

function textarea(){
    let taskdiscription = document.createElement("textarea");
    taskdiscription.id = "discription";
    taskdiscription.style.height = "100px";
    taskdiscription.style.width = "300px";
    taskdiscription.style.margin = "10px 0px 0px 40px";
    taskdiscription.style.border = "1px solid black";
    taskdiscription.style.borderRadius = "8px";
    taskdiscription.placeholder = "Task Discription";
    taskdiscription.style.backgroundColor = "#B4CDBA";
    console.log("taskdiscription");
    return taskdiscription;
}

let calldiscription = textarea();
callinleftdiv.appendChild(calldiscription);


function lastbutton(){
    let button2 = document.createElement("button");
    button2.id = "button2";
    button2.style.height = "50px";
    button2.style.width = "300px";
    button2.style.margin = "50px 0px 0px 40px";
    button2.innerHTML = "Add Task";
    button2.style.fontWeight  = "bold";
    button2.style.backgroundColor = "#00A9E0";
    button2.style.borderRadius = "8px";
    console.log("button2");
    return button2;
}

let buttonlast = lastbutton();
callinleftdiv.appendChild(buttonlast);

// Functionality
callinleftdiv.style.display = "none";
button1.addEventListener("click",() =>{
    callinleftdiv.style.display = "block";
});

buttonlast.addEventListener("click",()=>{
    callinleftdiv.style.display = "none";
})


// Details Uthane ke liye
function extractDetail(){
    let tittle = document.getElementById("task").value.trim();
    let description = document.getElementById("discription").value.trim();
    if(tittle === "" || description === ""){
        alert("Please fill in both fields.");
        return null;
    }
    return {
        tittle: tittle,
        description: description
    };
}

// ham kaise display krenge
function displayTask(details){
    let taskcard = document.createElement("div");
    taskcard.style.height = "50px";
    taskcard.style.width = "400px";
    taskcard.style.border = "2px solid black";
    taskcard.style.borderRadius = "10px";
    taskcard.style.margin = "20px 40px 0px 40px";
    taskcard.style.backgroundColor = "whitesmoke";

    //create and fill the tittle
    let tittleElement = document.createElement("h3");
    tittleElement.innerText = details.tittle;
    tittleElement.style.margin = "0";

    //create and fill the discription
    let discriptionElement = document.createElement("p");
    discriptionElement.innerText = details.description;
    discriptionElement.style.margin = "5px 0 0 0";

    taskcard.appendChild(tittleElement);
    taskcard.appendChild(discriptionElement);
    rightdiv1.appendChild(taskcard);
}


//  Working Display Task

buttonlast.addEventListener("click",()=>{
    let task = extractDetail();
    if(task){
        displayTask(task);
        document.getElementById("task").value = "";
        document.getElementById("discription").value = "";
    }
});


tittleElement.style.color = "#5F4B8B";
discriptionElement.style.color = "#5F4B8B";
tasktittle.style.borderColor = "#F6D02F";
taskdiscription.style.borderColor = "#F6D02F";
taskcard.style.borderColor = "#F6D02F";
discriptionElement.style.color = "#333333";
