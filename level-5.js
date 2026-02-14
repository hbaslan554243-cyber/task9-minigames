let coins = 0;

function increaseCoin() {
  coins++;
  document.getElementById("coinValue").innerText = coins;
}

function decreaseCoin() {
  if (coins > 0) {
    coins--;
    document.getElementById("coinValue").innerText = coins;
  }
}
