function tong(a,b) {
    return a+b;
}

function hieu(a,b) {
    return a-b;
}

function tich(a,b) {
    return a*b;
}

function thuong(a,b) {
    if(b==0){
        return "Mẫu khác 0";
    }
    return a/b;
}

function binhPhuong(a) {
    return a*a;
}

function soSanh2SoLon(a,b) {
    if(a>b){
        return "Số lớn hơn là:" + a;
    }
    return "Số lớn hơn là: " + b;
}

function soSanh2SoNho(a,b) {
    if(a>b){
        return "Số nhỏ hơn là:" + b;
    }
    return "Số nhỏ hơn là: " + a;
}

function tinhTrungBinh(a,b) {
    return (a+b)/2;
}

function chiaLayDu(a,b) {
    if(b==0){
        return "Mẫu khác 0"
    }
    return a%b;
}

function chiaHet(a,b) {
    if(a%b== 0){
        return `Số ${a} chia hết cho số ${b}`
    }if(b%a== 0){
        return `Số ${b} chia hết cho số ${a}`
    }
    return "Không có số nào chia hết cho nhau"
}

function chuViChuNhat(a,b) {
    return `Chu vi hình chữ nhật có cạnh a là ${a} và cạnh b là ${b}: ` + (a+b)*2;
}