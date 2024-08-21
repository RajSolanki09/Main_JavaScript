const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let dice = document.getElementById("dice");
    dice.textContent = randomNumber;

    dice.classList.add("roll");
    setTimeout(() => dice.classList.remove("roll"), 300);
  };

  document.getElementById("rollButton").addEventListener("click", rollDice);