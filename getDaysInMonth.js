export function getDaysInMonth(month, year) {
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return daysInMonths[month];
}
