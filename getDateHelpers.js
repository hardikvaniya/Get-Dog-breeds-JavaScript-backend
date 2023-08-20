// Description: This file contains helper functions for getting valid dates from the user.

import { getDaysInMonth } from "./getDaysInMonth.js";
import inquirer from "inquirer";


// to get a year from the user
export async function getValidYear() {
    const response = await inquirer.prompt([ // to prompt the user to enter a year
      {
        type: "input",
        name: "year",
        message: "Enter a start year (YYYY):",
        validate: input => {
          const inputYear = parseInt(input);
  
          if (!isNaN(inputYear) && inputYear >= new Date().getFullYear()) { // to check if the input is a valid year
            return true;
          } else {
            return "Invalid year. Please enter a present or future year.";
          }
        }
      }
    ]);
  
    return parseInt(response.year); // to return the ye
  }

// to get a month from the user
export async function getValidMonth(year) {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "month",
      message: "Enter a start month (MM):",
      validate: input => {
        const inputMonth = parseInt(input);
        const currentYear = new Date().getFullYear();

        if (!isNaN(inputMonth) && inputMonth >= 1 && inputMonth <= 12) {
          if (year === currentYear && inputMonth < new Date().getMonth() + 1) { // to check if the input is a valid month
            return "Invalid month for the current year. Please enter a valid month.";
          } else {
            return true;
          }
        } else {
          return "Invalid month. Please enter a valid month (1-12).";
        }
      }
    }
  ]);

  return parseInt(response.month);
}

  
// to get a day from the user
export async function getValidDay(year, month) {
  const daysInMonth = getDaysInMonth(month, year); 

  const response = await inquirer.prompt([
    {
      type: "input",
      name: "day",
      message: "Enter a start day of the month (DD):",
      validate: input => {
        const inputDay = parseInt(input);

        if (!isNaN(inputDay) && inputDay >= 1 && inputDay <= daysInMonth) { // to check if the input is a valid day considering the leap year
          return true;
        } else {
          return "Invalid day. Please enter a valid day for " +year +"/"+ month;
        }
      }
    }
  ]);


  return parseInt(response.day);
}
