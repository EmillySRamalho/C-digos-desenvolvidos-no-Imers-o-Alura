var ellen = {
    nome: "Ellen",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var Emilly = {
    nome: "Emilly",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var Rebeca = {
    nome: "Rebeca",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  // Atribuindo o elemento do DOM a uma variável
  
  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();
  function exibirNaTela() {
    elementoTabela.innerHTML = `<tr>
            <td>${ellen.nome}</td>
            <td>${ellen.vitoria}</td>
            <td>${ellen.empate}</td>
            <td>${ellen.derrota}</td>
            <td>${ellen.pontos}</td>
            <td><button onClick="adicionarVitoria(ellen)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(ellen)">Empate</button></td>
            <td><button onClick="adicionarDerrota(ellen)">Derrota</button></td>
          </tr>`;
  }
  
  function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
  }
  function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
  }
  function adicionarDerrota(jogador) {
    jogador.derrota++;
    exibirNaTela();
  }