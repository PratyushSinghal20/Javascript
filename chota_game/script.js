alert("You wake in a dark forest...")

prompt("do you want to go left or right?")

let playAgain = 'yes';

while(playAgain === 'yes') {

if (prompt == "left") {
    alert("You want in a swamp")
    prompt("you see shiny in the mud.do you want to  pick it up? yes or no")
    if (prompt == "yes") {
        alert("it is a mysterious stone . you teleported to safety. you win")
    }else {
        alert("tu maar gya")
    }
}else {
    alert("you find a cave")
    prompt("Do you want to enter the cave? yes or no")
    if (prompt == "yes") {
        alert("A dragon wakes up and catches you away.you barely escapes")
    } else {
        alert("you walk around the cave and find a hidden path that leads you to safety. you win")
    }
}

UserChoice = prompt("do you want to play again? yes or no")
if (UserChoice == "no") {
    playAgain = "no"
    alert("Thanks for playing!")
   

}}

