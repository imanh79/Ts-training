// readonly
// برای  ثابت کردن متغیر و پراپرتی استفاده میشود
const weekdays: readonly string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
// weekdays.push('Saturday'); // Error: Property 'push' does not exist on type 'readonly string[]'.
// weekdays[0] = 'Sunday'; // Error: Index signature in type 'readonly string[]' only permits reading.

// exam2
interface Person {
  readonly id: number;
  name: string;
  age: number;
}

export function displayPersonInfo(person: Person) {
  console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}`);
}

export const person1: Person = { id: 1, name: "John Doe", age: 30 };
displayPersonInfo(person1);
// person1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
