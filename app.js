let userScore = 0;
let cpuScore = 0;

const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function change(letter){
    switch (letter) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
        default:
            break;
    }
}

function draw(userChoice){
    result_p.innerHTML = `It's a draw.`

    let userChoice_div = document.getElementById(userChoice);

    userChoice_div.classList.add("yellow-glow");
    setTimeout(()=>{userChoice_div.classList.remove("yellow-glow")},450);

    scoreBoard_div.classList.add("yellow-glow");
    setTimeout(()=>{scoreBoard_div.classList.remove("yellow-glow")},450);
}

function lose(userChoice, cpuChoice){
    cpuScore++;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = `${change(userChoice)} loses to ${change(cpuChoice)}. You lost.`

    let userChoice_div = document.getElementById(userChoice);

    userChoice_div.classList.add("red-glow");
    setTimeout(()=>{userChoice_div.classList.remove("red-glow")},450);

    scoreBoard_div.classList.add("red-glow");
    setTimeout(()=>{scoreBoard_div.classList.remove("red-glow")},450);

    cpuScore_span.classList.add("red-glow-score");
    setTimeout(()=>{cpuScore_span.classList.remove("red-glow-score")},450);
}

function win(userChoice, cpuChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${change(userChoice)} beats ${change(cpuChoice)}. You win.`

    let userChoice_div = document.getElementById(userChoice);

    userChoice_div.classList.add("green-glow");
    setTimeout(()=>{userChoice_div.classList.remove("green-glow")},450);

    scoreBoard_div.classList.add("green-glow");
    setTimeout(()=>{scoreBoard_div.classList.remove("green-glow")},450);

    userScore_span.classList.add("green-glow-score");
    setTimeout(()=>{userScore_span.classList.remove("green-glow-score")},450);
}

function getCpuChoice(){
    const choices = ["r","p","s"];
    const random_num=Math.floor(Math.random()*3);
    return choices[random_num];
}

function game(userChoice){
    const cpuChoice = getCpuChoice();

    switch(userChoice+cpuChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,cpuChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,cpuChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
        default:
            console.log("An error occoured.")
            break;
    }

}

function main(){
    rock_div.addEventListener('click',()=>game("r"));
    paper_div.addEventListener('click',()=>game("p"));
    scissors_div.addEventListener('click',()=>game("s"));
}

main();