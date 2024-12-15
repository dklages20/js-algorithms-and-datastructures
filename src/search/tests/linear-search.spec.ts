import { linearSearch } from "../linear-search";

describe('linear-search', () => {
  it.each<{arr: number[], search: number, idx: number}>([
    { arr: [0], search: 0, idx: 0},
    { arr: [0, 2, 4, 6], search: 0, idx: 0},
    { arr: [0, 2, 4, 6], search: 2, idx: 1},
    { arr: [0, 2, 4, 6], search: 4, idx: 2},
    { arr: [0, 2, 4, 6], search: 6, idx: 3},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 0, idx: 0},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 1, idx: 1},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 2, idx: 2},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 3, idx: 3},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 4, idx: 4},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 5, idx: 5},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 6, idx: 6},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 7, idx: 7},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 8, idx: 8},
    { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], search: 9, idx: 9},
  ])('finds num $search at index $idx (length = $arr.length)', ({ arr, idx, search }) => {
    expect(linearSearch(arr, search)).toEqual(idx);
  });

  it('returns -1 if num is less than min value', () => {
    expect(linearSearch([0, 1, 2, 3, 4, 5], -10)).toEqual(-1);
  });

  it('returns -1 if num is more than max value', () => {
    expect(linearSearch([0, 1, 2, 3, 4, 5], 10)).toEqual(-1);
  });

  it('returns -1 if num is not in the array', () => {
    expect(linearSearch([1, 3, 5, 6, 7], 2)).toEqual(-1);
  });
});
