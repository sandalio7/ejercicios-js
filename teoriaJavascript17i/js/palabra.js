let palabra = prompt('ingrese una palabra');
for(let x = palabra.length-1; x >= 0; x--){
    console.log(palabra[x])
    document.write(palabra[x]+'-')
}