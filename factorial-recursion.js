//6! = 6 * 5 * 4 * 3 * 2 * 1
/* let fact = 1;
for (let i = 6; i >= 1; i--) {
    fact = fact * i;
}

console.log(fact); */

//With Recursion

/* function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}

console.log(factorial(6)); */


function factorial( n )
{
    if ( n == 6 ) {
        return 6;
    }
    else {
        return factorial( n + 1 ) * n;
    }

}
console.log( factorial( 1 ) );