function findNumber(numbers,target){
    let result="not found";
    for (let i=0; i<numbers.length; i++){
        if(numbers[i]<0){
            continue;
        }
        if (numbers[i]===target){
            result="found";
            break;
        }
    }
    return result;
}
console.log(findNumber([-5,10,-2,7,20],7))