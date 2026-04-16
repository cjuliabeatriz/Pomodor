//variáveis globais
let minutos = 60; // 1 minuto = 60 segundos

let tempos = {
    foco: 25 * minutos,
    pausacurta: 5 * minutos,
    pausalonga: 15 * minutos
};

let tempoRestante = tempos.foco;  // quanto tempo para acabar o timer
let timerRodando = false;         // se o timer estiver rodando é true, se não for é false
let pausa = false;                // se está em pausa ou não
let modo = 'foco';                // modo atual do timer
let ciclos = 0;                   // Conta quantos pomodoros você já fez
let intervalo = null;             // guarda o intervalo do timer

//função para atualizar o display
function atualizarDisplay() {
    const minutosRestantes = Math.floor(tempoRestante / 60);
    const segundosRestantes = tempoRestante % 60;

    const minutosFormatados = minutosRestantes.toString().padStart(2, '0');
    const segundosFormatados = segundosRestantes.toString().padStart(2, '0');

    document.getElementById('timer').textContent = `${minutosFormatados}:${segundosFormatados}`;
}

// atualiza o display ao carregar a página
atualizarDisplay();

//função para iniciar o timer
function iniciarTimer() {
    if (!timerRodando) {  // só inicia se não estiver rodando
        timerRodando = true;
        intervalo = setInterval(() => {
            if (tempoRestante > 0) {
                tempoRestante--;
                atualizarDisplay();
            }
        }, 1000);  // roda a cada 1 segundo
    }
}

//função para resetar o timer
const resetarTimer = () => {
    clearInterval(intervalo);
    tempoRestante = tempos.foco;
    timerRodando = false;
    ciclos = 0;
    atualizarDisplay();
};
//eventos dos botões
      document.getElementById('btn-iniciar').addEventListener('click', iniciarTimer); //getElementById serve para selecionar e retornar um único elemento HTML específico da página web através do seu atributo id
      
      document.getElementById('btn-pausar').addEventListener('click', () => {pausa = !pausa
          if (pausa) {
          document.getElementById('btn-pausar').textContent = 'Continuar';
                  }
          else {
          document.getElementById('btn-pausar').textContent = 'Pausar';
           }
        }); //usei a função arrow para simplificar a função de pausar o timer, quando clicar no botão de pausar, a variável pausa vai alternar entre true e false, ou seja, se estiver pausado, vai despausar e vice-versa   
      document.getElementById('btn-resetar').addEventListener('click', resetarTimer); //configurar depois
      document.getElementById('btn-salvar-config').addEventListener('click', () => { ciclos = 0; lerconfig(); }); //quando clicar no botão de salvar configuração, a função lerconfig vai ser chamada para atualizar os tempos de foco e pausas, e os ciclos vão ser resetados para 0, para começar um novo ciclo com as novas configurações

function lerconfig() {
    const focoInput = document.getElementById('tempo-foco');
    const pausaCurtaInput = document.getElementById('pausa-curta');
    const pausaLongaInput = document.getElementById('pausa-longa');

    tempos.foco = Number(focoInput.value) * minutos; //multiplica o valor do input por 60 para converter de minutos para segundos
    tempos.pausaCurta = Number(pausaCurtaInput.value) * minutos;
    tempos.pausaLonga = Number(pausaLongaInput.value) * minutos;
}
function atualizarDisplay() {
     const minutos = Math.floor(tempoRestante / 60);
     const segundos = tempoRestante % 60;
    
      const minutosFormatados = minutos.toString().padStart(2, '0');
      const segundosFormatados = segundos.toString().padStart(2, '0');

      document.getElementById('timer').textContent = `${minutosFormatados}:${segundosFormatados}`
}