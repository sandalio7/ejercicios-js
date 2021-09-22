let estacion = prompt('Ingrese su estacion del año preferida: 1- verano, 2- primavera, 3-otoño, 4-invierno');

// if(estacion == '1'){
//     document.write('El usuario selecciono la estacion verano');
// }else if(estacion == '2'){
//     document.write('El usuario selecciono la estacion primavera');
// }else if(estacion == '3'){
//     document.write('El usuario selecciono la estacion otoño');
// }else if(estacion == '4'){
//     document.write('El usuario selecciono la estacion invierno');
// }else{
//     document.write('El usuario selecciono una opcion erronea');
// }

switch (estacion){
    case '1':
    case 'verano':
        document.write('El usuario selecciono la estacion verano');
        break;
    case '2':
        document.write('El usuario selecciono la estacion primavera');
        break;
    case '3':
        document.write('El usuario selecciono la estacion otoño');
        break;
    case '4':
        document.write('El usuario selecciono la estacion invierno');
        break;
    default:
        document.write('El usuario usuario selecciono una opcion erronea');
}

