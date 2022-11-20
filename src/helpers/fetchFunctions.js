export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }

  const ids = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const idS = await ids.json();
  return idS;
};

export const fetchProductsList = async (produto) => {
  if (!produto) {
    throw new Error('Termo de busca não informado');
  }
  const listProdutos = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`);
  const produtoList = await listProdutos.json();
  return produtoList.results;
};
