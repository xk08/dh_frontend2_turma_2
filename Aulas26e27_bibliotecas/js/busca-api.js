var button = document.getElementById("button");

const tarefasPendentes = document.querySelector('.tarefas-pendentes');
const tarefasConcluidas = document.querySelector('.tarefas-concluidas');


button.addEventListener('click', function (evento) {
    evento.preventDefault();

    //Busca ao clicar no botão
    buscaTodosApiNova();
});


//Ver se deixo assim, ou ponho interno na função... talvez assim dificulte as coisas (O entendimento)
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}


//Assim é com Promisse??
function buscaTodosApiNova() {

    //Define url (end-point) da api
    const url = 'https://jsonplaceholder.typicode.com/users/5/todos';

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let tarefas = data;
            return tarefas.map(function (tarefa) {
                //return tarefas.map( tarefa => {
                let li = createNode('li');

                let conteudoLi = document.createTextNode(`<li class="tarefa">
                                       
                <div class="not-done"></div>
                <div class="descripcion">
                    <p class="nome">${tarefa.id} - ${tarefa.title}</p>
                    <br>
                    <img class="excluir" src="assets/trash_icon.png" alt="Remover tarefa">
                 </div>
            </li>`)

                li.innerHTML = conteudoLi.data;

                /* Verificando o status das tarefas para alocalas na lista <ul> correta */
                if (tarefa.completed) {
                    append(tarefasPendentes, li);
                } else {
                    append(tarefasConcluidas, li);
                }

            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

//Assim é com ASync Await - Pegando cada uma das propriedades e fazendo as conversões
async function buscaTodosApiNovaSimplificado() {

    //Define url (end-point) da api
    var url = 'https://jsonplaceholder.typicode.com/users/1/todos';

    //Chama o end-point
    let responseTodos = await fetch(url);

    //Converte a resposta pra json
    let todosJson = await responseTodos.json();

    //Percorre os elementos com o map
    todosJson.map(function (tarefa) {

        //Cria um novo card <li>
        let li = createNode('li');

        //Cria o conteudo do card (formato de texto)
        let conteudoLi = document.createTextNode(`<li class="tarefa">
                               
        <div id="teste" class="not-done"></div>
        <div class="descripcion">
            <p class="nome">${tarefa.id} - ${tarefa.title}</p>
            <img class="excluir" src="assets/trash_icon.png" alt="Remover tarefa">
         </div>
    </li>`)

        //Altera a tag <li> para os valores atualizados
        li.innerHTML = conteudoLi.data;

        /* Verificando o status das tarefas para alocalas na lista <ul> correta */
        if (tarefa.completed) {
            append(tarefasPendentes, li);
        } else {
            append(tarefasConcluidas, li);
        }
    });
}

/* REMOVENDO os elementos da lista selecionados */
tarefasPendentes.addEventListener('click', function (evento) {
    evento.preventDefault();
    // buscaTodosApiNova();

    let tarefa = evento.target.parentNode;

    //se alvo do evento for elemento de classe 'not-done'
    //Ou seja, se <tarefa> é marcada como NOT-DONE, a condição é verdadeira
    if (evento.target.classList.contains('not-done')) {

        //remove a div tarefa de 'tarefasPendentes'
        tarefa.parentNode.removeChild(tarefa);
        
        //realoca de acordo com o novo pai selecionado
        tarefasConcluidas.appendChild(tarefa)
    }

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

/* //Exemplo com a outra API - Posso usar esse em aula !!

  function buscaTodosApiNova() {

    const url = 'https://randomuser.me/api/?results=10';

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let authors = data.results;
            return authors.map(function (author) {
                let li = createNode('li');
                let img = createNode('img');
                let span = createNode('span');
                img.src = author.picture.medium;
                span.innerHTML = `${ author.name.first } ${ author.name.last } `;
                append(li, img);
                append(li, span);
                append(ul, li);
            })
        })
        .catch(function (error) {
            console.log(error);
        });
} */




