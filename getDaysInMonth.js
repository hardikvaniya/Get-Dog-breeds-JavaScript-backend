export function getDaysInMonth(month, year) {
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // check if the month of febuary is a leap year
  if (month === 2 && isLeapYear(year)){
    return 29;
  }
  return daysInMonths[month - 1]; // -1 because the month array is zero indexed
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}