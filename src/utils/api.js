const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function addItems({ clothName, imageLink, weatherType }) {
  console.log({ clothName, imageLink, weatherType });
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      clothName,
      imageLink,
      weatherType,
    }),
  });
}

function deleteItems(cardID) {
  return fetch(`${this._baseUrl}/items/${cardID}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
  });
}

export { getItems, addItems, deleteItems };
