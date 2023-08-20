import { fetchDogs } from "./api/fetchDogs.js";
import { getUserName } from "./util/userInputs/getUserName.js";
import { getDate } from "./util/userInputs/getDate.js";
import { printBreedsByAlphabet,filteredFriendBreedPhotos} from "./util/dogBreed.js";
import { friends } from "./resources/friend-collections.js";
import { getValidLetter } from "./util/userInputs/getAlphabet.js";
import inquirer from "inquirer";

async function main() {
  const dogBreeds = await fetchDogs();

  if (!dogBreeds) {
    console.log("Could not generate dog breed list, please try again later");
    return;
  }

  // Get inputs from user...
  const userName = await getUserName();
  console.log(`Hello ${userName}!`);
  const selectedLetter = await getValidLetter();
  const startDate = await getDate();

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
