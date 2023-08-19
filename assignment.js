import { fetchDogs } from "./api/fetchDogs.js";

async function main() {
  const dogBreeds = await fetchDogs();

  if (!dogBreeds) {
    console.log("Could not generate dog breed list, please try again later");
    return;
  }

  // Get inputs from user...
  const userName = await getValidUserName();

  console.log(`Here is the list of breeds you need to take photos of: `);

  main();
}

main();
