import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const product = document.querySelector('.products');

const loading = () => {
  const inner = document.createElement('p');
  inner.className = 'loading';
  inner.innerHTML = 'carregando...';
  product.appendChild(inner);

  return inner;
};
const loading2 = () => {
  const inner = document.createElement('p');
  inner.className = 'error ';
  inner.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  product.appendChild(inner);

  return inner;
};
const creatImg = async () => {
  loading();
  try {
    const lista = await fetchProductsList('computador');
    lista.forEach((element) => {
      const criarElemento = createProductElement(element);
      product.appendChild(criarElemento);
    });
    document.querySelector('.loading').remove();
  } catch (erro) {
    return loading2();
  }
};

creatImg();
document.querySelector('.cep-button').addEventListener('click', searchCep);
