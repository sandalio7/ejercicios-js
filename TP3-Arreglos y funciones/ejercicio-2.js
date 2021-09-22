do{
    let ciudad = prompt('ingrese una ciudad')
    let ciudades = []
    ciudades.push(ciudad)
    let r = confirm('desea continuar? si no es asi ingrese 0 o cierre')
    if(r==false){
        document.write(ciudades.length + '<br>')
        document.write(ciudades[1,2])
        ciudades.push('Paris')
        document.write(ciudades[2])
        splice(2,1,'Barcelona')
    }
}while(r==true)

