
export async function getProducts(category) {
  const response = await fetch("api/products?category=" + category);
  if (response.ok) return response.json();
  throw response;
}

export async function getProduct(id) {
  const response = await fetch("api/products/" + id);
  if (response.ok) return response.json();
  throw response;
}