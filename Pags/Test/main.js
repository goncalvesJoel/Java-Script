
function somar(valor1, valor2, operador) {
    return eval(`${valor1} ${operador} ${valor2}`);
  }
  
  let resultado = somar(2, 2, '+');
  console.log(resultado);
