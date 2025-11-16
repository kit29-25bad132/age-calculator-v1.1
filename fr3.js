function calculateAge() {
  const birthdateInput = document.getElementById("birthdate").value;
  const resultDiv = document.getElementById("result");

  if (!birthdateInput) {
    resultDiv.style.display = "none";
    return alert("Please select a valid birthdate.");
  }

  const birthDate = new Date(birthdateInput);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  resultDiv.style.display = "block";
  resultDiv.textContent = `You are ${age} years old.`;
  resultDiv.style.animation = "fadeIn 1s ease-out forwards";
}
