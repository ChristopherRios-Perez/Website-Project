<form id="myForm" onsubmit="return validateForm()">
  <input type="text" name="name" placeholder="Name"><br>
  <input type="email" name="email" placeholder="Email"><br>
  <input type="submit" value="Submit">
</form>

function validateForm() {
  // Get the form input values
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;

  // Check if the name field is empty
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  // Check if the email field is empty or invalid
  if (email == "") {
    alert("Email must be filled out");
    return false;
  } else if (!isValidEmail(email)) {
    alert("Invalid email address");
    return false;
  }

  // If all validations pass, redirect to another page
  window.location.href = "index.html";

  // Return false to prevent the form from submitting
  return false;
}

function isValidEmail(email) {
  // A simple email validation using regex
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
