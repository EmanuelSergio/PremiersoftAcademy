// Explique o que será impresso e por quê
console.log(a);
var a = 1;
//undefined porque a var so esta atribuindo o valor na linha seguinte

//console.log(b);
let b = 2;
//não compila porque não é possivel acessar o let antes de inicializar

function exemplo() {
  console.log(c);
  var c = 3;
  //undefined porque a var so esta atribuindo o valor na linha seguinte
}

exemplo();
