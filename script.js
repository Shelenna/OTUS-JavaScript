const table = document.getElementById('students');
const nameInput = document.getElementById('name');
const birthdateInput = document.getElementById('birthdate');
const genderInput = document.getElementById('gender');
const addStudentButton = document.getElementById('addStudent');
const averageAgeCell = document.getElementById('averageAge');

let students = [];

addStudentButton.addEventListener('click', () => {
  const name = nameInput.value;
  const birthdate = new Date(birthdateInput.value);
  const gender = genderInput.value;
  const age = calculateAge(birthdate);

  students.push({ name, birthdate, gender, age });

  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const genderCell = row.insertCell(1);
  const birthdateCell = row.insertCell(2);
  const ageCell = row.insertCell(3);

  nameCell.innerHTML = name;
  genderCell.innerHTML = gender;
  birthdateCell.innerHTML = formatDate(birthdate);
  ageCell.innerHTML = age;

  updateAverageAge();
});

function calculateAge(birthdate) {
  const ageDiffMs = Date.now() - birthdate.getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ru-RU', options);
}

function updateAverageAge() {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  const averageAge = totalAge / students.length;
  averageAgeCell.innerHTML = averageAge.toFixed(1);
}
