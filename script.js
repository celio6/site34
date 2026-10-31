
const telaInicial = document.getElementById("telaInicial");
const telaJogo = document.getElementById("telaJogo");
const telaResultado = document.getElementById("telaResultado");

const botaoIniciar = document.getElementById("botaoIniciar");
const botaoNovamente = document.getElementById("botaoNovamente");

const perguntaHTML = document.getElementById("pergunta");
const alternativasHTML = document.getElementById("alternativas");
const resultadoHTML = document.getElementById("resultado");

let atual = 0;
let historiaFinal = "";

const perguntas = [

    {
        pergunta: "Como você acredita que a inteligência artificial deve ser utilizada?",

        alternativas: [
            {
                texto: "Para ajudar os seres humanos.",
                historia: "A humanidade utilizou a inteligência artificial como uma ferramenta para melhorar a vida das pessoas."
            },
            {
                texto: "Para substituir os seres humanos.",
                historia: "As máquinas passaram a realizar diversas atividades que antes eram feitas pelas pessoas."
            },
            {
                texto: "Com limites e supervisão.",
                historia: "A humanidade estabeleceu regras para garantir que a tecnologia fosse utilizada com responsabilidade."
            }
        ]
    },

    {
        pergunta: "O que fazer quando uma IA apresenta informações falsas?",

        alternativas: [
            {
                texto: "Confiar na inteligência artificial.",
                historia: "Muitas pessoas passaram a confiar nas respostas das máquinas sem verificar as informações."
            },
            {
                texto: "Verificar as informações.",
                historia: "A sociedade desenvolveu o hábito de verificar as informações antes de compartilhá-las."
            },
            {
                texto: "Limitar o acesso à tecnologia.",
                historia: "Foram criadas regras para controlar o uso da inteligência artificial."
            }
        ]
    },

    {
        pergunta: "Como será o futuro da humanidade com a inteligência artificial?",

        alternativas: [
            {
                texto: "Um futuro dominado pelas máquinas.",
                historia: "As máquinas conquistaram cada vez mais espaço nas decisões da sociedade."
            },
            {
                texto: "Um futuro de colaboração.",
                historia: "Humanos e máquinas aprenderam a trabalhar juntos e construir um futuro melhor."
            },
            {
                texto: "Um futuro controlado pelos humanos.",
                historia: "A humanidade decidiu manter o controle sobre o desenvolvimento tecnológico."
            }
        ]
    }

];

// BOTÃO INICIAR

botaoIniciar.addEventListener("click", iniciaJogo);

function iniciaJogo() {

    atual = 0;
    historiaFinal = "";

    telaInicial.style.display = "none";
    telaResultado.style.display = "none";
    telaJogo.style.display = "block";

    mostraPergunta();

}

// MOSTRAR PERGUNTAS

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaHTML.textContent = perguntas[atual].pergunta;

    alternativasHTML.innerHTML = "";

    perguntas[atual].alternativas.forEach(function(alternativa) {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", function() {

            historiaFinal += alternativa.historia + "\n\n";

            atual++;

            mostraPergunta();

        });

        alternativasHTML.appendChild(botao);

    });

}

// MOSTRAR RESULTADO

function mostraResultado() {

    telaJogo.style.display = "none";
    telaResultado.style.display = "block";

    resultadoHTML.textContent =
        historiaFinal +
        "Sua missão chegou ao fim! O futuro da inteligência artificial também depende das escolhas que fazemos hoje.";

}

// JOGAR NOVAMENTE

botaoNovamente.addEventListener("click", function() {

    telaResultado.style.display = "none";
    telaInicial.style.display = "block";

    atual = 0;
    historiaFinal = "";

});
