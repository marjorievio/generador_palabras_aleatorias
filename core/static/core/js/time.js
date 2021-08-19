function FechaHora(){
    var nombres_dias = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado")
    var nombres_meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")

    momentoActual = new Date()
    hora = momentoActual.getHours()
    if (hora < 10)
    {
        hora = "0" + hora
    }
    minuto = momentoActual.getMinutes()
    if (minuto < 10)
    {
        minuto = "0" + minuto
    }
    segundo = momentoActual.getSeconds()
    if (segundo < 10)
    {
        segundo = "0" + segundo
    }

    horaImprimible = hora + ":" + minuto + ":" + segundo

    dia = momentoActual.getDate() //dia del mes
    dia_semana = momentoActual.getDay() //dia de la semana
    mes = momentoActual.getMonth() + 1
    anio = momentoActual.getFullYear()

    fecha_actual  = nombres_dias[dia_semana] +", "+ dia +" de "+ nombres_meses[mes -1] +" de "+anio

    document.getElementById('reloj').innerHTML = fecha_actual +" | "+horaImprimible;
    setTimeout("FechaHora()",1000)
} 