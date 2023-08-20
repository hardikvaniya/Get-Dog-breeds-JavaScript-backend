import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cacheFileName = "dog-cache.json";
const cacheFilePath = path.join(__dirname, cacheFileName);


// fetch the dog names from the DogAPI
export async function fetchDogs() {
  const cachedData = readCache();

  if (cachedData) {
    return cachedData; // return the cached data
  } else {
    try {
  
      const resp = await fetch("https://dog.ceo/api/breeds/list/all");
      const dogList = await resp.json();
      const structuredDogList = structureDogNames(dogList.message);
      writeCache(structuredDogList,cacheFilePath);

      return structuredDogList;

    } catch (err) {
      console.log(
        `There was a problem fetching dog breed data from the DogAPI, please try again`,
      );
      return;
    }
  }
}

// read the dog names from a cached file
function readCache() {
  try {
    const cacheData = fs.readFileSync(cacheFilePath, "utf8");
    return JSON.parse(cacheData);
  } catch (err) {
    return null;
  }
}

// write the dog names to a cached file
function writeCache(data, filePath) {
  try {
      fs.writeFileSync(filePath, JSON.stringify(data), "utf8");
      console.log("Cache file written successfully.");
  } catch (error) {
      console.error("An error occurred while writing the cache file:", error);
  }
}

//structure the dog names as <breed> <group>
function structureDogNames(breeds){ 
  const structuredNames = [];
  for (const breed in breeds) {
    if (breeds[breed].length === 0) {
      structuredNames.push(breed);
    } else {
      // here groups are actually breeds and breed is group
      breeds[breed].forEach(group => {
        structuredNames.push(`${group} ${breed}`);
      });
    }
  }
  return structuredNames;
}
