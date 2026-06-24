// Variável tamanho do texto
let tamanhoAtualFonte = 20;
// Função de cálculo de economia
function calcularEconomia() {
// Valor digitado
let metrosQuadrados = document.getElementById("tamanhoHorta").value;
let caixaResultado = document.getElementById("resultado");
// Validação simples: se não digitar nada ou número negativo
if (metrosQuadrados <= 0 || metrosQuadrados === "") {
caixaResultado.style.display = "block";
caixaResultado.innerHTML = "<strong>Por favor, digite um tamanho de área válido!</strong>";
return;
}
// cálculo simples baseado em dados fictícios de economia rural
// Exemplo: O gotejamento economiza em média 30 litros de água por metro quadrado por dia
let aguaEconomizadaPorDia = metrosQuadrados * 30;
let aguaEconomizadaPorMes = aguaEconomizadaPorDia * 30;
// Caixa de resultado aparece com o resultado inserido
caixaResultado.style.display = "block";
caixaResultado.innerHTML = `
<h3>Impacto Ecológico Estimado:</h3>
<p>Ao mudar para o gotejamento sustentável, você deixará de desperdiçar:</p>
<p>💧 <strong>${aguaEconomizadaPorDia} litros</strong> de água por dia.</p>
<p>🚜 <strong>${aguaEconomizadaPorMes} litros</strong> de água por mês!</p>
<p><em>Isso garante uma produção forte sem esgotar o nosso meio ambiente.</em></p>
`;
}
// ACESSIBILIDADE
// 1. Alto Contraste (mudança das cores da tela)
function mudarContraste() {
// Adiciona ou remove a classe 'alto-contraste' no body
document.body.classList.toggle("alto-contraste");
}
// 2. Tamanho da letra
function aumentarFonte() {
if (tamanhoAtualFonte < 30) { // Limite máximo para não haver quebra de layout
tamanhoAtualFonte = tamanhoAtualFonte + 3;
document.body.style.fontSize = tamanhoAtualFonte + "px";
    }
}
// 3. Voltar a letra ao tamanho normal
function resetarFonte() {
tamanhoAtualFonte = 18;
document.body.style.fontSize = tamanhoAtualFonte + "px";
}
