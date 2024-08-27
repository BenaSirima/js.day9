// let friend1 = {
//   fname: 'Phongphat',
//   lname: 'Japhichom',
//   nickName: 'Tam',
//   sayHi() {
//     console.log(`Hello ${this.fname} ${this.lname} nicknam : ${this.nickName}`)
//   }
// }
// let friend2 = {
//   fname: 'Phongphat',
//   lname: 'Japhichom',
//   nickName: 'Tam',
//   sayHi() {
//     console.log(`Hello ${this.fname} ${this.lname} nicknam : ${this.nickName}`)
//   }
// }
// let friend3 = {
//   fname: 'Phongphat',
//   lname: 'Japhichom',
//   nickName: 'Tam',
//   sayHi() {
//     console.log(`Hello ${this.fname} ${this.lname} nicknam : ${this.nickName}`)
//   }
// }

// friend1.sayHi()



// class User {
//   constructor(_name) {
//     this.name = _name
//   }
//   sayHi() {
//     console.log(`Hello ${this.name}`)
//   }
// }


// let user = new User('Tam')
// user.sayHi()



// let user2 = new User('PHongphat')
// user2.sayHi()



// class User {
//   login() {
//     console.log('User Login')
//   }
// }

// class Admin extends User {
//   updatePrice() {
//     console.log('admin update price')
//   }
//   login(){
//     console.log('Admin Login.....')
//   }
// }


// let admin1 = new Admin()
// admin1.login()
// admin1.updatePrice()


// Lab 1
// class Calculator {
//   constructor(_init = 0) {
//     this.value = _init
//   }
//   add(num) {
//     this.value += num
//     return this.value
//   }
//   sub(num) {
//     this.value -= num
//     return this.value
//   }
//   multi(num) {
//     this.value *= num
//     return this.value
//   }
//   divide(num) {
//     this.value /= num
//     return this.value
//   }
//   show() {
//     console.log(`Value = ${this.value}`)
//   }
// }
// let result = new Calculator(10)
// result.show()
// console.log(result.add(50))
// console.log(result.multi(50))
// console.log(result.divide(50))

//Lab2
// class Sale {
//   constructor(_name, _amount, _price) {
//     this.name = _name;
//     this.amount = _amount;
//     this.price = _price;
//   }
//    calcPrice() {
//    return this.amount * this.price;
//   }
// }
// class Beverage extends Sale {
//   constructor(name, amount, price) {
//     super(name, amount, price);
//   }
// }
// let result = new Beverage('Pepsi', 3, 19);
// console.log(result);

//Array.isArray
// let arr = [1, 2, 2, 3]
// let obj = {
// name: 'Bena'
// }
// let checkArr = (arr) => {
//   return Array.isArray(arr)
// }
// let result = checkArr(arr)
// let result2 = checkArr(obj)
// console.log(result)
// console.log(result2)

//Lab1
// let user = {
//   name: 'John',
//   age: 27
// }
// for (let key of Object.keys(user)) {
//   console.log(key)
// }
// console.log('------------------')
// for (let value of Object.values(user)) {
//   console.log(value)
// }
// console.log('-------------------')
// for (let pair of Object.entries(user)) {
//   console.log(pair)
//}

//Object.keys, values, entries
// let user = {
// name: 'John',
// age: 27
// };
// console.log(Object.keys(user)); 
// console.log(Object.values(user)); 
// console.log(Object.entries(user)); 

//Lab1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let keys = Object.keys(salaries)
// console.log(keys)
// let sumSalaries = keys.reduce((prev, curr) => {
//   return prev += salaries[curr]
// }, 0)
// console.log(sumSalaries)

//Lab2

//rest parameter
// let func = (...rest) => {
// console.log(rest[0])
// console.log(rest[1])
// console.log(rest[2])
// console.log(rest[3])
// }

// func(1, 'Hello', 'Codecamp', 4, 5, 6, 7, 8, 9)
// function showName(firstName, lastName, ...titles) {
// console.log(firstName + ' ' + lastName); // Julius Caesar​
// console.log(titles[0]); // Consul​
// console.log(titles[1]); // Imperator​
// console.log(titles.length);
// }
// showName('Julius', 'Caesar', 'Consul', 'Imperator');

// func('tam',3,4,5,6,7)


