//crindo uma nova tag li
const itemNovo = document.createElement("li")

//criando conteúdo
const conteudoItemNovo = document.createTextNode("Item 0")

//adicinando conteúdo na tag
itemNovo.appendChild(conteudoItemNovo)

//definir conteúdo de referencia
const elementoReferencia = document.getElementById("lista")

//adicionar na tela
elementoReferencia.insertAdjacentElement("afterbegin", itemNovo)

//criar item 5
const itemNovo2 = document.createElement("li")
const conteudoSegundoItem = document.createTextNode("Item 5")
itemNovo2.appendChild(conteudoSegundoItem)
elementoReferencia.insertAdjacentElement("beforeend", itemNovo2)
