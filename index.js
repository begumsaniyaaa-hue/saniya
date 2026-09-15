let full_name = "Saniya";
let age = 18;
let price = 120;
let city = "Dibrugarh";

console.log("full_name");
console.log("full_name: " + full_name);
console.log(full_name);

console.log("age");
console.log("age: " + age);
console.log(age);

console.log("Price: " + price);
console.log("City: " + city);

function getResult(mark, passMark = 40) {
  if (mark >= 80) {
    return "A";
  } else if (mark >= 60) {
    return "B";
  } else if (mark >= passMark) {
    return "C";
  } else {
    return "F";
  }
}

console.log(getResult(85)); 
console.log(getResult(70)); 
console.log(getResult(45)); 
console.log(getResult(30)); 