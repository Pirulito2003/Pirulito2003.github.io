const botoesCardapio = document.querySelectorAll('.botaoMenu');
const conteudos = document.querySelectorAll('.conteudo');

botoesCardapio.forEach((botaoMenu, indice) => {
    botaoMenu.addEventListener('click' , () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botaoMenu);

        esconderConteudoAnterior();
         
        mostrarConteudoRelacionado(indice);

    })
})

function mostrarConteudoRelacionado(indice) {
    conteudos[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderConteudoAnterior() {
    const conteudoAtivo = document.querySelector('.ativa');
    conteudoAtivo.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}


var btn = document.querySelector(".nao");
var position = 0;
var isAnimating = false;

btn.addEventListener("click", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});



btn.addEventListener("mouseover", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

const sim = document.querySelector('#sim');
const modal = document.querySelector("dialog");
const nao= document.querySelector("#fecharModal")
const no= document.querySelector("#fecharM")

sim.onclick = function () {
modal.show()
}
nao.onclick, no.onclick = function(){
    modal.close()
}
