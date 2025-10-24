let slc1 = parseInt(document.getElementById('slc1').value);
let slc2 = parseInt(document.getElementById('slc2').value);
let slc3 = parseInt(document.getElementById('slc3').value);
let slc4 = parseInt(document.getElementById('slc4').value);

let slm1 = parseInt(document.getElementById('slm1').value);
let slm2 = parseInt(document.getElementById('slm2').value);
let slm3 = parseInt(document.getElementById('slm3').value);
let slm4 = parseInt(document.getElementById('slm4').value);

let gia1 = parseFloat(document.getElementById('gia1').value.replace('$', ''));
let gia2 = parseFloat(document.getElementById('gia2').value.replace('$', ''));
let gia3 = parseFloat(document.getElementById('gia3').value.replace('$', ''));
let gia4 = parseFloat(document.getElementById('gia4').value.replace('$', ''));

let sel1 = 0; let sel2 = 0; let sel3 = 0; let sel4 = 0; let vat = 0;

const checkslm1 = document.getElementById('slm1');
checkslm1.addEventListener('change', () => {
    slm1 = parseInt(document.getElementById('slm1').value);
});
const checkslm2 = document.getElementById('slm2');
checkslm2.addEventListener('change', () => {
    slm2 = parseInt(document.getElementById('slm2').value);
});
const checkslm3 = document.getElementById('slm3');
checkslm3.addEventListener('change', () => {
    slm3 = parseInt(document.getElementById('slm3').value);
});
const checkslm4 = document.getElementById('slm4');
checkslm4.addEventListener('change', () => {
    slm4 = parseInt(document.getElementById('slm4').value);
});

const checkvat = document.getElementById('vat');
checkvat.addEventListener('change', function() {
    if (this.checked){
        vat = 0.05*( sel1* slm1 * gia1 + sel2* slm2 * gia2 + sel3* slm3 * gia3 + sel4* slm4 * gia4 );
    } else {
        vat = 0;
    }
});

const check1 = document.querySelector("input[id=select1]");
check1.addEventListener('change', function() {
    if (this.checked){
        sel1 = 1;
        console.log(sel1);
    }
    else{
        sel1 = 0;
    }
});
const check2 = document.querySelector("input[id=select2]");
check2.addEventListener('change', function() {
    if (this.checked){
        sel2 = 1;
        console.log(sel2);
    }
    else{
        sel2 = 0;
    }
});
const check3 = document.querySelector("input[id=select3]");
check3.addEventListener('change', function() {
    if (this.checked){
        sel3 = 1;
        console.log(sel3);
    }
    else{
        sel3 = 0;
    }
});
const check4 = document.querySelector("input[id=select4]");
check4.addEventListener('change', function() {
    if (this.checked){
        sel4 = 1;
        console.log(sel4);
    }
    else{
        sel4 = 0;
    }
});

let tong = 0;
function tongbill(){
    if(slm1 <0 || slm2 <0 || slm3 <0 || slm4 <0){
        alert('Vui lòng không chọn số âm trong mục số lượng mua!')
    }
    else if (slm1 <=slc1 && slm2 <=slc2 && slm3 <=slc3 && slm4 <=slc4 ){
        tong = (sel1 * slm1 * gia1 + sel2 * slm2 * gia2 + sel3 * slm3 * gia3 + sel4 * slm4 * gia4) + vat;
        document.getElementById('tong').value = tong;
    }
    
    else{
        alert('Số lượng mua không được vượt quá số lượng hàng đang có!');
    }
}