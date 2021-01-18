function tong1N(n) {
    var sum = 0;
    for (let i = 1; i<= n; i++) {
        sum = sum + i ;
    }
    return ` tổng từ 1 đến ${n} là: ` + sum;
}

function tongADenB(a,b) {
    var sum=0;
    for(let i = a ; i<= b ;i++){
        sum = sum+ i;
    }
    return `Tổng từ ${a} đến ${b} là: ` + sum;
}

function tongLe(a,b) {
    var sum =0;
    for (let i = a; i <= b; i++) {
       if(i%2 != 0){
           sum += i;
       } 
    }
    return ` Tổng lẻ từ ${a} đến ${b} là: ` + sum;
}

function mangLe(n) {
    var list = [];
    var i = 0;
    while (list.length < n) {
        if(i %2 != 0){
            list.push(i);
        }
        i++;
    }
    return ` mảng ${n} số lẻ nhỏ nhất là: ` + list;
}

function mangLeTuN(a,b) {
    var list = [];
    while (list.length < a) {
        if(b%2 !=0){
            list.push(b);
        }
        b++;
    }
    return  ` mảng ${a} số lẻ bắt đầu từ ${b} là: `+  list;
}