/*Part 1*/

let xValue = 5;
while (xValue > 0) {
    console.log(xValue);
    xValue = xValue - 0.5;
}


/*Part 2*/

let yValue = 0;
while (yValue < 100) {
    yValue++;
    if (yValue % 2 != 0){
        console.log(yValue);
    }
}


/*Part 3*/

let n = [6];
aux = [0];
add = [" "];
while(n>0){
    aux += n-1;
    n -= 1;
}
console.log(aux);


/*Part 4*/

let n = 5;
sum = 0;
while(n>0){
    sum += n;
    n -= 1;
}
console.log(sum);