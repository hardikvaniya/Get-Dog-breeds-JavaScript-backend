import { friends } from "../friend-collections.js";
import { select } from "@inquirer/prompts";

export async function getValidUserName() {
  const validFriendNames = friends.map(friend => friend.name);
  const nameChoices = validFriendNames.map(username => ({ title: username, value: username }));
  const response = await select({
    type: "select",
    name: "username",
    message: "Who are you?",
    choices: nameChoices,
  });

  return response;
  
}

