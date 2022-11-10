const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
//Lista de itens que será salva no navagador.
const itens = []

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    //Captura os campos "nome" e "quantidade".
    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value
    //Cria elementos
    criaElemento(nome, quantidade)
    //Limpa campos.
    nome = ''
    quantidade = ''

})
//Função para criar elementos
function criaElemento(nome, quantidade) {
    //Novo item criado.
    const novoItem = document.createElement('li')
    //Classe adcionado
    novoItem.classList.add('item')
    //Quantidade do item foi criado.
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    //Incluir a quantidade do item no item.
    novoItem.appendChild(numeroItem)
    //Concatenar com o nome.
    novoItem.innerHTML += nome
    //Incluir o item na lista.
    lista.appendChild(novoItem)
    //Item atual transformado em objeto.
    const itemAtual = {
        'nome': nome,
        'quanidade': quantidade
    }
    //Esse objeto e colocado dentro de um array.
    itens.push(itemAtual)
    //Esse array de objetos e mandado para o local storage. Colocamos o JSON.stringify para transforma em string pois o localStorage so salva esse tipo.
    localStorage.setItem('item', JSON.stringify(itens))
}

