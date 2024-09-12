//1

for(let i=0;i<11;i++){
    console.log(i);
}

//2
for(let i=1;i<11;i++){
let a = i*5;
console.log(a);
}

//3
let i=1;
let sum =0;
while(i<11){
 sum+=i;
 i++;
}
console.log(sum);

//4
let j =10
while(j>0){
    console.log(j);
    j--;
}
//5
let a =1;
do{
    console.log(a);
    a++;
}while(a<6)

    //6
    let n = prompt("Enter a number:");  // take input from the user
n = parseInt(n);  // ensure the input is converted to an integer

let factorial = 1;

do {
    factorial *= n;  // multiply the current value of n
    n--;  // decrement n
} while (n > 0);

console.log(factorial);

//8
for(let d=1;d<11;d++){
    console.log(d)
    if(d==5){
        continue;
    }
}
