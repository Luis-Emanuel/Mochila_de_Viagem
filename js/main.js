const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')

form.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    //Captura os campos "nome" e "quantidade"
    const nome =  evento.target.elements['nome'].value
    const quantidade =  evento.target.elements['quantidade'].value
    
    criaElemento(nome, quantidade)

})

function criaElemento(nome,quantidade){
    //Novo item criado
    const novoItem = document.createElement('li')
    //Classe adcionado
    novoItem.classList.add('item')
    //Quantidade do item foi criado
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    //Incluir a quantidade do item no item
    novoItem.appendChild(numeroItem)
    //Concatenar com o nome
    novoItem.innerHTML += nome
    //Incluir o item na lista
    lista.appendChild(novoItem)
    
}