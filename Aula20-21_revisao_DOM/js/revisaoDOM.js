/* Aula 21 - Dia 24-11-2021 - Front end 2 - Turma 2 
    Exemplo prático que foi desenvolvido como revisão no inicio da aula.
*/
const btn = document.getElementById('adicionar');
const inputText = document.getElementById('input');

/* Função chamada pelo botão no onclick */
function revisaoDOM() {

    let nome = "Charles";
    //usa-se crases(``) e não aspas ('' ou "")
    let nomeTemplate = `O nome do usuário é ${nome}`;
    console.log("Exibindo no console\n");
    console.log(nomeTemplate);
}

/* Capturando a interação com o botão e executando a função */
btn.addEventListener('click', function (evento) {

    evento.preventDefault();

    //Guarda o valor informado no input do formulário HTML
    let nome = inputText.value;
    let nomeTemplate = `O nome do usuário é ${nome}`;
    console.log("Exibindo o nome no console\n");
    console.log(nomeTemplate);

    console.log("Exibindo o QuerySelector - InnerHtml");
    console.log(document.querySelector('h3').innerHTML);

    console.log("\n");

    console.log("Exibindo o QuerySelector - InnerText");
    console.log(document.querySelector('h3').innerText);

    console.log("Alterar o texto presente no H3 (Inner-Text)");
    document.querySelector('h3').innerText = "Novo Texto";

    console.log("Alterar o texto presente no H3 (Inner-Text)");
    document.querySelector('h3').innerHTML = '<h1>Texto maior</h1>';

    console.log("\n");

    console.log("Manipulando NÓS com o DOM");

    //Criando um novo nó do tipo textual
    let novoTexto = document.createTextNode("Digital House Brasil");

    console.log(novoTexto);
    console.log(novoTexto.data); //Exibe corretamente

    //Atribuindo ao <p> da pagina html
    document.querySelector('p').innerText = novoTexto;
    document.querySelector('p').innerText = novoTexto.data; //Forma correta de exibir o texto
    console.log(novoTexto.data);

    console.log("\n");

    //Fazendo o Apend nos Nós no DOM
    console.log("Adicionando elementos LI(itens) a lista(UL)");

    //Definindo o texto do item que vai ser salvo
    var textoDoItem = document.createTextNode("Novo item");

    //Criando novo nó do tipo <li>
    var novoNo = document.createElement("li");

    //Atribuindo o texto ao item <li>
    // li = "Novo item"
    novoNo.appendChild(textoDoItem);

    //Adicionando o li ao UL
    document.getElementById("lista").appendChild(novoNo);

    /* Descomente esta parte do código, para testar a remoção da lista */
    //Removendo um item <li> da lista <ul>

    /* //Capturando todos os elementos da Lista <ul>
    var listLI = document.getElementById("lista");

    //Exibindo a lista
    console.log(listLI);

    //Remove o ultimo elemento da lista
    listLI.removeChild(listLI.lastElementChild); */
});






