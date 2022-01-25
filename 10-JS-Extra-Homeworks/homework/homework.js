// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let res = [];
  let x = [];
  for(let clave in objeto){
    x.push(clave);
    x.push(objeto[clave]);
    res.push(x)
    x = []
  }
  return res;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let x = string.split("");
  x.sort();
  let z = x[0];
  let contador = 0;
  let res = {};
  for(let i = 0; i < x.length+1; i++){
    if(z === x[i]){
      contador += 1;
    }
    else{
      res[z] = contador;
      contador = 1;
      z = x[i];
    }
  }
  return res;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let res = [];
  let z = s.split("");
  for(let i = 0; i < z.length; i++) {
    if(z[i] === z[i].toUpperCase()){
      res.push(z[i]);
      let f = z.indexOf(z[i]);
      z.splice(f,1);
      i--;
    }
  }
  let res2 = res.concat(z);
  let res3 = res2.toString();
  let res4 =res3.replace(/,/g, "");
  return res4;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr1 = str.split(" ");
  let arr2 = [];
  for(let i = 0; i < arr1.length; i++){
   arr2.push(arr1[i].split(""));
  }
  for(let j = 0; j < arr2.length; j++){
   arr2[j] = arr2[j].toString();
   arr2[j] = arr2[j].replace(/,/g, "");
   arr2[j] = arr2[j].split("").reverse().join("")
  }
  arr2 = arr2.toString()
  arr2 = arr2.replace(/,/g, " ");
  return arr2;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let e = numero.toString();
  e = e.split("");
  if(e.length%2 !== 0){
  	let ind = Math.ceil(((e.length)/2)-1);
  	if(e.slice(0,ind).toString().replace(/,/g, " ") === (e.slice(ind+1,e.length).reverse().toString().replace(/,/g, " "))){
       return "Es capicua"
       }
    else{
    	return "No es capicua"
    }
  }
  else{
    let ind = Math.ceil((e.length)/2);
    if(e.slice(0,ind).toString().replace(/,/g, " ") === (e.slice(ind,e.length).reverse().toString().replace(/,/g, " "))){
      return "Es capicua"
      }
   else{
     return "No es capicua"
      }
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.split("");
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
      let f = cadena.indexOf(cadena[i]);
      cadena.splice(f,1);
      i--;
    }
  }
  cadena = cadena.toString();
  cadena = cadena.replace(/,/g, "");
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let x = [];
  arr.sort(function(a, b){
  return a.length - b.length;
  });
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let res = [];
  for(let i = 0; i < arreglo1.length; i++){
    for (let j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        res.push(arreglo1[i])
      }
    }
  }
  return res;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

