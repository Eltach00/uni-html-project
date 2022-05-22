function pow(a,b) {
    let r = a;
    for (let i= 1; i < b; i++) {
    r *=a;
    }
     return r;
}

let a = prompt('Введите число','');
let b = prompt('Введите степень','');
if (b < 1) {
alert('not supported');
}
else {
alert( pow(a,b) );
}
