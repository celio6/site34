
const botaoIniciar = document.querySelector(".iniciar-btn");

botaoIniciar.addEventListener("click", iniciaJogo);
const telaInicial = document.querySelector(".tela-inicial");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");
const botaoNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let historiaFinal = "";

// PERGUNTAS DO JOGO

const perguntas = [

    {
        pergunta: "Você descobriu que uma inteligência artificial consegue tomar decisões importantes. O que você faria?",

        alternativas: [
            {
                texto: "Permitiria que ela tomasse todas as decisões.",
                historia: "A humanidade passou a confiar completamente nas inteligências artificiais."
            },
            {
                texto: "Permitiria que ela ajudasse, mas com supervisão humana.",
                historia: "Os humanos decidiram trabalhar junto com as máquinas, mantendo o controle das decisões."
            },
            {
                texto: "Proibiria a IA de tomar decisões importantes.",
                historia: "A humanidade decidiu limitar o poder das inteligências artificiais."
            }
        ]
    },

    {
        pergunta: "Uma IA consegue substituir várias profissões. Qual seria sua atitude?",

        alternativas: [
            {
                texto: "Apoiar a substituição dos trabalhadores.",
                historia: "As empresas automatizaram grande parte das atividades profissionais."
            },
            {
                texto: "Criar novas oportunidades de trabalho.",
                historia: "A sociedade investiu em educação e novas profissões relacionadas à tecnologia."
            },
            {
                texto: "Impedir que a IA substitua os seres humanos.",
                historia: "Governos criaram regras para proteger os trabalhadores."
            }
        ]
    },

    {
        pergunta: "Uma inteligência artificial começa a produzir notícias falsas. O que fazer?",

        alternativas: [
            {
                texto: "Deixar a tecnologia funcionar livremente.",
                historia: "A liberdade tecnológica aumentou, mas também cresceram os desafios relacionados à desinformação."
            },
            {
                texto: "Criar mecanismos de verificação.",
                historia: "Sistemas de verificação foram desenvolvidos para identificar conteúdos falsos."
            },
            {
                texto: "Restringir a criação de conteúdos por IA.",
                historia: "Novas regras limitaram a produção automatizada de informações."
            }
        ]
    },

    {
        pergunta: "Como você imagina a relação entre humanos e máquinas no futuro?",

        alternativas: [
            {
                texto: "As máquinas serão superiores aos humanos.",
                historia: "As máquinas assumiram um papel cada vez mais importante na sociedade."
            },
            {
                texto: "Humanos e máquinas trabalharão juntos.",
                historia: "A colaboração entre humanos e máquinas criou novas possibilidades para a humanidade."
            },
            {
                texto: "Os humanos continuarão controlando toda a tecnologia.",
                historia: "A humanidade decidiu manter o controle sobre o desenvolvimento tecnológico."
            }
        ]
    }

];

// EVENTO DO BOTÃO INICIAR

botaoIniciar.addEventListener("click", iniciaJogo);

// FUNÇÃO PARA INICIAR O JOGO

function iniciaJogo() {

    atual = 0;
    historiaFinal = "";

    telaInicial.style.display = "none";

    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");

    mostraPergunta();

}

// FUNÇÃO PARA MOSTRAR AS PERGUNTAS

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    caixaPerguntas.textContent = perguntas[atual].pergunta;

    caixaAlternativas.innerHTML = "";

    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");

    perguntas[atual].alternativas.forEach((alternativa) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botao);

    });

}

// FUNÇÃO PARA REGISTRAR A RESPOSTA

function respostaSelecionada(opcao) {

    historiaFinal += opcao.historia + "\n\n";

    atual++;

    mostraPergunta();

}

// FUNÇÃO PARA MOSTRAR O RESULTADO

function mostraResultado() {

    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");

    textoResultado.textContent =
        "O FUTURO DA HUMANIDADE\n\n" +
        historiaFinal +
        "O futuro da Inteligência Artificial depende das escolhas que fazemos hoje. Sua missão chegou ao fim!";

    caixaResultado.classList.add("mostrar");

}

// EVENTO PARA JOGAR NOVAMENTE

botaoNovamente.addEventListener("click", jogarNovamente);

// FUNÇÃO PARA REINICIAR O JOGO

function jogarNovamente() {

    atual = 0;
    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();

}
