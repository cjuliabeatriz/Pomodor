//variáveis globais
let tempoRestante = 0;
let timerRodando = false;
let intervalo = null;
let modo = Foco; 
let ciclos = 0; 
    
// tempos que vai ser definido pelo usuário
let tempos = {
    foco: 25,
    pausacurta: 5,
    pausalonga: 15
}
document.addEventListener('DOMContentLoaded' , () => {} ) //O evento DOMContentLoaded garante que o código só seja executado depois que o HTML tiver sido completamente carregado.
console.log ('página carregada')

tempoRestante = tempos.foco * 60; //inicia o timer 

      document.getElementById('btn-iniciar').addEventListener('click', iniciarTimer); //getElementById serve para selecionar e retornar um único elemento HTML específico da página web através do seu atributo id
      document.getElementById('btn-pausar').addEventListener('click', pausarTimer);
      document.getElementById('btn-resetar').addEventListener('click', resetarTimer);
      document.getElementById('btn-salvar-config').addEventListener('click', salvarConfiguracao);

function lerconfig() {
    const focoInput = document.getElementById('tempo-foco');
    const pausaCurtaInput = document.getElementById('pausa-curta');
    const pausaLongaInput = document.getElementById('pausa-longa');

    tempos.foco = Number(focoInput.value);
    tempos.pausaCurta = Number(pausaCurtaInput.value);
    tempos.pausaLonga = Number(pausaLongaInput.value);
}
function atualizarDisplay() {
     const minutos = Math.floor(tempoRestante / 60);
     const segundos = tempoRestante % 60;
    
      const minutosFormatados = minutos.toString().padStart(2, '0');
      const segundosFormatados = segundos.toString().padStart(2, '0');

      document.getElementById('timer').textContent = `${minutosFormatados}:${segundosFormatados}`
}