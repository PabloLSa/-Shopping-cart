export const fetchProduct = async () => {
  // seu código aqui
};

export const fetchProductsList = async (produto) => {
  if (!produto) {
    throw new Error('Termo de busca não informado');
  }
  const listProdutos = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`);
  const produtoList = await listProdutos.json();
  return produtoList.results;
};
