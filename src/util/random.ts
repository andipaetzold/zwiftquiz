export function randomItem<T>(array: ReadonlyArray<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}
