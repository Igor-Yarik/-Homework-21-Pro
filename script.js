class SuperMath {
    constructor(obj) {
        this.object = obj;
    }

    check(userObject = this.object) {
        let result;
        if (confirm(`Ви бажаєте обчислити ${userObject.x}${userObject.znak}${userObject.y}?`)) {
            switch (userObject.znak) {
                case "+":
                    result = userObject.x + userObject.y;
                    alert(`${userObject.x} + ${userObject.y} = ${result}`);
                    break;

                case "-":
                    result = userObject.x - userObject.y;
                    alert(`${userObject.x} - ${userObject.y} = ${result}`);
                    break;

                case "*":
                    result = userObject.x * userObject.y;
                    alert(`${userObject.x} * ${userObject.y} = ${result}`);
                    break;

                case "/":
                    result = userObject.x / userObject.y;
                    alert(`${userObject.x} / ${userObject.y} = ${result}`);
                    break;

                case "%":
                    result = userObject.x % userObject.y;
                    alert(`${userObject.x} % ${userObject.y} = ${result}`);
                    break;

                default:
                    alert("Щось пішло не так...")
                    break;
            }
        } else {
            this.input();
        }
    }

    input() {
        const newUserObject = {};
        alert("Введіть нові дані для обчислення");
        let userX, userY, userZnak;
        do {
            userX = prompt("Введіть параметр 'X'");
            if (userX !== null && !isNaN(+userX) && userX.trim() !== "") {
                newUserObject.x = +userX;
            } else {
                alert("Вводити можна лише числа! Спробуйте ще раз!");
            }
        } while (!("x" in newUserObject));

        do {
            userY = prompt("Введіть параметр 'Y'");
            if (userY !== null && !isNaN(+userY) && userY.trim() !== "") {
                newUserObject.y = +userY;
            } else {
                alert("Вводити можна лише числа! Спробуйте ще раз!");
            }
        } while (!("y" in newUserObject));

        do {
            userZnak = prompt("Введіть параметр 'знак дії'(+,-,*,/,%)");
            if (userZnak.match(/^[\/\+\%\*\-]$/)) {
                newUserObject.znak = userZnak;
            } else {
                alert(`Параметр "Знак дії" некоректний`);
            }
        } while (!("znak" in newUserObject));

        this.check(newUserObject);
    }

}

const calc = new SuperMath({ x: 12, y: 3, znak: "+" });
calc.check({ x: 1, y: 1, znak: "+" });