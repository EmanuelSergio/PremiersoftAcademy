/*
Crie uma função que valide uma senha com os seguintes critérios:
- Mínimo de 8 caracteres
- Pelo menos uma letra maiúscula
- Pelo menos um número
- Retorne true se válida, false se inválida
*/

// Sua solução aqui

function temOitoCaracteres(any) {
  if (any.length >= 8) {
    return true;
  }

  return false;
}

function temLetraMaiuscula(any) {
  return any ? /[A-Z]/.test(any) : false;
}

function temNumero(any) {
  return any ? /[1-9]/.test(any.split("")) : false;
}

function validadorDeSenha(senha) {
  const numCaracteres = temOitoCaracteres(senha);
  const maiuscula = temLetraMaiuscula(senha);
  const temNum = temNumero(senha);

  if (numCaracteres && maiuscula && temNum) {
    return true;
  }

  return false;
}

console.log(validadorDeSenha("s1aLvdddde"));