// function sum(...args) {
//   let result = 0
//   for (let arg of args) {
//     // console.log(arg)
//     result += arg
//   }
//   return result
// }

// let result = sum(1, 2, 3, 4, 5, 6)
// console.log(result)



// let showName = (fname, lname, ...titles) => {
//   console.log(fname + ' ' + lname)


//   console.log(titles[0])
//   console.log(titles.length)
// }


// showName('Phongphat','Japhichom','Tam')



// let arr = [4, 5, 1]

// console.log(Math.max(3,4,5,7,8,9,0))
// console.log(Math.max(...arr))



// let str = 'hello'

// console.log([...str])


// let num1 = [1, -2, 3, 4]
// let num2 = [8, 3, -8, 1]

// let num3 = [5, ...num1, -6, -1, ...num2]
// console.log(num3)

// let sum = num3.reduce((prev, curr) => {
//   return prev += curr
// }, 0)

// console.log(sum)


// let arr = ['John', 'Doe']

// let [fname, lname] = arr


// console.log(fname)
// console.log(lname)

// console.log(arr)



// let arr = ['John', 'Doe', 27, 'Male', 'Thailand']

// let [fname, , age, , country] = arr


// console.log(fname)
// console.log(country)

// console.log(arr)



// let arr = ['John', 'Erik', 'Michael', 'Joshua']

// let [name1, name2, ...rest] = arr



// console.log(name1)
// console.log(rest.length)

// let arr = ['John','doe']

// let [name = 'Guest', surname = 'Anonymous'] = arr



// console.log(surname)



// let user = {
//   username: 'John',
//   email: 'john@gmail.com',
//   password: '123456'
// }

// let { username, ...rest } = user

// console.log(username)
// console.log(rest)


// let options = {
//   size: {
//     width: 100,
//     height: 300
//   },
//   items: ['Cake', 'Donut'],
//   extra: true
// }


// let {
//   size: {
//     width,
//     height
//   },
//   items: [item1, item2],
//   extra
// } = options

// console.log(width)


// let showName = ({ firstName: f, lastName ='tam'}) => {
//   console.log(f)
//   console.log(lastName)
// }


// let obj = {
//   firstName: 'Phongphat',
//   // lastName: 'Japhichom'
// }
// showName(obj)

// Lab 1
// let calMulti = (...nums) => {
//   let sum = 1
//   for (let num of nums) {
//     console.log(num)
//     sum *= num
//   }
//   return sum
// }
// let result = calMulti(1, 2, 3, 4, 5)
// console.log('--------- Lab 1 -------------')
// console.log(result)

// Lab 2
// let filterOdds = (...nums) => {
//   let odd = nums.filter((item) => {
//     console.log(item)
//     return item % 2 == 0
//   })
//   return odd
// }
// let result = filterOdds(1, 2, 3, 4, 5, 6, 7, 8)
// console.log('----------- Lab 2 ------------')
// console.log(result)

// Lab 3
// let mergeObj = (...obj) => {
//   // console.log(obj)
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//     // console.log(obj[i])
//   }
//   return empty
// }
// let obj1 = {
//   fname: 'phongpaht',
//   lname: 'japhichom'
// }
// let obj2 = {
//   nickName: 'tam'
// }
// let result = mergeObj(obj1, obj2)
// console.log('----------- Lab 3 ------------')
// console.log(result)

// Lab 4
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let num1 = [1, -2, 3, 4]
// let num2 = [8, 3, -8, 1]
// let num3 = [5, ...num1, -6, -1, ...num2]
// console.log(num3)
// let sum = num3.reduce((prev, curr) => {
//   return prev += curr
// }, 0)
// console.log('------- Lab 4 --------')
// console.log(sum)

//Lab5
// let editArr = (arr) => {
//   let newArr = [...arr]
//   console.log(newArr)
//   // if(newArr.length > 3 ){
//   // }
//   newArr[3] = newArr[3] ** 2
//   return newArr
// }
// let arr = [2, 3, 4, 5, 6]
// let result = editArr(arr)
// console.log(arr)
// console.log(result)

// Lab 6
// let handlePerson = (fname, lname, ...hobbies) => {
//   console.log(hobbies)
//   return [fname, lname, ...hobbies]
// }
// let result = handlePerson('Phongphat', 'Japhichom', 'js', 'react', 'nodejs')
// console.log(result)

