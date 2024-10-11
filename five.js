//TASK 1

const check =(n) =>{
    if(n%2===0){
        return "even"
}else{
return "odd"
}
}

let n;
n=  prompt("Enter the number:", n);
console.log(check(n));  // Output: even


//TASK 2
const square =(no) =>(no*no)

let no;
no = prompt("Enter the num",no)
console.log(square(no)) 

//TASK 3

const max = (na,nn)=>{
    if(na>nn){
      return na
    }else{
      return nn
    }
  }
  
  let na;
  let nn;
  
  na = parseFloat(prompt("Enter the first number ",na))
  nn = parseFloat(prompt("Enter the second number ",nn))
  
  
  console.log(max(na,nn))
//TASK 4
  const con =(A,B) =>(A+" "+B)

  let A;
  let b;
  A = prompt("Enter the first string: ",A)
  b = prompt("Enter the second string: ",b)

  console.log(con(A,b))
//TASK 5
  const sum = (num1,num2) =>(num1+num2)

  console.log(sum(5,5))


//***************************************************/
//TASK 6  
const containsChar = (str, char) => str.includes(char);

// Example usage
console.log(containsChar("hello", "e"));  // true
console.log(containsChar("hello", "z"));  // false
//*******************important note****************************


//***************************************************/
//TASK 7

const multiply = (a, b = 1) => a * b;

// Example usage
console.log(multiply(5, 3));   // 15
console.log(multiply(7));      // 7 (since b defaults to 1)
//*******************important note****************************

//TASK 8
const greet = (name, b =22)=>(`Welcome ${name} of age ${b}`)
console.log(greet("muskaan"))

//TASK 9
const repeatFunction = (fn, times) => {
    for (let i = 0; i < times; i++) {
      fn();
    }
  };
  
  // Example usage:
  const sayHello = () => console.log("Hello!");
  
  repeatFunction(sayHello, 3);   // Calls sayHello() 3 times
  

  //TASK 10
  const applyFunctions = (fn1, fn2, value) => fn2(fn1(value));

// Example usage:
const double = (x) => x * 2;
const squares = (x) => x * x;

console.log(applyFunctions(double, squares, 5)); 

// First doubles 5 to 10, then squares 10 to 100






