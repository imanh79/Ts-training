// literal type
type Color = "red" | "green" | "blue";

export function showMessage(message: string, color: Color = "blue") {
  console.log(`%c${message}`, `color: ${color}`);
}
showMessage("Hello World", "green");
