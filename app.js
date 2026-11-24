function enviar(){
    var contenido = document.querySelector('#contenido')
    var v1 = document.querySelector('#t1').value
    var v2 = document.querySelector('#t2').value
    var url = ""
    if (document.querySelector('#opcion1').checked)
        url = 'http://127.0.0' + v1 + '/' + v2
    else if (document.querySelector('#opcion2').checked)
        url = 'http://127.0.0resta/' + v1 + '/' + v2
    else if (document.querySelector('#opcion3').checked)
        url = 'http://127.0.0multiplicacion/' + v1 + '/' + v2
    else if (document.querySelector('#opcion4').checked)
        url = 'http://127.0.0division/' + v1 + '/' + v2
    else if (document.querySelector('#opcion5').checked)
        url = 'http://127.0.0potenciacion/' + v1 + '/' + v2
    else if (document.querySelector('#opcion6').checked)
        url = 'http://127.0.0seno/' + v1
    else if (document.querySelector('#opcion7').checked)
        url = 'http://127.0.0coseno/' + v1
    else
        swal("Mensaje", "Seleccione una opción", "warning");

    fetch(url)
    .then(function(response){
        if (response.ok){
            return response.json() // puede ser response.text()
        } else {
            throw "Error en la llamada"
        }
    })
    .then(function(texto){
        console.log(texto)
        cadena = "<h3>Resultado: " + texto.Resultado + " Operación: " + texto.Operacion + "</h3>"
        contenido.innerHTML = `${cadena}`
        //swal("Mensaje", "Proceso realizado correctamente", "success");
    })
    .catch(function(error){
        console.log(error)
        document.write(error)
        swal(error)
        swal({
            title: "Advertencia",
            text: error,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
    })
}
