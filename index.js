// Code your solution in this file!
function distanceFromHqInBlocks(distanceInBlocks) {
    return Math.abs(42-distanceInBlocks);
}

function distanceFromHqInFeet(distanceInBlocks) {
    return distanceFromHqInBlocks(distanceInBlocks)*264;


}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination)*264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance>2500) {
        return 'cannot travel that far';
    }
    else if(distance<400) {
        return 0;
    }
    else if (distance>2000) {
        return 25;
    }

    else if (400 < distance <=2000) {
            return (distance-400)* 0.02;
        }

    
}