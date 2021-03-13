console.log("hello world");
console.error("this is aan error");
console.warn("this is a warning");

// variables
let score = 30;
const age = 30;
console.log(score);

// type of data
const name = "john";
const age = 30;
const isCool = true;
const x = null;
const y = undefined;
console.log(typeof name);

// concatenation
console.log("may name is " + name + "and my age is " + age);

// template string
console.log(`my name is ${name} and my age is ${age}`);

// strings
const s = "hello world";
console.log(s.length);
console.log(s.toLowerCase);
console.log(s.toUpperCase);
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase);

const s = "technology, computer, it, code";
console.log(s.split(","));

// arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ["apple", "orange", "pear"];
fruits[3] = "grape";
fruits.push("mango");
fruits.unshift("strawberries");
fruits.pop();
console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("orange"));

// objects
const person = {
  firstName : "john",
  lastName : "doe",
  age : 30,
  hobbies : ["music", "movies", "sports"],
  address : {
    street : "50 main street",
    city : "boston",
    state : "MA"
  }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

person.email = "john@gmail.com";

const todos = [
  {
    id: 1,
    text: "take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "meeting with boos",
    isCompleted: true
  },
  {
    id: 3,
    text: "dentist appt",
    isCompleted: false
  },
]
console.log(todos);
console.log(todos[1]);

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// for
for(let i = 0; i < 10; i ++){
  console.log(i);
}
for(let i = 0; i < todos.length; i ++){
  console.log(todos[i].text);
}
for(let todo of todos) {
  console.log(todo.text);
}

// while
let i = 0;
while(i < 10){
  console.log(i);
  i++;
}

// forEech, map, filter
todos.forEach(function(todo) {
  console.log(todo.text);
});

const todoText = todos.map(function(todo) {
  return todo.text;
});
console.log(todo.text);

const todoCompeleted = todos.filter(function(todo) {
  return todo.isCompeleted === true;
}).map(function(todo) {
  return todo.text;
});
console.log(todo.Compeleted);

const x = 10;
if (x === 10) {
  console.log("x is 10");
} else {
  console.log("x is not 10");
};

if (x === 10) {
  console.log("x is 10");
} else if(x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
};

const color = x > 10 ? "red" : "blue";

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue:":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
};

// functions
function aadNum(num1=1, num2=1) {
  console.log(num1 + num2);
}
addNum(2,5);

const aadNum = (num1=1, num2=1) => console.log(num1 + num2);
const aadNum = (num1=1, num2=1) => num1 + num2;
console.log(aadNum(2,5));


// constructor functions
function Person(firstNmae, lastName, dob) {
  this.firstName = firstNmae;
  this.lastName = lastName;
  this.dob = new date(dob);
}
Person.prototype.getFullName =   this.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// class
class Person{
  constructor(firstNmae, lastName, dob) {
    this.firstName = firstNmae;
    this.lastName = lastName;
    this.dob = new date(dob);
  }
  getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
}
 // instantiate object
 const person1 = new Person("john", "doe", "4-3-1988");
 const person2 = new Person("marry", "smith", "3-6-1978");

 console.log(person2.firstName);
 console.log(person2.dob.getFulYear);
 console.log(person1.getFullName);

 // single element selection
  console.log(document.getElementById("my-form"));
  console.log(document.querySelector("#my-form"));

 // multiple element selection
 console.log(document.querySelectorAll(".item"));
 console.log(document.getElementsByTagName("li"));


 const items = document.querySelector(".item");
items.forEach((item) => console.log(item));


const ul = document.querySelector(".item")
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "hello";
ul.children[1].innerText = "brad";
ul.lastElementChild.innerHTML = "<h4>hello</h4>";

const btn = document.querySelector(".btn");
btn.style.bachground = "red";


btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  document.querySelector("#my-form").style.bachground = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<h1>hello</h1>";
});

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add("error");
    msg.innerHTML = "please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    console.log("success");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild("li");
    nameInput.value = "";
    emailInput.value = "";
  }
}