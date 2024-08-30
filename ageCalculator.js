let ageCalculate = (dateOfBirth, monthOfBirth, yearOfBirth) => {
  let birthDate = Number(dateOfBirth);
  let birthMonth = Number(monthOfBirth);
  let birthYear = Number(yearOfBirth);

  let currentDate = new Date();

  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  const numDays = (y, m) => {
    let days = new Date(y, m, 0);
    let lastDate = days.getDate();
    return lastDate;
  };

  let lastDay = numDays(currentYear, currentMonth);

  if (currentMonth < birthMonth) {
    currentMonth = 12 + currentMonth;
    currentYear = currentYear - 1;
  }
  if (currentDay < birthDate) {
    currentDay = currentDay + lastDay;
    currentMonth = currentMonth - 1;
  }

  let year = currentYear - birthYear;
  let month = currentMonth - birthMonth;
  let day = currentDay - birthDate;

  let ageCalculator = `${year} ${month}${day}`;
  return ageCalculator;
};
