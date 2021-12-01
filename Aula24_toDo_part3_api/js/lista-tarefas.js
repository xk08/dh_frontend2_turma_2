//Capturando as variáveis que serão manipuladas
const btnAddTarefa = document.getElementById('adicionar-tarefa');
const inputText = document.getElementById('nova-tarefa');
const tarefasPendentes = document.querySelector('.tarefas-pendentes');
const tarefasConcluidas = document.querySelector('.tarefas-concluidas');


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
                                            <img class="excluir" src="assets/trash_icon.png" alt="Remover tarefa">
                                         </div>

                                </li>`;
    contador++;
}

//adiciona a função de criar o card ao botão '+'
btnAddTarefa.addEventListener('click', function (evt) {

    //impede de atualizar a página
    evt.preventDefault();

    //Chama a função que cria o card em tela
    criaCard(tarefasPendentes);

    //Limpando o campo de texto após salvar
    inputText.value = "";

});

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
