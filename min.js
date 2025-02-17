
function min(prices){
    let minNumber= prices[0];
    for(let i of prices){
        if(i<minNumber){
            minNumber=i
        }
    }
    return minNumber;
}
const prices = [20000,16000,50000,100000,12000,30000,35000];
const result = min(prices)
console.log(result);