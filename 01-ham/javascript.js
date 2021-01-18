function tong(a,b) {
    return ` Tổng 2 số ${a} và ${b} là: `+  (a+b);
}

function hieu(a,b) {
    return `Hiệu 2 số ${a} và ${b} là: `+ (a-b);
}

function tich(a,b) {
    return `Tích 2 số ${a} và ${b} là: `+ a*b;
}

function thuong(a,b) {
    if(b==0){
        return "Mẫu khác 0";
    }
    return `Thương 2 số ${a} và ${b} là: `+  a/b;
}

function binhPhuong(a) {
    return  `Bình phương của số ${a} là:` + a*a;
}

function max(a,b) {
    if(a>b){
        return "Số lớn hơn là:" + a;
    }
    return "Số lớn hơn là: " + b;
}

function min(a,b) {
    if(a>b){
        return "Số nhỏ hơn là:" + b;
    }
    return "Số nhỏ hơn là: " + a;
}

function trungBinh(a,b) {
    return `Trung bình cộng của 2 số ${a} và ${b} là: `+ (a+b)/2;
}

function chiaLayDu(a,b) {
    if(b==0){
        return "Mẫu khác 0"
    }
    return ` Số ${a} chia số ${b} dư: `+ a%b;
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
    return `Chu vi hình chữ nhật có cạnh a: ${a} và cạnh b: ${b} là: ` + (a+b)*2;
}

function dienTichChuNhat(a,b) {
    return ` Diện tích hình chữ nhật có cạnh a: ${a} và cạnh b: ${b} là: ` + (a*b);
}

function chuViTron(a) {
    return `Chu vi hình tròn có bán kính ${a} và lấy π = 3.14 là: ` + (2*a*3.14);
}

function dienTichTron(a) {
    return ` Diện tích hình tròn có bán kính ${a} và lấy π = 3.14 là: ` + (3.14 *a*a);
}

var chuoi1 = "Trương";
var chuoi2 = "Minh";
var chuoi3 = "Hiếu";
var chuoi4 = "Cao Đẳng Thực Hành";
var chuoi5 = "Fpt Polytechnic";
var chuoiS = chuoi1+" "+chuoi2+" "+chuoi3+" "+chuoi4+" "+chuoi5;
var chuoiT = chuoi1+chuoi2+chuoi3+chuoi4+chuoi5;

function noiChuoi(a,b) {
    return a +" "+  b;
}

function inHoa(a) {
    return a.toUpperCase() ;
}

function coTonTai(a,b) {
    if(a.includes(b)){
        return `Trong ${a} có tồn tại ${b}`;
    }
    return `Trong ${a} không tồn tại ${b}`;
}

function doDai(a) {
    return ` Độ dài của chuỗi ${a} là: `+a.length ;
}

function catChuoi(a) {
    return` Cắt chuỗi từ(0,3) của chuỗi ${a} là: `+ a.substring(0,3);
}

function tonTai(a,b) {
    if(a.includes(b)){
        return `Trong ${a} có tồn tại ${b}`;
    }
    return `Trong ${a} không tồn tại ${b}`;
}