import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const product = document.querySelector('.products');

const creatImg = async () => {
  const lista = await fetchProductsList('computador');
  lista.forEach((element) => {
    const criarElemento = createProductElement(element);
    product.appendChild(criarElemento);
  });
};
creatImg();
document.querySelector('.cep-button').addEventListener('click', searchCep);
