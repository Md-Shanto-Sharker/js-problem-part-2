const mobiles = [
    {name:'Samsung',prices:20000,camera:'12mp', color:'black'},
    {name:'xiaomi',prices:18000,camera:'12mp', color:'black'},
    {name:'Iphone',prices:30000,camera:'12mp', color:'black'},
    {name:'Walton',prices:100000,camera:'12mp', color:'black'},
    {name:'HTC',prices:27000,camera:'12mp', color:'black'}
];

function cheapest(mobiles){
 let min=mobiles[0];
 for(let i of mobiles){
    if(i.prices<min.prices){
        min=i
    }
}
return min
}
const result = cheapest(mobiles);
console.log(result);