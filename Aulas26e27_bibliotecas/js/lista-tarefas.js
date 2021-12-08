//Capturando as variáveis que serão manipuladas
const btnAddTarefa = document.getElementById('adicionar-tarefa');
const inputText = document.getElementById('nova-tarefa');
const tarefasPendentes = document.querySelector('.tarefas-pendentes');
const tarefasConcluidas = document.querySelector('.tarefas-concluidas');


const btnAddTarefaSweetAlert = document.getElementById('adicionar-tarefa-sweet-alert');



btnAddTarefaSweetAlert.addEventListener('click', function (evt) {

    //impede de atualizar a página
    evt.preventDefault();

    //sweetAlert();
    /* 
        dayJsDataAtual();
        dataPrazoTarefa(); */
    //dayJsValidacoes();

    animeJsExemplos();




});

function animeJsExemplos() {

    var roundLogEl = document.querySelector('.round-log');

    anime({
        targets: roundLogEl,
        innerHTML: [0, 10000],
        easing: 'linear',
        round: 10 // Will round the animated value to 1 decimal
    });

    anime.timeline({
        endDelay: 1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false
    })
        .add({ targets: '.color-hex', background: '#CCCCFF' }, 0);



    var relativeEl = document.querySelector('.el.relative-values');
    relativeEl.style.transform = 'translateX(0px)';

    anime({
        targets: '.el.relative-values',
        translateX: {
            value: '*=2.5', // 100px * 2.5 = '250px'
            duration: 1000
        },
        width: {
            value: '-=20px', // 28 - 20 = '8px'
            duration: 1800,
            easing: 'easeInOutSine'
        },
        rotate: {
            value: '+=2turn', // 0 + 2 = '2turn'
            duration: 1800,
            easing: 'easeInOutSine'
        },
        direction: 'alternate'
    });
}

let isOpen = false;
document.addEventListener('DOMContentLoaded', () => {
    let targets = document.getElementById('wrapper');
    let wrapperStyle = wrapper.style;
    let button = document.getElementById('button');
    button.addEventListener('click', () => {
        if (isOpen) {
            anime({
                targets,
                height: 0,
                opacity: [1, 0],
                duration: 2000,
                easing: 'easeOutQuad',
                complete() {
                    isOpen = false;
                    wrapperStyle.display = '';
                }
            });
        } else {
            isOpen = true;
            wrapperStyle.display = 'block';
            wrapperStyle.height = '0px';
            anime({
                targets,
                height: el => el.scrollHeight,
                opacity: [0, 1],
                duration: 3000,
                easing: 'easeOutCubic'
            });
        }
    }, false);
}, false);




function dayJsDataAtual() {
    return dayjs().format('DD/MM/YYYY');
}

function dataPrazoTarefa() {
    var prazoTarefa = document.getElementById('prazo').valueAsDate;
    prazoTarefa = prazoTarefa.toLocaleDateString("pt-BR", { timeZone: 'UTC' });
    return prazoTarefa;
}

function dayJsValidacoes() {

    var dataAtualCapturada = dayJsDataAtual();

    var prazoTarefaCapturado = dataPrazoTarefa();

    if (dayjs(prazoTarefaCapturado).isSame(dataAtualCapturada)) {
        console.log("As datas são equivalentes");
    } else if (dayjs(prazoTarefaCapturado).isAfter(dataAtualCapturada)) {
        console.log("Ok");

    } else {
        console.log("A data é inválida");
    }




}





async function sweetAlert() {

    var textoCapturado = await Swal.fire({
        title: 'Multiple inputs',
        html:
            '<input id="swal-input1" class="swal2-input">',

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('swal-input1').value
            ]
        }
    })

    console.log(textoCapturado.value);

    inputText.value = textoCapturado.value;

    criaCard(tarefasPendentes);


}



//Define o indice da tarefa
let contador = 1;

