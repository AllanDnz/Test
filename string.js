function strInvert(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  
  let input = "Teste";
  let output = strInvert(input);
  console.log(output);
  