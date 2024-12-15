export function binarySearch(arr: number[], num: number): number;

export function binarySearch(arr: number[], num: number, left?: number, right?: number): number;

export function binarySearch(arr: number[], num: number, left: number = 0, right: number = arr.length - 1): number {
  if(left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if(num < arr[mid]) {
    return binarySearch(arr, num, left, mid - 1);
  }

  if(num > arr[mid]) {
    return binarySearch(arr, num, mid + 1, right);
  }

  return mid;
}
