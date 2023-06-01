export const makeArray = (length: number) => new Array(length).fill(null);
// undefined로 채워진 배열은 map을 실행할 수 없다.
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min);
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
