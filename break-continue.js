const products = [
    {name: 'samsung note 20', price: 120000},
    {name: 'apple iphone 11', price: 80000},
    {name: 'oneplus 6t', price: 50000},
    {name: 'xiaomi note 10', price: 21000},
    {name: 'poco phone', price: 32000},
    {name: 'apple macbook pro laptop', price: 150000},
    {name: 'google pixel 4a', price: 42000},
    {name: 'nokia n70', price: 8000},
    {name: 'nokia 5800', price: 12000},
    {name: 'sumsung galaxy fold z3', price: 90000},
    {name: 'microsof surface laptop', price: 140000},
    {name: 'google pixel 5', price: 70000},
    {name: 'xiaomi mix 4', price: 32000},
    {name: 'apple se', price: 40000},
    {name: 'dell inspiron laptop', price: 70000},
    {name: 'lenovo ideapad laptop', price: 90000},
    {name: 'razer keyboard', price: 5000},
    {name: 'logitech mouse', price: 3000},
];


/* //break
for ( const item of products ) {
    if ( item.price <= 10000 ) {
        break;
    }
    console.log( item );
} */


//continue

for ( const item of products ) {
    if ( item.price < 10000 || item.price > 100000 ) {
        continue;
    }
    console.log( item );
}