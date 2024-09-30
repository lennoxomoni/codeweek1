const checkSpeed = (speed) => {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsThreshold = 12;

    if (speed <= speedLimit) {
        return "Ok"
    }
    const points = Math.floor((speed-speedLimit) / kmPerDemeritPoint);
    if (points > demeritPointsThreshold) {
        result.textContent = "License suspended";
    }
    else result.textContent = "Points: ${points}"
}