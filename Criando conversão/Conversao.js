var valorEmBitcoin = 64;
var cotacaoDoBitcoin = 178.484;
var nome = "Emilly";

var valorEmReal = valorEmBitcoin * cotacaoDoBitcoin;
valorEmReal = valorEmReal.toFixed(2);

alert("Olá " + nome + "," + " o valor do Bitcoin está " + " R$ " + valorEmReal);
