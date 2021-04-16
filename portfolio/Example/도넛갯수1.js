let item = 0;
let boxItem = 0;
let flag = true;
let result;

function boxCount(n){
    item = n;
    if(item%5 == 0){ 
        result = (item/5) + boxItem;
        flag = false;
    } else if(item <= 0) {
        result = -1;
        flag = false;
    }
    item -= 3;
    boxItem++;
    if (flag) boxCount(item);
    return result;
}

result = boxCount(101);
console.log(result);



