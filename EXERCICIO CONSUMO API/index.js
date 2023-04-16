const campoEndereco = document.getElementById('campoEndereco');
const inputCEP = document.getElementById('inputCEP');
const btSearch = document.getElementById('btSearch');
const btDelete = document.getElementById('btDelete');

const endereco = {};
const enderecos = [];

let url = "https://viacep.com.br/ws/";

const handlerRenderList = (endereco) => {

  let cepDigitado = endereco.cep;

  for(cep of enderecos) {
    if(cepDigitado === cep.cep) {
      alert('Endereço já cadastrado!');
      return getEndereco;
    }
  }

  if(endereco.erro) {
    alert('Encontramos problemas ao buscar o CEP! \nDigite novamente.');
    return getEndereco;
  }

  enderecos.push(endereco);

  inputCEP.value = "";
  campoEndereco.innerHTML = "";

  for (end of enderecos) {

    const linha = document.createElement('tr');
    const campoCep = document.createElement('td');
    const campoLogradouro = document.createElement('td');
    const campoLocalidade = document.createElement('td');
    const campoBairro = document.createElement('td');
    const campoUf = document.createElement('td');

    campoCep.innerHTML = end.cep;
    campoLogradouro.innerHTML = end.logradouro;
    campoBairro.innerHTML = end.bairro;
    campoLocalidade.innerHTML = end.localidade;
    campoUf.innerHTML = end.uf;

    linha.appendChild(campoCep);
    linha.appendChild(campoLogradouro);
    linha.appendChild(campoBairro);
    linha.appendChild(campoLocalidade);
    linha.appendChild(campoUf);

    campoEndereco.appendChild(linha);
  }

}

const getEndereco = () => {

  fetch(`${url}/${inputCEP.value}/json`)
    .then((res) => res.json())
    .then((data) => {
      handlerRenderList(data);
    })
    .catch(() => {
      alert('Encontramos problemas ao buscar o CEP! \nDigite novamente.');
      return;
    })

};

const deleteEnderecos = () => {
  campoEndereco.innerHTML = '';
  enderecos.length = 0;
  inputCEP.value = "";
}

btSearch.onclick = getEndereco;
btDelete.onclick = deleteEnderecos;


