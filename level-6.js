// Change this number if you want a different correct door
const correctDoor = 3;

function chooseDoor(selectedDoor) {

  const result = document.getElementById("resultMessage");

  if (selectedDoor === correctDoor) {

    result.innerHTML = "<span class='text-success'>🎉 Congratulations! You picked the correct door!</span>";

  } else {

    result.innerHTML = "<span class='text-danger'>❌ Wrong door! Try again.</span>";

  }

}
