// اینترفیس ها این امکان رو به ما می دهند تا تایپ دلخواه را تعریف کنیم
// و مثل انانیموس تایپ ها یا حتی بیشتر از آن ها ازشون استفاده میشه

interface InterfacePerson {
  firstName: string;
  age: number;
}

function newUser(person: InterfacePerson) {
  console.log(person);
}

const user: InterfacePerson = { firstName: "iman", age: 24 };
newUser(user);

// مثال در پروژه های واقعی
import axios from "axios";

interface HttpRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: { [key: string]: string };
  body?: any;
}

export async function fetchTodos(): Promise<void> {
  try {
    const request: HttpRequest = {
      url: "https://jsonplaceholder.typicode.com/todos/",
      method: "GET",
    };

    const response = await axios(request);
    const todos = response.data;
    console.log("Todos:", todos);
    return todos;
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw error;
  }
}
