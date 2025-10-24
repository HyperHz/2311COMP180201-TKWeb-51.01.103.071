let list = ["Samsung Galaxy Note 10+","Samsung Galaxy Note 20",
            "Samsung Galaxy Note 20 Ultra","Samsung Galaxy S25 Ultra",
            "Vivo X200 Pro","Vivo X200 Ultra","Xiaomi 15","Xiaomi 15 Pro",
            "Xiaomi 15 Ultra","Xiaomi 17","Xiaomi 17 Pro",
            "iPhone 17","iPhone 17 Air","iPhone 17 Pro Max"];
function show(){
    let s = " ";
    for(let i = 0; i < list.length;i++){
        s = s + (i+1) + ". " + list[i] + "<br>";
    }
    return s;
}
function addsp(){
    let spmoi = document.getElementById("spmoi").value;
    list.push(spmoi);
    document.getElementById("showing").innerHTML = show();
}
function editsp(){
    let stt = prompt("Nhập số thứ tự sản phẩm cần chỉnh sửa");
    let tenmoi = prompt("Nhập tên sản phẩm mới/cần thay thế");
    list[stt-1] = tenmoi;
    document.getElementById("showing").innerHTML = show();
}
function delsp(){
    let stt = prompt("Nhập số thứ tự sản phẩm cần xoá");
    list.splice(stt-1,1);
    document.getElementById("showing").innerHTML = show();
}
document.getElementById("showing").innerHTML = show();