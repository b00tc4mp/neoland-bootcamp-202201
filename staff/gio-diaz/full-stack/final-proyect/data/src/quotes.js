function menos3meses (fecha){
    debugger
    const mes = fecha.getMonth() -3
    return new Date(fecha.getYear, mes, fecha.getDate, 0, 0, 0, 0)
    
}