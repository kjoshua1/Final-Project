const FullNameInput = document.getElementById("FullNameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const dobInput = document.getElementById("dobInput");

FullNameInput.addEventListener('keyup', function() {
  validateFullName(this.value);
});
ageInput.addEventListener('keyup', function() {
  validateAgeInt(this.value);
});
emailInput.addEventListener('keyup', function() {
  validateEmailInt(this.value);
});
dobInput.addEventListener('change', function() {
  validateDOBInt(this.value);
});

function validateFullName(value) {
  const fullNameInput = document.getElementById("FullNameInput");
  if (value.trim() === "") {
    fullNameInput.classList.remove("is-valid");
    fullNameInput.classList.add("is-invalid");
  } else {
    fullNameInput.classList.remove("is-invalid");
    fullNameInput.classList.add("is-valid");
  }
  updateProgressBarUwU();
}

function validateAgeInt(value) {
  const ageInput = document.getElementById("ageInput");
  if (value.trim() === "" || isNaN(value)) {
    ageInput.classList.remove("is-valid");
    ageInput.classList.add("is-invalid");
  } else {
    ageInput.classList.remove("is-invalid");
    ageInput.classList.add("is-valid");
  }
  updateProgressBarUwU();
}

function validateEmailInt(value) {
  const emailInput = document.getElementById("emailInput");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value.trim() === "" || !emailRegex.test(value)) {
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }
  updateProgressBarUwU();
}

function validateDOBInt(value) {
  const dobInput = document.getElementById("dobInput");
  if (value.trim() === "") {
    dobInput.classList.remove("is-valid");
    dobInput.classList.add("is-invalid");
  } else {
    dobInput.classList.remove("is-invalid");
    dobInput.classList.add("is-valid");
  }
  updateProgressBarUwU();
}

function updateProgressBarUwU() {
  const inputs = document.querySelectorAll('.form-control');
  const progressBar = document.getElementById('formProgress');
  const validInputs = Array.from(inputs).filter(input => input.classList.contains('is-valid'));
  const progress = (validInputs.length / inputs.length) * 100;
  progressBar.style.width = progress + '%';
  progressBar.innerText = progress + '%';
}