let level = 3;

function levelUp() {

  if (level < 6) {
    level++;

    document.getElementById("levelText").innerText = "Current Level: " + level;
  }

  if (level === 6) {
    alert("🎉 Max Level Reached!");
  }

}
