
export async function getShippingAddress(userId) {
  return fetch("api/address/" + userId).then((response) => {
    if (response.ok) return response.json();
    throw response;
  });
}

export async function saveShippingAddress(address) {
  return fetch("api/address", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(address),
  });
}
