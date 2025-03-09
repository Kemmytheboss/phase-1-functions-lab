//const distanceFromHqInBlock = ((38-34)*264)
//const distanceFromHqInBlocks = 1
//streetNumber = 43
//block will be 43-42 = 1
//math.abs() is used to calculate the absolute value learn. It is a javascript coercion.
//type coercion is what you input. eg Math.abs("string"); // NaN'string' "null" "number" 
function distanceFromHqInBlocks(headquaters){ 
    const streetNumber = 42;
    
    return Math.abs(headquaters-streetNumber)
    }
    
    
    // A block is 264 feet long. 
    // To calculate distance, get the value between two blocks and multiply the answer by 264
    // distance between 2 streets that are 50th St to 42nd St will be ((38-34)*264)
    //math.abs() it is the absolute value of a number. It is a javascript coercion. 5 will return 5, -1 will return 1
    
    
    function distanceFromHqInFeet(streetNumber){
      const headquarters = 42;
      return Math.abs(streetNumber - headquarters) * 264;
    }
    
    
    // errors I got 1. type error 'M' please remeber to have M as capital
    //hardcording values directly
    //using the feetperblock before defining it error = referenceError
    function distanceTravelledInFeet(streetNumber , headquarters){
      const feetPerBlock = 264;
      const distanceTravelledInBlocks = Math.abs(streetNumber - headquarters);
      const distanceTravelledInFeet = distanceTravelledInBlocks * feetPerBlock
     
       return distanceTravelledInFeet; //Math.abs((50-42)* 264)
    }
    
    //fare will be calculated by getting the value from the start and destination*/
     function calculatesFarePrice(start, destination){
      const feetPerBlock = 264;
      const feetTravelled= Math.abs(start - destination) * feetPerBlock
     
     
      if(feetTravelled <= 400){
        return 0;  //'gives customers a free sample';
    
      }else if (feetTravelled <= 2000){
        const fareAmount = (feetTravelled-400) * 0.02;
        return  fareAmount;   //`${fareAmount} cents`;
      } else if (feetTravelled <= 2500){
        return  25;      //25 dollars
    
      } else{
        return 'cannot travel that far'
      }
    
     }
    