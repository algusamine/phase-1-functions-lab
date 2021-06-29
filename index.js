// Code your solution in this file!
const hqLocation = 42; 
//const blockLength = 264;
function distanceFromHqInBlocks(currentLocation) {
    if(currentLocation > hqLocation){
        return currentLocation - hqLocation;
    } else{
        return hqLocation - currentLocation;
    }
};
//distanceFromHqInBlocks(34);


function distanceFromHqInFeet(currentLocation) {
    if (currentLocation > hqLocation){
    return (currentLocation - hqLocation) * 264;
} else {
    return (hqLocation - currentLocation) * 264;
}
}
//distanceFromHqInFeet(distanceFromHqInBlocks(43));
function distanceTravelledInFeet(pointa, pointb){
    if (pointa > pointb) {
        return (pointa - pointb) * 264;
    } else {
        return (pointb - pointa) * 264;
    }
};
//distanceTravelledInFeet(34, 50)


function calculatesFarePrice(distanceTravelledInFeet, price){
    if (distanceTravelledInFeet <= 400) {
        return 'free sample'
    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000){
      return distanceTravelledInFeet * price
    } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500) {
      return 'Your charge is 25 dollars'
    } else if (distanceTravelledInFeet > 2500) {
      return 'You can\'t travel that far'
    }
  };
  calculatesFarePrice(distanceTravelledInFeet(42, 33), 0.02);