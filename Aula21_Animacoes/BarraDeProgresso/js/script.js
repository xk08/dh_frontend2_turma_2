
var barraVerdeProgressoGlobal = 0;
var barraLaranjaProgressoGlobal = 0;

var barraVerdeTamanhoInicialGlobal = 0;
var barraLaranjaTamanhoInicialGlobal = 0;

var numInteracoesGlobal = 1;



function avancaBarraVerde(recebeValor) {
    var elem = document.getElementById("barraVerdeProgresso");

    //Não é o primeiro caso - 10% - o primeiro click
    if (recebeValor != 10) {
        barraVerdeTamanhoInicialGlobal = (recebeValor - 10);
    } else {
        barraVerdeTamanhoInicialGlobal = 0;
    }



    var id = setInterval(frame, 5); //1s = 1000ms

    function frame() {
        if (barraVerdeTamanhoInicialGlobal >= recebeValor) {
            clearInterval(id);
        } else {
            barraVerdeTamanhoInicialGlobal++;
            elem.style.width = barraVerdeTamanhoInicialGlobal + "%";
            elem.innerHTML = barraVerdeTamanhoInicialGlobal + "%";
        }
    }
}

function avancaBarraLaranja(recebeValor) {
    var elem = document.getElementById("barraLaranjaProgresso");
    var width = 0;

    if (recebeValor != 20) {
        barraLaranjaTamanhoInicialGlobal = (recebeValor - 20);
    } else {
        barraLaranjaTamanhoInicialGlobal = 0;
    }

    var id = setInterval(frame, 5); //1s = 1000ms

    function frame() {
        if (barraLaranjaTamanhoInicialGlobal >= recebeValor) {
            clearInterval(id);
        } else {
            barraLaranjaTamanhoInicialGlobal++;
            elem.style.width = barraLaranjaTamanhoInicialGlobal + "%";
            elem.innerHTML = barraLaranjaTamanhoInicialGlobal + "%";
        }
    }
}

function avancar() {

    if (barraLaranjaProgressoGlobal == 100) {
        alert("Você ja fez todas as interações disponíveis");
    } else {

        if (barraVerdeProgressoGlobal < 100) {
            barraVerdeProgressoGlobal += 10;
            avancaBarraVerde(barraVerdeProgressoGlobal);

        } else if (barraVerdeProgressoGlobal == 100) {
            if (barraLaranjaProgressoGlobal < 100) {
                barraLaranjaProgressoGlobal += 20;
                avancaBarraLaranja(barraLaranjaProgressoGlobal);

                barraVerdeProgressoGlobal = 0;
                barraVerdeTamanhoInicialGlobal = 0;

                document.querySelector('h4').innerText = `Interações: ${numInteracoesGlobal++}`


            }
        }

    }







}