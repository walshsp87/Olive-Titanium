export function DELETE(path, id) {
  const request = new Request(
    `http://localhost:3001/${path}/${id}`,
    { method: 'DELETE'},
  )
  
  return fetch(request)
    .then((response) => response.json())
}