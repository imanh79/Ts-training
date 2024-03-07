//Anonymus type
//این نوع تایپ زمانی استفاده میشود که بخواهید نوع داده ای رو برای یک شی در نظر بگیرید و نیازی به تکرار مکرر آن در سراسر کد ندارید
// تعریف یک متغیر شیء ناشناس
let person: { name: string; age: number };

// تخصیص مقادیر به ویژگی‌های متغیر شیء
person = { name: "John", age: 30 };

// چاپ اطلاعات شیء
console.log(person.name); // خروجی: John
console.log(person.age); // خروجی: 30
