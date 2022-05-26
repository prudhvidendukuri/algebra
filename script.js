function algebra() {
    var one = document.getElementById('text1').value;
    let a = parseFloat(one);
    var two = document.getElementById('text2').value;
    let b = parseFloat(two);
    var sum = a + b;
    var product = a * b;
    var divison = a / b;
    var sub = a - b;
    document.getElementById('sum').value = sum;
    document.getElementById('product').value = product;
    document.getElementById('divison').value = divison;
    document.getElementById('sub').value = sub;
}
