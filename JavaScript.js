const inputnome = document.querySelector('#inputnome');
const inputpreco = document.querySelector('#inputpreco');
const inputingredientes = document.querySelector('#inputingredientes');
const btnadicionar = document.querySelector('#btnadicionar');
const ulcardapio = document.querySelector('#ulcardapio');
const inputbusca = document.querySelector('#inputbusca');

const prato={
    nome: "",
    preco: 0,
    ingredientes: []
}

const pratoscardapio = [];

btnadicionar.addEventListener("click", () => {
    let novoprato = Object.create(prato);
    novoprato.nome = inputnome.value;
    novoprato.preco = inputpreco.value;
    let ingredientes = inputingredientes.value;
    ingredientes = ingredientes.split(",");
    ingredientes = ingredientes.map((ingredientes) => ingredientes.trim());
    novoprato.ingredientes = ingredientes;
    pratoscardapio.push(novoprato);
    localStorage.setItem("pratos", JSON.stringify(pratoscardapio));
    inputnome.value = '';
    inputpreco.value = '';
    inputingredientes.value = '';
    adicionar();

});

buscaLocalStorage = () => {
  let localStoragee = JSON.parse(localStorage.getItem("pratos"));
  if (localStoragee != null) {
    localStoragee.forEach((element) => {
      pratoscardapio.push(element);
    });
  }
  adicionar();
}
buscaLocalStorage();

function adicionar(){
      pratoscardapio.forEach((item) => {
        let li = document.createElement('li');
        let br = document.createElement('br');
        ulcardapio.appendChild(br);
        li.innerHTML = item.nome + "<br>" + "Preço: R$ " + item.preco + "<br>"+ "Ingredientes: " + item.ingredientes + "." + "<br>";
        ulcardapio.appendChild(li);
    })


}

inputbusca.addEventListener("keyup", (event) => {
  console.log(event.target.value);
 buscaCardapio(event.target.value);
});

buscaCardapio = (inputbusca) => {
  inputbusca = inputbusca.toUpperCase();
  let pratos = document.querySelectorAll("li");
  pratos.forEach(element => {
    let texto = element.textContent.toUpperCase();
    if(texto.indexOf(inputbusca) < "0"){
      element.style = "display: none;";
    } else {
      element.style = "display: flex";
    }
  });
}