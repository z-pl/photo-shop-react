export default function getImageSize() {
  const randomInt = Math.floor(Math.random() * 10) + 1;

  if (randomInt >= 1 && randomInt <=4) {
    return "normal"
  }
  else if (randomInt > 4 && randomInt <= 6) {
    return "big"
  }
  else if (randomInt > 6 && randomInt <= 8) {
    return "vertical"
  }
  else {
    return "horizontal"
  }
}
