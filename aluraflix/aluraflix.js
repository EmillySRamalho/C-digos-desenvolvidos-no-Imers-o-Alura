var listaFilmes = [];

listaFilmes[0] =
  "https://br.web.img3.acsta.net/c_310_420/pictures/210/240/21024041_20130801213133393.jpg";
listaFilmes[1] =
  "https://br.web.img2.acsta.net/pictures/210/302/21030262_20130822202929893.jpg";
listaFilmes[2] =
  "https://upload.wikimedia.org/wikipedia/pt/thumb/f/fa/Wild_child_poster.jpg/200px-Wild_child_poster.jpg";
listaFilmes[3] =
  "https://http2.mlstatic.com/D_NQ_NP_632270-MLB53353339320_012023-O.webp";

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src =" + listaFilmes[i] + ">");
}