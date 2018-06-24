export function zeroPad(str, minLength) {
  if (String(str).length >= minLength) return String(str)
  return zeroPad(`0${str}`, minLength)
}
