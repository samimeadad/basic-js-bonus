/* Fibonacci Series
0 1 1 2 3 5 8 13 21 34 55 89 144 ... ... ...
2th = 1th + 0th
3th = 2th + 1th
4th = 3th + 2th
...
...
...
nth = (nth - 1) + (nth - 2) */

// const fibo = [ 0, 1 ];
// for (let i = 2; i <= 6; i++) {
//     /*  fibo[ 2 ] = fibo[ 1 ] + fibo[ 0 ];
//         fibo[ 3 ] = fibo[ 2 ] + fibo[ 1 ];
//         fibo[ 4 ] = fibo[ 3 ] + fibo[ 2 ];
//         fibo[ 5 ] = fibo[ 4 ] + fibo[ 3 ];
//         fibo[ 6 ] = fibo[ 5 ] + fibo[ 4 ];
//         fibo[ i ] = fibo[ i - 1 ] + fibo[ i - 2 ]; */
//     fibo[ i ] = fibo[ i - 1 ] + fibo[ i - 2 ];
// }
// console.log(fibo);


function getFibonacci( n )
{
    if ( n == 0 ) {
        return 0;
    }
    else if ( n == 1 ) {
        return 1;
    }
    else {
        return getFibonacci( n - 1 ) + getFibonacci( n - 2 );
    }
}

console.log( getFibonacci( 8 ) );

