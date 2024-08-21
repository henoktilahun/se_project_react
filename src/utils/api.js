const baseUrl = 'http://localhost:3001';

function getItems() {
    return fetch(`${baseUrl}/items`).then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    })
}

addItems({name, link}) {
    return fetch(`${this._baseUrl}/items/${cardID}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
       },
       ody: JSON.stringify({
        name,
        link,
      }),
    });
  }

deleteItems(cardID) {
    return fetch(`${this._baseUrl}/items/${cardID}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
       },
    });
  }

export {getItems}