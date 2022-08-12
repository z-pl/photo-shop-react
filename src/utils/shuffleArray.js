
export default function shuffleArray(arr) {
  let last = arr.length - 1;
  while (last > 0) {
    let randomInt = Math.floor(Math.random() * (last));
    [arr[last], arr[randomInt]] = [arr[randomInt], arr[last]]
    last--;
  }
  return arr
}
