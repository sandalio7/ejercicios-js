// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….


//creo un bucle para recorrer desde el 1 al 30
  for (let i = 1; i <= 30; i++) {
      //bucle interno para hacer las repeticiones
      for (let rep = 0; rep < i; rep++) {
          //mostrar el numero i, rep veces
          document.write(i);
      }
      document.write("<br>");
  }