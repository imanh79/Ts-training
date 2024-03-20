// type alias 
// تایپ الیاس ها دقیقا مثل اینترفین ها عمل میکنن با این تفاوت که میتوان آنیون تایپ ها رو در یک تایپ الیاس قرار داد
type UserID = number | string | undefined;
type Username = string;
type Email = string;

type User = {
  id: UserID;
  username: Username;
  email: Email;
};

const user: User = {
  id: "123",
  username: "john_doe",
  email: "john@example.com",
};
