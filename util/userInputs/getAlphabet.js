import { sortedAlphabet } from "../../resources/sortedAlphabet.js";
import inquirer from "inquirer";

// to get an alphabet letter from the user
export async function getValidLetter() {
    const response = await inquirer.prompt({ // to prompt the user to enter a letter
      type: "text",
      name: "letter",
      message: "Please enter a letter of the alphabet:",
      validate: input => {
        if (input.length === 1 && sortedAlphabet.includes(input.toLowerCase())) { // to check if the input is a single letter of the alphabet
          return true;
        }
        return "Invalid letter. Please enter a single letter of the alphabet.";
      }
    });
  
    return response.letter.toLowerCase(); // to return the letter in lowercase
  }
  
  
  
  