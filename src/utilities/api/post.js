export function POST(path, obj) {
  const request = new Request(
    `http://localhost:3001/${path}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(obj)
    }
  )

  return fetch(request)
    .then(response => response.json())
}