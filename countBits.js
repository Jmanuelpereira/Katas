var countBits = function(n) {
    if(n <= 0 )
    return 'We no accept negative numbers, try again'
  
    let numBit = n.toString(2)
  
    return numBit.split('').filter(number => number == "1").length
  
  };
  
  countBits(987)