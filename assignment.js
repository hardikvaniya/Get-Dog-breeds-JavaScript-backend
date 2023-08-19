import { fetchDogs } from "./api/fetchDogs.js";
import { getValidUserName } from "./inputs/getValidUserName.js";
import readline from "readline";
// rl is a global variable that allows us to read user input
const readIn = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  const dogBreeds = await fetchDogs();

  if (!dogBreeds) {
    console.log("Could not generate dog breed list, please try again later");
    return;
  }

  // Get inputs from user...
  const userName = await getValidUserName();
  console.log(`Hello ${userName}!`);

  console.log(`Here is the list of breeds you need to take photos of: `);

  readIn.question("Do you want to run the program again? (y/n): ", (answer) => {
    if (answer.toLowerCase() === "y") {
      main();
    } else {
      readIn.close();
    }
  });
}

main();
