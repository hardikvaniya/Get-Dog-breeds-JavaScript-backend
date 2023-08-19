import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cacheFileName = "dog-cache.json";
const cacheFilePath = path.join(__dirname, cacheFileName);

export async function fetchDogs() {
  const cachedData = readCache();

  if (cachedData) {
  } else {
    try {
      const resp = await fetch("");
      const dogList = await resp.json();
    } catch (err) {
      console.log(
        `There was a problem fetching dog breed data from the DogAPI, please try again later`,
      );
      return;
    }
  }
  return;
}

function readCache() {}

function writeCache(data) {}
