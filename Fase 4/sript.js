function procesarRespuestas() {
    let total = 5
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["A", "B", "B", "B", "A"];

    for (let i =1; i <= total; i++) {
        if (myForm["r" + i].value == null ||
        myForm["r" + i].value == '') {
            alert('Favor responder todas las preguntas');
            return false;
        } else {
            if (myForm["r" + i].value === respuestas Correctas[i - 1])
            puntos++;
        }
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML='Obtuve '+puntos+' puntos de ' + total + ' posibles ';
    return false;
}
