const listaDeTarefas = document.getElementById('lista-tarefas');

const recuperarTarefasNoLocalStorage = () => {
  if (localStorage.getItem('lista') !== '') {
    listaDeTarefas.innerHTML = (localStorage.getItem('lista'));
  }
}
window.onload = recuperarTarefasNoLocalStorage;

function adicionaTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  const limparInput = () => document.getElementById('texto-tarefa').value = '';
  const adicionarLi = (tarefa) => {
    const li = document.createElement('li');
    listaDeTarefas.appendChild(li).innerText = tarefa;
  }

  if (tarefa !== '') {
    adicionarLi(tarefa);
    limparInput();
  }
}
const botaoAdicionarTarefa = document.getElementById('criar-tarefa');
botaoAdicionarTarefa.addEventListener('click', adicionaTarefa);

const selecionaTarefa = ({ target }) => {
  const tarefaJaSelecionada = document.querySelector('.selecionado');
  if (tarefaJaSelecionada !== null) {
    tarefaJaSelecionada.classList.remove('selecionado');
  }
  target.classList.add('selecionado');
}
listaDeTarefas.addEventListener('click', selecionaTarefa);

const finalizaTarefa = ({ target }) => {
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}
listaDeTarefas.addEventListener('dblclick', finalizaTarefa);

const esvaziaLista = () => {
  const tarefas = document.querySelectorAll('li');
  tarefas.forEach((tarefa) => tarefa.remove());
}
const botaoLimpar = document.getElementById('apaga-tudo');
botaoLimpar.addEventListener('click', esvaziaLista);

const apagaFinalizados = () => {
  const tarefasFinalizadas = document.querySelectorAll('.completed');
  tarefasFinalizadas.forEach((tarefa) => tarefa.remove()); // https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
}
const botaoLimparFinalizados = document.getElementById('remover-finalizados');
botaoLimparFinalizados.addEventListener('click', apagaFinalizados);

const botaoLimpaFinalizados = document.getElementById('remover-finalizados');
botaoLimpaFinalizados.addEventListener('click', apagaFinalizados);

function salvarTarefas() {
  localStorage.setItem('lista', lista.innerHTML);
}

const botaoSalvaTarefas = document.getElementById('salvar-tarefas');
botaoSalvaTarefas.addEventListener('click', salvarTarefas);

function moverParaCima() {
  const listaArray = document.getElementsByTagName('li');
  for (let index = 0; index < listaArray.length; index += 1) {
    if ((index !== 0) && ((listaArray[index].classList.value).includes('selecionado'))) {
      const temp = listaArray[index].outerHTML;
      listaArray[index].outerHTML = listaArray[index - 1].outerHTML;
      listaArray[index - 1].outerHTML = temp;
    }
  }
}
const moverCima = document.getElementById('mover-cima');
moverCima.addEventListener('click', moverParaCima);

function moverParaBaixo() {
  const listaArray = document.getElementsByTagName('li');
  const t = listaArray.length;
  for (let index = t - 1; index >= 0; index -= 1) {
    if ((index !== (t - 1)) && ((listaArray[index].classList.value).includes('selecionado'))) {
      const temp = listaArray[index].outerHTML;
      listaArray[index].outerHTML = listaArray[index + 1].outerHTML;
      listaArray[index + 1].outerHTML = temp;
    }
  }
}
const moverBaixo = document.getElementById('mover-baixo');
moverBaixo.addEventListener('click', moverParaBaixo);

function removeSelecionado() {
  const selecionado = document.getElementsByClassName('selecionado');
  while (selecionado[0]) { // https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
    selecionado[0].parentNode.removeChild(selecionado[0]);
  }
}

const botaoRemoveSelecionado = document.getElementById('remover-selecionado');
botaoRemoveSelecionado.addEventListener('click', removeSelecionado);
