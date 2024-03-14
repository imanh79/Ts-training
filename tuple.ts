// tuple
// به معنای یک لیست از تایپ های مشخص
let position: [lat: number, long: number] = [43, 54];
let [lat, long] = position;
console.log(lat, long);

///

let book: [name: string, author: string, pages: number, publishcount?: number];
book = ["iman", "ali", 59];
console.log(book);