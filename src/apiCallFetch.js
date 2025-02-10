const fetchApi = async () => {
  const result = await fetch("https://fakestoreapi.com/products");
  return result;
};

module.exports = fetchApi;
