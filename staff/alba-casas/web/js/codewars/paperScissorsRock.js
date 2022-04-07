function getWinner(p1, p2) {
  if (p1 === "scissors" && p2 === "scissors") {
    return "draw";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "player 1 wins";
  } else {
    return "player 2 wins";
  }
}

console.log(getWinner("paper", "scissors"));
