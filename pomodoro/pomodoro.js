//variáveis globais
let minutos = 60; // ensina que um minuto é igual a 60 segundos

let tempos = {
    foco: 25 * minutos,
    pausacurta: 5 * minutos,
    pausalonga: 15 * minutos
};

let tempoRestante = tempos.foco;
atualizarDisplay();

let timerRodando = false; // se o timer estiver rodando é true, se não for é false
let pausa = null; //se está em intervalo ou não
let modo = 'foco'; //modo atual do timer, pode ser 'foco', 'pausaCurta' ou 'pausaLonga'
let ciclos = 0; //Conta quantos pomodoros você já fez

//função para resetar o timer
const resetarTimer = () => {
    tempoRestante = tempos.foco;  // Volta para o tempo de foco
    timerRodando = false;         // Para o timer
    ciclos = 0;                   // Zera os ciclos
};

//função para iniciar o timer
function iniciarTimer() {
    timerRodando = true; //indica que o timer está rodando
    intervalo = setInterval(() => {
        if (!pausa && tempoRestante > 0) {
            tempoRestante--;
            atualizarDisplay();
        }
    }, 1000);  // Roda a cada 1 segundo
}

//eventos dos botões
document.getElementById('btn-iniciar').addEventListener('click', iniciarTimer);

document.getElementById('btn-pausar').addEventListener('click', () => {
    pausa = !pausa;
    if (pausa) {
        document.getElementById('btn-pausar').textContent = 'Continuar';
    } else {
        document.getElementById('btn-pausar').textContent = 'Pausar';
    }
});

document.getElementById('btn-resetar').addEventListener('click', resetarTimer);

document.getElementById('btn-salvar-config').addEventListener('click', () => {
    ciclos = 0;
    lerconfig();
});

//função para ler as configurações
function lerconfig() {
    const focoInput = document.getElementById('tempo-foco');
    const pausaCurtaInput = document.getElementById('pausa-curta');
    const pausaLongaInput = document.getElementById('pausa-longa');

    tempos.foco = Number(focoInput.value) * minutos;
    tempos.pausacurta = Number(pausaCurtaInput.value) * minutos;
    tempos.pausaLonga = Number(pausaLongaInput.value) * minutos;
}

//função para atualizar o display
function atualizarDisplay() {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;

    const minutosFormatados = minutos.toString().padStart(2, '0');
    const segundosFormatados = segundos.toString().padStart(2, '0');

    document.getElementById('timer').textContent = `${minutosFormatados}:${segundosFormatados}`;
}
