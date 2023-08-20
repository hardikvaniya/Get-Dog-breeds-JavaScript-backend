import { fetchDogs } from "./api/fetchDogs.js";
import { getValidUserName } from "./inputs/getValidUserName.js";
import { getValidDate } from "./validdate.js";
// import {rl} from "./readlineinterface.js"; 
import { printBreedsByAlphabet,filteredFriendBreedPhotos} from "./getDogBreedAsUser.js";
import { friends } from "./friend-collections.js";
import { getValidLetter } from "./getAlphabet.js";
import inquirer from "inquirer";

async function main() {
  const dogBreeds = await fetchDogs();

  if (!dogBreeds) {
    console.log("Could not generate dog breed list, please try again later");
    return;
  }

  // Get inputs from user...
  const userName = await getValidUserName();
  console.log(`Hello ${userName}!`);
  const selectedLetter = await getValidLetter();
  const startDate = await getValidDate();

  const currentDate = new Date(startDate); //get current date to compare with start date

  var filteredDogBreeds =  filteredFriendBreedPhotos(userName, dogBreeds, friends);

  // console.log(filteredDogBreeds)
  console.log(`Here is the list of breeds you need to take photos of: `);
  printBreedsByAlphabet(filteredDogBreeds, selectedLetter, currentDate);

  const response = await inquirer.prompt([
    {
      type: "confirm",
      name: "continue",
      message: "Do you want to run the program again?",
      default: false
    }
  ]);

  if (response.continue) {
    main();
  } else {
    process.exit(0); // Exit the program
  }
}

main();
