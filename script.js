function limparInput() {
  document.getElementById('texto-tarefa').value = '';
}

function adicionaTarefa() {
  let tarefa = document.getElementById('texto-tarefa').value;
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
