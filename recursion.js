/* let sum = 0;
for (i = 0; i <= 6; i++) {
    sum = sum + i;
}
console.log(sum);

sum = 0;
for (i = 6; i >= 1; i--) {
    sum = sum + i;
}
console.log(sum); */


/* function sum(i) {
    if (i == 1) {
        return 1;
    }
    return sum(i - 1) + i;
}

console.log(sum(6)); */

function sum( i )
{
    if ( i == 6 ) {
        return 6;
    }
    return sum( i + 1 ) + i;
}

console.log( sum( 1 ) );