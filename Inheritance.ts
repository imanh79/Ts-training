// Inheritance => "&"
enum idsport {
  SPORT = "SPORT",
}
type userp = {
  user: string;
  email: string;
};
type usernew = userp & {
  password: idsport;
};
const useuuid: usernew = {
  user: "string",
  email: "string",
  password: idsport.SPORT,
};
console.log(useuuid);
