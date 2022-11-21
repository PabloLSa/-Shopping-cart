import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

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
window.onload = () => {
  const iDs = getSavedCartIDs();
  const carts = document.querySelector('.cart__products');
  iDs.map(async (produto) => {
    const retornar = await fetchProduct(produto);
    await Promise.all([carts.appendChild(createCartProductElement(retornar))]);
  });
};
creatImg();
document.querySelector('.cep-button').addEventListener('click', searchCep);
