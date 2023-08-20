// Desciption: This file contains the functions to print the dog breeds by randomonly generated alphabet

import { sortedAlphabet } from "../resources/sortedAlphabet.js";

//to print all dog breeds by randomonly generated alphabet
export function printBreedsByAlphabet(dogBreeds, startLetter, currentDate) {
    printDogBreedsWithLetter(dogBreeds, startLetter, currentDate);
    var usedLetters = [startLetter.toLowerCase()];
  
    for (let i = 0; i < sortedAlphabet.length; i++) {  // print till all the letters are used
      const nextLetter = getNextLetter(usedLetters);
      if (nextLetter === null) {
        break;
      }
  
      printDogBreedsWithLetter(dogBreeds, nextLetter, currentDate); // to print all the dog breeds with the selected letter
      usedLetters.push(nextLetter.toLowerCase()); // update the used letters array
    }
  }
  
// filter out the dog breeds that the user has already taken photos of
export function filteredFriendBreedPhotos(userName, dogBreeds, friends){
    const userIndex = friends.findIndex(friend => friend.name === userName);
  
    if (userIndex !== -1) {
      const userBreedPhotos = friends[userIndex].breedPhotos;
      return dogBreeds.filter(breed => !userBreedPhotos.includes(breed));
    } else {
      console.log(`User ${userName} not found.`);
      return null;
    }
  }

// to generate a random next letter
export function getNextLetter(usedLetters) {
    const remainingLetters = sortedAlphabet.filter(letter => !usedLetters.includes(letter));
  
    if (remainingLetters.length === 0) {
      return null; // No more available letters
    }
  
    const nextLetter = remainingLetters[Math.floor(Math.random() * remainingLetters.length)];
    return nextLetter;
  }

// to print the dog breeds with the selected letter
export function printDogBreedsWithLetter(dogBreeds, startLetter, currentDate) {
    // filter out breed as selected letter and sort it alphabetically
    const breedsStartingWithLetter = dogBreeds.filter(breed => breed[0] === startLetter).sort();

    // Loop through breeds and print
    for (let breedCounter = 0; breedCounter < breedsStartingWithLetter.length; breedCounter++) {
        const currentBreed = breedsStartingWithLetter[breedCounter];
        console.log(`${currentDate.toISOString().split('T')[0]}: ${currentBreed}`); // to print the date and the breed

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return currentDate;
}