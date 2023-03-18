"use strict";

// 1
{
    let sumNumbers = (a, b, c) => {
        return (a - b) / c;
    }
    console.log(sumNumbers(100, 10, 2));
}

// 2
{
    function numbers(s) {
        let square = Math.pow(s, 2);
        let cube = Math.pow(s, 3);
        console.log(`'Число' ${s} 'Квадрат'${square} 'Куб'${cube}`);
    }
    numbers(8);
}

// 3
{
    function maxNumber(a, b) {
        if (a > b) {
            return a;
        } else
            return b;
    }
    const number = maxNumber(7, 14);
    console.log(number);
}

// 4
{
    let w = +prompt("Введите число");

    function enterNumber(w) {

        let array = [];
        for (let i = 1; i <= w; i++) {
            array.push(i);
        }
        return array;
    }
    console.log(enterNumber(w));
}

// 5
{
    function isEven(e) {
        return e % 2 === 0 ? 'true' : 'false';
    }
    console.log(isEven(9));
}

// 6
{
    let array0 = [2, 6, 13, 18, 21, 24, 33, -34, 47, 58, 72, 77, 101];
    let array1 = [];

    function arrayNumbers() {
        for (let i = 0; i <= array0.length; i++) {
            if (array0[i] % 2 === 0) {
                array1.push(array0[i]);
            }
        }
    }
    arrayNumbers(array0);
    console.log(array1);
}

// 7
{
    const height = +prompt("Задайте высоту пирамиды");

    function pyramid(height) {

        for (let i = 1; i <= height; i++) {
            let string = ""
            for (let j = 1; j <= i; j++) {
                string += `${i}`
            }
            console.log(string);
        }
    }
    pyramid(height)
}

// 8 
{
    function stars(height) {
        let i = 0;
        let j = 0;
        let space = "";
        let star = "";
        while (i < height) {
            space = " ";
            star = "";
            for (j = 0; j < height - i; j++) space += " ";
            for (j = 0; j < 2 * i + 1; j++) star += "*";
            console.log(space + star);
            i++;
        }
    }
    stars(prompt('Введите высоту'));
    function reversedStars(height) {
        let i = height;
        let j = 0;
        let space = " ";
        let star = " ";
        while (i > 0) {
            space = " ";
            star = " ";
            for (j = 0; j < height - i; j++) space += " ";
            for (j = 0; j < 2 * i - 1; j++) star += "*";
            console.log(space + star);
            i--;
        }
    }
    reversedStars(prompt('Введите высоту пирамиды'));
}

// 9 



// 10

function getSum(value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum += +value[i]
    }

    if (sum > 9) {
        return getSum(String(sum))
    }
    return sum
}
console.log(getSum(prompt()));

// 12
function showInfo(name, group) {
    let array = ["Home Work: Function", `Выполнил: Студент гр. ${group}`, name]

    let longString = 0;  // let longString = 0; let longString = getLongString(array)

    for (let value of array) {
        if (value.length > longString) {
            longString = value.length
        }
    }

    for (let i = 0; i < array.length; i++) {
        const countRepeat = longString - array[i].length;

        array[i] = `* ${array[i]}${' '.repeat(countRepeat)} *`
    }
    array.push('*'.repeat(longString + 4))
    array.unshift('*'.repeat(longString + 4))

    for (let value of array) {
        console.log(value)
    }
}
showInfo("name: Петров Петр Петрович", 256);


// 13 не делать