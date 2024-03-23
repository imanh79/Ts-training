// Asconst
// دقیقا مثل readonly کار میکنه
export type users = {
  name: string | number | undefined | null;
  age: number;
  fname: string;
};
export const userinterface: object = {
  name: "iman",
  age: 398,
  fname: "haghi",
} as const;

// userinterface.age = 29; // error as const
console.log(userinterface);

const number = [1, 5, 8] as const;
console.log(number[2]);
