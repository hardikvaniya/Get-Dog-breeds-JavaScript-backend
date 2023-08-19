import { friends } from "../friend-collections.js";
import { select } from "@inquirer/prompts";

export function getValidUserName() {
  return select({
    message: "Who are you?",
    // choices: ...,
  });
}
