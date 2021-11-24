
let inputText = document.getElementById("nova-tarefa");
var tarefasPendentes = document.querySelector('.tarefas-pendentes');
var tarefasConcluidas = document.querySelector('.tarefas-concluidas');
let btn = document.getElementById("adicionar-tarefa");

//Criando o card que será exibido - Recebe o elemento pai (tarefasPendentes)
let criaCard = (elementoPai) => {

    //Adiciona o tarefa no elemento pai 'tarefasPendentes' 
    elementoPai.innerHTML += `<li class="tarefa">
                                <div class="not-done"></div>
                                <div class="descripcion">
                                    <p class="nome">${inputText.value}</p>
                                </div>
                                </li>`;
}

//adiciona a função de criar o card ao botão '+'
btn.addEventListener('click', function(evnt) {

    evnt.preventDefault();

    //Chama a função que cria o card em tela
    criaCard(tarefasPendentes);

    //Limpando o campo após salvar
    inputText.value = "";

})

// evento para remover elemento de uma div e inserir em outra 
// O evento acontece nessa lista, não no botão
tarefasPendentes.addEventListener('click', function(event){
    event.preventDefault();

    //seleciona e armazena o elemento pai (div tarefa) para que possamos realoca-la
    let tarefa = event.target.parentNode;

    console.log(tarefa);

    //se alvo do evento for elemento de classe 'not-done'
    //Ou seja, se <tarefa> é marcada como NOT-DONE, a condição é verdadeira
    if(event.target.classList.contains('not-done')) {

        //remove a div tarefa de 'tarefasPendentes'
        tarefa.parentNode.removeChild(tarefa);

         //realoca de acordo com o novo pai selecionado
        tarefasConcluidas.appendChild(tarefa);
    }

});



