console.log(!true)//false

console.log(!false)//True

console.log(!!false)//false

console.log(!!true)//true

console.log(!1)//false

console.log(!!1)//true

console.log(!0) //true

console.log(!!0)//false

console.log(!!"")//false


let x = 5;
let y = 9;

//a
console.log( x < 10 && x !==5)//false

//b
console.log(x>9 || x ===5)//true
//c
console.log(!(x===y))//true


let x1 = 10
let y1 = "a"
console.log( y1=="b" || x1 >= 10) //True

let x2 = 3
let y2 = 8
console.log( !(x2=="3" || x2 === y2) && !(y2 !==8 && x2 <=y2)) //False

let str = ""
let msg= "haha!"
let eBonito ="false"
console.log(!((str || msg) && eBonito)) //false
