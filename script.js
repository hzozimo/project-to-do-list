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

const salvarTarefasNoLocalStorage = () => localStorage.setItem('lista', listaDeTarefas.innerHTML);
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
botaoSalvarTarefas.addEventListener('click', salvarTarefasNoLocalStorage);

const moverTarefaParaCima = () => {
  const tarefas = document.getElementsByTagName('li');
  for (let index = 0; index < tarefas.length; index += 1) {
    if ((index !== 0) && (tarefas[index].classList.contains('selecionado'))) {
      const temp = tarefas[index].outerHTML;
      tarefas[index].outerHTML = tarefas[index - 1].outerHTML;
      tarefas[index - 1].outerHTML = temp;
    }
  }
}
const botaoMoverParaCima = document.getElementById('mover-cima');
botaoMoverParaCima.addEventListener('click', moverTarefaParaCima);

const moverTarefaParaBaixo = () => {
  const tarefas = document.getElementsByTagName('li');
  const quantidadeDeTarefas = tarefas.length - 1;
  for (let index = quantidadeDeTarefas; index >= 0; index -= 1) {
    if ((index !== quantidadeDeTarefas) && (tarefas[index].classList.contains('selecionado'))) {
      const temp = tarefas[index].outerHTML;
      tarefas[index].outerHTML = tarefas[index + 1].outerHTML;
      tarefas[index + 1].outerHTML = temp;
    }
  }
}
const botaoMoverParaBaixo = document.getElementById('mover-baixo');
botaoMoverParaBaixo.addEventListener('click', moverTarefaParaBaixo);

const removeSelecionado = () => {
  const tarefaJaSelecionada = document.querySelector('.selecionado');
  tarefaJaSelecionada.remove();
}
const botaoRemoveSelecionado = document.getElementById('remover-selecionado');
botaoRemoveSelecionado.addEventListener('click', removeSelecionado);
