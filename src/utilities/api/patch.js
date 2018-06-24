export function PATCH(path, obj) {
  const request = new Request(
    `http://localhost:3001/${path}/${obj.id}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(obj)
    }
  )

  return fetch(request)
    .then(response => response.json())
}
