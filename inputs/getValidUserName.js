import { friends } from "../friend-collections.js";
import { select } from "@inquirer/prompts"; // inquirer is a package to get user input


// to selec the user name from the choices
export async function getValidUserName() {
  const validFriendNames = friends.map(friend => friend.name);
  const nameChoices = validFriendNames.map(username => ({ title: username, value: username })); // to display the name of the user
  
  const response = await select({  // to select the user name
    type: "select",
    name: "username",
    message: "Who are you?",
    choices: nameChoices,
  });

  return response;
}
