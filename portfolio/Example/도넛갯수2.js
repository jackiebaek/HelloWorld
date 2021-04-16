donut = 21;

result = 0;

if ( donut%5 == 0){
    result = parseInt(donut/5);
} else {
    while(1){
        donut -= 3;
        result +=1;
        if (donut%5 == 0){
            result += parseInt(donut/5);
            break;
        } else if(donut <= 2){
            result = -1;
        }
    }
}

console.log(result);


