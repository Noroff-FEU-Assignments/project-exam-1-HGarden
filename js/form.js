const form = document.querySelector(".form");
const error = document.querySelector(".error");
const fields = document.querySelector(".fields");
const input = document.querySelector(".input");

const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const messageError = document.querySelector("#message-error");

function validateForm(event) {
  event.preventDefault();
  console.log("hello");

  if (checkLength(fullname.value, 5) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "flex";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "flex";
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "flex";
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "flex";
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", validateForm);
