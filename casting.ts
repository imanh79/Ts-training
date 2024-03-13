// به این معناست که ما از پروتوتایپ های یک نوع داده در یک نوع داده ی دیگر استفاده میکنیم
let value1: any = "string";
let value2 = <number>value1;
let value3 = <number[]>value1;
let value4 = value1 as Object;
console.log(value2, typeof value2);
value2.toFixed(); //اینجا نوع از نوع استرینگ هست  اما از پروتوتایپ های عدد استفاده شده
value3.concat(); //اینجا نوع از نوع استرینگ هست  اما از پروتوتایپ های آرایه استفاده شده
value4.constructor(); //اینجا نوع از نوع استرینگ هست  اما از پروتوتایپ های آبجکت استفاده شده
