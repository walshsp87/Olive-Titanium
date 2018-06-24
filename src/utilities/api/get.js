export function GET(path, id = '') {
  const idString = id ? `/${id}` : ''
  const request = new Request(
    `http://localhost:3001/${path}${idString}`,
    { method: 'GET'},
  )
  
  return fetch(request)
    .then((response) => response.json())
}