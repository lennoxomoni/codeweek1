//challenge - 2 Speed Detector

const prompt = require('prompt-sync')({sigint: true});

//variable holding the speed of a car

let carSpeed = parseFloat(prompt('speed of car in km/h: '))

// Function to check if the car's speed is above 70 km/h

function speedDetector() {
    let points = 0;
    
    if (carSpeed < 70){
    console.log("Ok");
    } 
    else { 
         for(speedLimit = 70; speedLimit < carSpeed; speedLimit += 5){
            points += 1;
        }
        console.log(`Points: ${points}`);
        
    }
 
    // if statement to check whether the points are above 12
    if(points > 12){
        console.log("License suspended");
    }
}

//invoke function
speedDetector();