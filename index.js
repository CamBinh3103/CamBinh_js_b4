// Bài 1 nè 
function btn1() {
    var
        n1 = document.getElementById("n1"),
        n2 = document.getElementById("n2"),
        n3 = document.getElementById("n3"),
        num1 = document.getElementById("num1"),
        num2 = document.getElementById("num2"),
        num3 = document.getElementById("num3"),
        n;
    a = n1.value;
    b = n2.value;
    c = n3.value;
    n = a;
    if(Number(a) > Number(b)) {
        n = b;
        b = a;
        a = n;
    }
    if(Number(a) > Number(c)) {
        n = c;
        c = a;
        a = n;
    }
    if(Number(b) > Number(c)) {
        n = c;
        c = b;
        b = n;
    }
    num1.value = a;
    num2.value = b;
    num3.value = c;
}

// Bài 2 nè 
function btn2() {
    var 
        tv = document.getElementById("member"), 
        LoiChao = document.getElementById("loichao");
    
    switch (tv.value) {
        case 'Ba':
            LoiChao.value = "Xin Chào 'Ba'";
            break;
        case 'Mẹ':
            LoiChao.value = "Xin Chào 'Mẹ'";
            break;
        case 'Anh trai':
            LoiChao.value = "Xin chào 'Anh trai'";
            break;
        case 'Em gái':
            LoiChao.value = "Xin chào 'Em gái'";
            break;
        default:
            LoiChao.value = "Vui lòng nhập đúng gợi ý nhaaaa ^^"
    }

    
}

// Bài 3 nè 
function btn3() {
    var
        n4 = document.getElementById("n4"),
        n5 = document.getElementById("n5"),
        n6 = document.getElementById("n6"),
        chan = document.getElementById("chan"),
        le = document.getElementById("le");
    chan.value = 0;
    le.value =0;
    if (n4.value == ""  || n5.value == "" || n6.value == "") {
    }else {
        if (Number(n4.value) % 2 == 0){
            chan.value = Number(chan.value) + 1;
        }else {
            le.value = Number(le.value) + 1;
        }
        if (n5.value % 2 == 0){
            chan.value = Number(chan.value) + 1;
        }else {
            le.value = Number(le.value) + 1;
        }
        if (n6.value % 2 == 0){
            chan.value = Number(chan.value) + 1;
        }else {
            le.value = Number(le.value) + 1;
        }
    }
}

// Bai 4
function btn4() {
    var
        n7 = document.getElementById("n7"),
        n8 = document.getElementById("n8"),
        n9 = document.getElementById("n9"),
        tamgiac = document.getElementById("tamgiac"),
        a = Number(n7.value),
        b = Number(n8.value),
        c = Number(n9.value);
    // kiem tra tam giac
    if (a < b + c && b < a + c && c < a + b) {
        // tam giác vuông (pitago)
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            tamgiac.value = "Đây là tam giác vuông";
        }
        //tam giác đều (ba cạnh bằng nhau)
        else {
            if (a == b && b == c) {
                tamgiac.value = "Đây là tam giác đều";
            }
        //tam giác cân (2 cạnh bằng nhau)
        else {
            if (a == b || a == c || b == c) {
                tamgiac.value = "Đây là tam giác cân";
            } else {
                tamgiac.value = "Đây là tam thường";
            }
        }
    }
    } else {
        tamgiac.value = "không phải là cạnh của một tam giác";
    }
}