const meineFunktion = (a, b, c) => {
    if (c == "+") {
        let sum = a + b;
        console.log(sum);
    }

    else if (c == "-") {
        let diff = a - b;
        console.log(diff);
    }

    else if (c == "*") {
        let multiply = a * b;
        console.log(multiply);
    }

    else if (c == "/") {
        let div = a / b;
        console.log(div)
    }

    else {
        console.log("Bitte geben Sie zwei numerische Werte und einen Rechenoperator an dritter Stelle ein.")
    }
}

module.exports = meineFunktion;