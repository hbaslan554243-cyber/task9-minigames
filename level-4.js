function validateForm() {

  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("message");

  if (name === "") {

    message.innerHTML = "<span class='text-danger'>❌ Name is required!</span>";

  } else {

    message.innerHTML = "<span class='text-success'>✅ Welcome, " + name + "!</span>";

  }

}
