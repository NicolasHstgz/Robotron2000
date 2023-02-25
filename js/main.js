document.addEventListener('mousedown', function(event) {
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);


const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {

  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },

  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -4
  },

  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 43
  },

  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -9
  }
}


controle.forEach((elementoAtual) => {
  elementoAtual.addEventListener('click', (event) => {
    
    manipulaDados(event.target.dataset.controle, event.target.parentNode);
    atualizaEstatisticas(event.target.dataset.controle, event.target.dataset.peca, event.target.parentNode);
  })
})

var valorPositivo;

function manipulaDados(operacao, controle) {
  let peca = controle.querySelector('.controle-contador');
  
  if(operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
    valorPositivo = true;

  } else {
      if(peca.value > 0 && operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
        valorPositivo = true;

    } else {
      valorPositivo = false;
    }
  }
  
}


function atualizaEstatisticas(controle, peca, pai) {

  estatisticas.forEach((elementoAtual) => {
    if(controle === "+") {
      elementoAtual.textContent = parseInt(elementoAtual.textContent) + pecas[peca][elementoAtual.dataset.estatistica];

    } else if(controle === "-") {
        if(valorPositivo === true) {
          elementoAtual.textContent = parseInt(elementoAtual.textContent) - pecas[peca][elementoAtual.dataset.estatistica];
        }
        
    }
  
  })
}
  