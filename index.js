function inverterString(str) {
    let novaString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  // String a ser invertida
  const str = "Olá, mundo!";
  
  // Chamada da função para inverter a string
  const stringInvertida = inverterString(str);
  
  // Exibição da string invertida
  console.log(stringInvertida);