const ageCalculate = (dateOfBirth, monthOfBirth, yearOfBirth) => {
  const birthDate = new Date(yearOfBirth, monthOfBirth - 1, dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
  }

  let months = monthDiff < 0 ? 12 + monthDiff : monthDiff;
  let days = dayDiff < 0 ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() + dayDiff : dayDiff;

  return `${age} years, ${months} months, ${days} days`;
};

function calculateAge() {
  const dateOfBirth = parseInt(document.getElementById('dateOfBirth').value, 10);
  const monthOfBirth = parseInt(document.getElementById('monthOfBirth').value, 10);
  const yearOfBirth = parseInt(document.getElementById('yearOfBirth').value, 10);

  if (!isNaN(dateOfBirth) && !isNaN(monthOfBirth) && !isNaN(yearOfBirth)) {
      const age = ageCalculate(dateOfBirth, monthOfBirth, yearOfBirth);
      document.getElementById('ageResult').textContent = `You are ${age} old.`;
  } else {
      document.getElementById('ageResult').textContent = "Please enter valid date, month, and year.";
  }
}
