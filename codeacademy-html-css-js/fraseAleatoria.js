let listaFrase = ["A dificuldade é apenas um intervalo entre duas felicidades. - Kauã Calixto",
    "A inteligência te ajuda a vencer uma discussão, mas a sabedoria te ajuda a nunca entrar em uma. - Diego Passos",
    "Eu posso aceitar o fracasso. Todo mundo falha em alguma coisa. Mas eu não posso aceitar não tentar. - Ana Helena",
    "We all make choices, but in the end, our choices make us. - Felipe Tenório",
    "Si vis pacem, para bellum. -Robson Neves",
    "Na minha máquina funciona. - Pedro Ribeiro",
    "É difícil alcançar a perfeição, mas não é difícil aproximar-se dela. - Victoria Lucena",
];

function novafrase() {
    var aleatorio = Math.floor(Math.random() * (listaFrase.length));
    document.getElementById('frase').innerHTML = listaFrase[aleatorio];
}

