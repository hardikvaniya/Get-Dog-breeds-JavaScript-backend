
// This file contains the function that prompts the user to enter a valid date.

import { getValidYear, getValidMonth, getValidDay } from "./getDateHelpers.js";

export async function getValidDate() {
  const year = await getValidYear(); // to get a valid year from the user
  const month = await getValidMonth(year); // to get a valid month from the user
  const day = await getValidDay(year, month); // to get a valid day from the user

  const inputDate = new Date(year, month - 1, day); // month - 1 because months are zero-indexed in JS
  const now = new Date();

  if (inputDate >= now) {
    return inputDate;
  } else {
    console.log("Invalid date. Please enter a present or future date.");
    return getValidDate();
  }
}
