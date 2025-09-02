// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hq = 42;
  return Math.abs(pickupLocation - hq);
}

function distanceFromHqInFeet(location) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(location) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
