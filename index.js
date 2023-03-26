// Code your solution in this file!
    function distanceFromHqInBlocks(location) {
    const hq = 42;
    if (location >= hq) {
    return location - hq;
    } else {
    return hq - location;
    }
    }

    function distanceFromHqInFeet(location) {
        const block = 264;
        return distanceFromHqInBlocks(location) * block;
      }
      
  
    function distanceTravelledInFeet(startBlock, endBlock) {
        let distance;
      
        if (startBlock > endBlock) {
          distance = (startBlock - endBlock) * 264;
        } else {
          distance = (endBlock - startBlock) * 264;
        }
      
        return distance;
      }
  
    function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 
    const dist = distance - 400; 
  
    if (distance < 400) {
      return 0;
    }
    else if (distance > 400 && distance < 2000) {
      return dist * 0.02; 
    }
    else if (distance > 2000 && distance < 2500) {
      return 25; 
    }
    else {
      return "cannot travel that far"; 
    }
  
  
  }