//Criando o card que será exibido - Recebe o elemento pai (tarefasPendentes)
let criaCard = (elementoPai) => {

    //Adiciona o tarefa no elemento pai 'tarefasPendentes' 
    //Adicionar o contador
    elementoPai.innerHTML += `<li class="tarefa">
                                       
                                        <div class="not-done"></div>
                                        <div class="descripcion">
                                            <p class="nome">${contador} - ${inputText.value}</p>
                                            <div>
                                                <p class="data-criacao"> Tarefa cadastrada em: ${dataAtual()}</p>
                                                <p class="data-prazo">Prazo da tarefa: ${definePrazoTarefa()}</p>
                                            </div>
                                            <img class="excluir" src="assets/trash_icon.png" alt="Remover tarefa">
                                         </div>

                                </li>`;
    contador++;
};

//adiciona a função de criar o card ao botão '+'
btnAddTarefa.addEventListener('click', function (evt) {

    //impede de atualizar a página
    evt.preventDefault();

    let tarefa = document.getElementById('nova-tarefa');

    //Trim, remove os espaços em branco
    if (tarefa.value.trim().length >= 10) {


        //Chama a função que cria o card em tela
        criaCard(tarefasPendentes);

        //Limpando o campo de texto após salvar
        inputText.value = "";

    } else {
        confirm("Insira no mínimo 10 caracteres na descrição da tarefa!");
    }

});

//função para pegar a data do dia formatada
let dataAtual = function () {
    let meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth().toString(); //Janeiro é 0.
    //formata ano para pegar apenas os dois últimos dígitos
    let yy = today.getFullYear().toString().substr(-2);
    return (dd + '/' + meses[mm] + '/' + yy);
};

let definePrazoTarefa = function () {
    var prazoTarefa = document.getElementById('prazo').valueAsDate;
    if (prazoTarefa == null) {
        prazoTarefa = dataAtual();
        return prazoTarefa;

    } else {
        let meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
        let dia = prazoTarefa.getDate() + 1;
        let mes = prazoTarefa.getMonth().toString();
        let ano = prazoTarefa.getFullYear().toString().substr(-2);
        return dia + "/" + meses[mes] + "/" + ano;
    }
};

// evento para remover elemento de uma div e inserir em outra 
// O evento acontece nessa lista, não no botão de submit
tarefasPendentes.addEventListener('click', function (event) {

    //seleciona e armazena o elemento pai (div tarefa) para que possamos realoca-la
    let tarefa = event.target.parentNode;

    //se alvo do evento for elemento de classe 'not-done'
    //Ou seja, se <tarefa> é marcada como NOT-DONE, a condição é verdadeira
    if (event.target.classList.contains('not-done')) {

        //remove a div tarefa de 'tarefasPendentes'
        tarefa.parentNode.removeChild(tarefa);

        //realoca de acordo com o novo pai selecionado
        tarefasConcluidas.appendChild(tarefa)
    }

    /* Capturamos o item <tarefa> que foi clicado no icone de deletar */
    if (event.target.classList.contains('excluir')) {

        Swal.fire({
            title: 'Removendo tarefa',
            text: "Você tem certeza que deseja remover ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, desejo remover',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                //Definimos o carte <item> que será removido
                tarefa = tarefa.parentNode;

                //Removemos o card <item> da lista de 'tarefasPendentes'
                tarefa.parentNode.removeChild(tarefa);

                Swal.fire(
                    'OK!',
                    'A Tarefa foi removida com sucesso.',
                    'success'
                )
            }
        })

        /* //Verificação de segurança
        let apagaTarefa = confirm("Você realmente deseja apagar esta tarefa ?");
        if (apagaTarefa) {

           

        } */
    }


});

/* Possiblitando apagar o card deletado */
tarefasConcluidas.addEventListener('click', evento => {

    evento.preventDefault();

    let tarefa = evento.target.parentNode;

    if (evento.target.classList.contains('excluir')) {

        //Verificação de segurança
        let apagaTarefa = confirm("Você realmente deseja apagar esta tarefa ?");
        if (apagaTarefa) {

            //Definimos o carte <item> que será removido
            tarefa = tarefa.parentNode;

            //Removemos o card <item> da lista de 'tarefasPendentes'
            tarefa.parentNode.removeChild(tarefa);
        }
    }
});
