const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
//Lista de itens que será salva no navagador.
const itens = JSON.parse(localStorage.getItem("itens")) || []
//Interando e criado os itens salvos no navegador
itens.forEach(elemento => {
    criaElemento(elemento)
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault() 
    //Captura os campos "nome" e "quantidade".
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    //Verificar se o item a ser cadastrado já existe
    const existe = itens.find(elemento => elemento.nome === nome.value)

    //Item atual transformado em objeto. 
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }
    //Caso o item exista ou não
    if(existe){
        //Caso o item ja exista na lista ele ira receber o mesmo id
        itemAtual.id = existe.id
        //Chamar a função atualiaza
        atualizaItem(itemAtual)
        //Coloca o item atulizado na posição certa dentro do array
        itens[existe.id] = itemAtual
    }else{
        itemAtual.id = itens.length
        //Cria elementos
        criaElemento(itemAtual)
        //Esse objeto e colocado dentro de um array.
        itens.push(itemAtual)
    }
    //Esse array de objetos e mandado para o local storage. Colocamos o JSON.stringify para transforma em string pois o localStorage so salva esse tipo.
    localStorage.setItem('itens', JSON.stringify(itens))
    //Limpa campos.
    nome.value = ''
    quantidade.value = ''
})
//Função para criar elementos
function criaElemento(item) {
    console.log()
    //Novo item criado.
    const novoItem = document.createElement('li')
    //Classe adcionado
    novoItem.classList.add('item')
    //Quantidade do item foi criado.
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    //Atribuindo id ao data da o item
    numeroItem.dataset.id = item.id
    //Incluir a quantidade do item no item.
    novoItem.appendChild(numeroItem)
    //Concatenar com o nome.
    novoItem.innerHTML += item.nome
    //Incluir o item na lista.
    lista.appendChild(novoItem)
}
//Função resposavel por atualizar o item
function atualizaItem(item){
    //Atualiza a quantidade do item 
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}
