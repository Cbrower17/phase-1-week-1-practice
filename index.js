// This is just allowing us to use the dataset from the other file. You can ignore this line.
const UFO_SIGHTINGS = require("./nyc-ufo-sightings.json");

function calculateMinutes(seconds) {
  //return seconds divided by 60 rounded down
  return Math.floor(seconds / 60);
}

function getRandomSighting(UFO_SIGHTINGS) {
  const index = Math.random() * UFO_SIGHTINGS.length;
  return UFO_SIGHTINGS[index];
}

function getRandomSightings(number) {
  //create blank array to populate
  const sightings = [];
  //for loop to add a set number of sightings to array
  for (let i = 0; i < number; i++) {
    const sighting = getRandomSighting(UFO_SIGHTINGS);
    //add sighting to sightings array
    sightings.push(sighting);
  }
}

function getLongestSightings(UFO_SIGHTINGS) {
  //init longest sighting that can be updated
  let longestSighting = UFO_SIGHTINGS[0];
  return UFO_SIGHTINGS.map((sighting) => {
    if (sighting.duration > longestSighting.duration) {
      longestSighting = sighting;
      
    }
    
  });
  return longestSighting;
}

console.log(getLongestSightings(UFO_SIGHTINGS));
