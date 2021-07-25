const submit = document.querySelector("#notif");

function validation() {
  let email = document.querySelector("#email");
  let text = document.querySelector("#text");
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(validRegex)) {
    submit.disabled = true;
    submit.style.width = "50vw";
    submit.textContent = "We sent a notification! Thank you ❤❤";
    text.style.display = "none";
    email.style.display = "none";
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
    text.textContent = "Please provide a valid email address";
    text.style.color = "#ff0000";
  }
}
submit.addEventListener("click", validation);
