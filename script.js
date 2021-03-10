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
  console.log(evento.target.classList);
  if ((evento.target.classList.value).includes('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}

lista.addEventListener('dblclick', colocaTiraRisco);
