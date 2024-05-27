let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    
    // menu fechado - sua classe é menu-fechado
    // menu aberto - fica sem a classe - meunfechado

    // menu.classList.toggle("menu-fechado") ---- faria as duas funcoes de abrir e fechar (mas nao seria possivel modificar essa funcao)

    // Se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado") ){
        // para Abrir o menu - tirar a classe menu-fechado
        menu.classList.remove("menu-fechado")

        // mostrar icone barras
        iconeBarras.style.display = "none"

        // esconder icone do x
        iconeX.style.display = "inline"

    } else {
        // para fechar o menu - adicionar a classe menu-fechado 
        menu.classList.add("menu-fechado")

        // mostrar icone x 
        iconeX.style.display = "none"

        // esconder icone barras
        iconeBarras.style.display = "inline"
    }

}

onresize = () => {
     // para Abrir o menu - tirar a classe menu-fechado
     menu.classList.remove("menu-fechado")

     // esconder icone barras
     iconeBarras.style.display = "none"

     // mostrar icone do x
     iconeX.style.display = "inline"


}

// carrosel
let banner = document.querySelector(".banner")

// let slides = [0, 1, 2]
// slides [0] -> primeiro-banner
// slides [1] -> segundo-banner
// slides [2] -> terceiro-banner

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0


banner.classList.add(slides[slideAtual])

function mostrarProximoSlide(){
    // remover slide anterior 
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        // soma 1 na variavel slideAtual
        slideAtual++
    } else {
        // voltar para o primeiro
        slideAtual = 0
    }


    // mostrar slide de acordo com o slide atual 
    banner.classList.add(slides[slideAtual])

}

function mostrarSlideAnterior(){
    // remover slide anterior 
    banner.classList.remove(slides[slideAtual])

if (slideAtual > 0) {
    // subtrai 1 na variavel slideAtual 
    slideAtual--
} else {
    // voltar para o ultimo slide 
    slideAtual = 2
}
    
    // mostrar slide de acordo com o slide atual 
    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {
    // remove o slide atual 
    banner.classList.remove(slides[slideAtual])
    

    // atualiza a variavel com o indice de slide selecionado 
    slideAtual = indiceSlide

    // mostra o slide selecionado e salvo na variavel slideAtual 
    banner.classList.add(slides[slideAtual])

}

// carregamento dinamico dos cases 
let listaCases = [
    , 
]

function renderizarCases() {
    // Encontrar o elemento para inserir os cards
    let containerCards = document.querySelector(".container-cards")

    // variavel para guaradar o html dos cases monstados
    let template = ""

    // Para cada case da listaCases
    listaCases.forEach(cardCase  => {
        // montar o html do card, passando os atributos do case
        template += `<div class="card">
        <img src=${ cardCase.imagem } alt="">
        <p>${ cardCase.descricao }</p>
        <button>Ver Mais</button>
    </div>`

    })
    
    // inserir html dos cases montados no elemento container-cards
    containerCards.innerHTML = template
}

function carregarCases() {
    // método HTTP GET - Read/Leitura - Serve para mostrar um item ou uma lista de itens 
    fetch("http://localhost:3000/cases")

    // Deserialization - desserialização
    .then( (resposta) => resposta.json() )
    .then( (dadosTratados) => {
        console.log(dadosTratados)
        listaCases = dadosTratados
        renderizarCases()
    })
}

function solicitarOrcamento(event) {
    // pegar os valores dos inputs 
    let valorNome = document.getElementById("campo-nome").value 
    let valorEmail = document.getElementById("campo-email").value 
    let valorDescricao = document.getElementById("campo-texto").value 

    // organizar os valores em um objeto

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao 
    }

    console.log(dadosForm)

    // Enviar a requisição para a API
    // Metodo HTTP POST - Create/Criar -> Cadastrar um novo registro (solicitacao)
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(dadosForm)
    })
        // Caso Sucesso
        .then(resposta => {
            console.log(resposta);
            // Limpar os imputs
            document.querySelector("#contato form")

            // Mostrar um alert de sucesso
            alert("Solicitação enviada com sucesso!!! ╰(*°▽°*)╯")
        })

        // Caso Erro
        .catch(erro => {
            console.log(erro)

            // Mostrar um alert com msg de erro 
            alert("Erro na requisição ƪ(˘⌣˘)ʃ")


        })

            event.preventDefault()
}