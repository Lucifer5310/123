let fs = require("fs");
let correct = document.getElementById("correct");
correct.innerText = "";

function register(){
    let loginValue = document.forms["auth"].elements["login"].value;
    let passValue = document.forms["auth"].elements["password"].value;
    if (loginValue == "" || loginValue == NaN || loginValue == " " ||
        passValue == "" || passValue == NaN || passValue == " ") {
        document.getElementById("correct").innerText = "Упс, наверное руки трясутся. Вы не всё ввели!";
    } 
    else {
        fs.appendFileSync("src/bd.txt", "\n" + loginValue + " " + passValue);
        document.location.href = "index.html";    
    }
    
}

function checkBD(){
    let BD = fs.readFileSync("src/bd.txt", "utf8");

    BD = BD.split("\n");
    BD.splice(0, 1)
    for(let i=0; i < BD.length; i++){
        BD[i] = BD[i].split(" ");
    }
    console.log(BD);
    return BD;
}

function auth(){
    let BD = checkBD();
    let loginValue = document.forms["auth"].elements["login"].value;
    let passValue = document.forms["auth"].elements["password"].value;
    console.log(BD);
    for(let i = 0; i < BD.length; i++){
        if (BD[i][0] == loginValue){
            console.log(BD[i][0]);
            if(BD[i][1] == passValue){
                console.log(BD[i][1]);

                document.location.href = "main.html";
            }
            else {
                correct.innerText = "Упс, пароль неправильный:)";
            }
        }
    }
    correct.innerText = "Что-то вы снова придумываете. Такого аккаунта нету:)";
}
