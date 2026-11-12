// console.log("hello world");

function getComputerChoice(max) {
    let randomNumber = Math.floor(Math.random()* max);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper"; 
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice(3));