// Lab 7
// doubleAndReturnArgs([1, 2, 3], 4, 4);
// // expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// // expexted result: [2, 20, 8]
// let doubleArr = (arr, ...num) => {
//   console.log(arr)
//   console.log(num)
//   let doubleArr = num.map((item) => item * 2)
//   console.log(doubleArr)
//   return arr.concat(...doubleArr)
// }

// let result = doubleArr([1, 2, 3], 4, 4, 5, 6, 7)
// console.log(result)

//Lab9
// function cloneArray(arr) {
//   return [...arr];
// }
// const myNumber= [1, 2, 3, 4, 5];
// const clonedArray = cloneArray(myNumber);
// console.log(clonedArray);
// console.log(clonedArray === myNumber);

//Lab10
// function cloneObject(obj) {
//   return { ...obj };
// }

//Lab11
// let[first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first) //Maya
// console.log(second) //Marisa
// console.log(third) //Chi
// //เพราะแยกelement ของarrayไปยังตัวแปรหลายตัวครั้งเดียว

//Lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
// 'Raindrops on roses',
// 'whiskers on kittens',
// 'Bright copper kettles',
// 'warm woolen mittens',
// ];
// console.log(raindrops); //Raindrops on roses
// console.log(whiskers); //whiskers on kittens
// console.log(aFewOfMyFavoriteThings); //array Bright copper kettles,warm woolen mittens 
//เพราะมีการรวบรวมelementที่เหลือไปarrayใหม่ และraindropsมีค่าเป็นRaindrops on roses,whiskersมีค่าเป็นwhiskers on kittens

//Lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [10,30,20] เพราะมีการสลับค่าระหว่างelement

//Lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); //8 เพราะมีการกำหนดค่าให้เป็น8และเป็นkeyของobject
// console.log(yearNeptuneDiscovered); //1846 เพราะมีการกำหนดค่าและเป็นkeyของobject

//Lab15
// let planetFacts = {
// numPlanets: 8,
// yearNeptuneDiscovered: 1846,
// yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); //object yearMarsDiscovered: 1659และyearNeptuneDiscovered: 1846 

//Lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
// return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *​
// getUserData({ firstName: 'Melissa' }); //ไม่แสดงข้อมูล เนื่องจากไม่สามารถกำหนดค่าเป็นundefinedได้
// getUserData({}); //ไม่แสดงข้อมูล เนื่องจากไม่สามารถกำหนดค่าเป็นundefinedได้

//Lab17
// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = [admin, guest]
// console.log(admin, guest);

//Lab18
// function checkAge(user) {
//   const { firstName, lastName, age } = user;
// if (age > 18) {
//   console.log(`Hello ${firstName} ${lastName}`);
//   } else {
//     console.log('No access');
//   }
// }
// const user1 = { firstName: 'bena', lastName: 'sirima', age: 25 };
// const user2 = { firstName: 'furball', lastName: 'thecat', age: 12 };
// checkAge(user1); 
// checkAge(user2); 

//Lab19
// let user = {
//   name: 'John',
//   years: 27
// };
// const { name, years: age, isAdmin = false } = user;
// console.log(name, age, isAdmin);

//Lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// const [a, [b, [[[c, d], e], f]]] = arr;
// console.log(a, b, c, d, e,); 

//Lab22
// const myNumber = { prop: 5, prop2: 10 };
// const { prop: a, prop2: b } = myNumber;
// console.log(a);

// console.log(b);

//Lab23
// let a, b;
// { a, b } = { a: 1, b: 2 };
// console.log(a, b) //error

//Lab24
// const [, , , a, b] = [1, 2, 3];
// console.log(a, b) //underfined, underfined

//Lab25
// const q = { prop: 5, prop2: [10, 100] };
// const { prop: x, prop2: [, y] } = q;

// console.log(x, y); 

//Lab26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// const { prop: x, prop2: { prop2: { nested: [, y] } } } = q;
// console.log(x);
// console.log(y); 

//Lab27
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];
// for (const { firstName, lastName } of names) {
//   console.log(`Full name: ${firstName} ${lastName}`);
// }

//Lab28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (const { user, age = 'unknown' } of users) {
//   console.log(`User: ${user}, Age: ${age}`);
// }