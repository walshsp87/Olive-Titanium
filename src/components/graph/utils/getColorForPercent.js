export const getColorForPercent = (percent) => {
  if (percent <= 33) {
    return '#5cb85c' // green
  } else if (percent <= 64) {
    return '#5bc0de' // blue
  } else if (percent < 100) {
    return '#f0ad4e' // amber
  } else {
    return '#d9534f' // red
  }
}
