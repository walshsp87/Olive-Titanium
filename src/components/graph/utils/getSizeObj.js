export const getSizeObj = (size) => (
  size === 'large' ?
    largeSize() : 
    normalSize()
)

function largeSize() {
  return {
    width: 200,
    height: 200,
    cx: 100,
    cy: 100,
    r: 96,
  }
}

function normalSize() {
  return {
    width: 150,
    height: 150,
    cx: 75,
    cy: 75,
    r: 71
  }
}
