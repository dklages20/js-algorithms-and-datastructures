export function linearSearch(arr: number[], num: number): number {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      return i;
    }
  }

  return -1;
}
