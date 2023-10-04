const botoes = document.querySelectorAll(".botao");
const doramas = document.querySelectorAll(".dorama")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
		desselecionarDorama();

		botao.classList.add("selecionado");
		doramas[indice].classList.add("selecionado");
    });
});
function desselecionarDorama() {
	const doramaSelecionado = document.querySelector(".dorama.selecionado");
	doramaSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
