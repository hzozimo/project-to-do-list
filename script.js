function limparInput() {
  document.getElementById('texto-tarefa').value = '';
}

function adicionaTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  if (tarefa !== '') {
    const criarLi = document.createElement('li');
    const lista = document.getElementById('lista-tarefas');
    lista.appendChild(criarLi).innerText = tarefa;
    limparInput();
  }
}

function adicionaEventoBotao() {
  const botao = document.getElementById('criar-tarefa');
  botao.addEventListener('click', adicionaTarefa);
}

adicionaEventoBotao();

function colocaFundoCinza(event) {
  const evento = event;
  const tarefaJaSelecionada = document.querySelector('.selecionado');
  if (tarefaJaSelecionada !== null) {
    tarefaJaSelecionada.classList.remove('selecionado');
  }
  evento.target.classList.add('selecionado');
}

const lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', colocaFundoCinza);

function colocaTiraRisco(event) {
  const evento = event;
  if ((evento.target.classList.value).includes('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}

lista.addEventListener('dblclick', colocaTiraRisco);

function esvaziaLista() {
  const lista = document.getElementById('lista-tarefas');
  while (lista.firstChild) { // esvazia a tabela, tirado do link https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    lista.removeChild(lista.lastChild);
  }
}

const botaoLimpa = document.getElementById('apaga-tudo');
botaoLimpa.addEventListener('click', esvaziaLista);

function apagaFinalizados() {
  const finalizados = document.getElementsByClassName('completed');
  while (finalizados[0]) { // https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
    finalizados[0].parentNode.removeChild(finalizados[0]);
  }
}

const botaoLimpaFinalizados = document.getElementById('remover-finalizados');
botaoLimpaFinalizados.addEventListener('click', apagaFinalizados);
