var a, b, operator;

function fun(v) {
    document.f1.t1.value += v;
    
}

function dot() {
    var x = document.f1.t1.value;
    if (x.indexOf('.') === -1) {
        document.f1.t1.value += '.';
    }
}

function calc(op) {
    a = parseFloat(document.f1.t1.value);
    operator = op;
    document.f1.t1.value = "";
}

function getResult() {
    b = parseFloat(document.f1.t1.value);
    var result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                result = "Infinity";
            } else {
                result = a / b;
            }
            break;
        default:
            result = "Invalid operator";
    }
    document.f1.t1.value = result;
}

function clearInput() {
    document.f1.t1.value = "";
}