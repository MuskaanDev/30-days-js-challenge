let nnum;
let num;
nnum = prompt("Enter your number", nnum);
num = prompt("Enter your number", num);

// Convert the prompt input to numbers
nnum = Number(nnum);
num = Number(num);

console.table([num + nnum, num - nnum, num * nnum, num / nnum, num % nnum]);

num += 8;
console.log(num);
nnum -= 8;
console.log(nnum);

console.table([num > nnum, num < nnum, num >= nnum, num <= nnum, num == nnum, num === nnum]);

if(num > nnum && num!=nnum){
   console.log(num, nnum); // Use comma to print both values
} else if(num < nnum || num != nnum){
    console.log("hello");
}

num=5?console.log("hi"):console.log("bye")//ternary operator---a ? b : c evaluates to b if the value of a is true, and otherwise to c 
