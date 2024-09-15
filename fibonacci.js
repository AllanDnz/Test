function isFibonacci(num) {
    let a = 0, b = 1, aux;
    
    if (num === 0 || num === 1) {
      return true;
    }
  
    while (b <= num) {
      aux = a + b;
      a = b;
      b = aux;
      if (b === num) {
        return true;
      }
    }
    return false;
  }
  
  let num = 21;
  
  if (isFibonacci(num)) {
    console.log(`${num} pertence.`);
  } else {
    console.log(`${num} não pertence.`);
  }
  