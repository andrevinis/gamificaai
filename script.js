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