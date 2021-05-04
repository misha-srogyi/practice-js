// if (true) {
//     console.log('true');
// }
// let a = 0;
// let b = 0;

// if (a && b) {
//     console.log('ok');
// } else {
//     console.log('not ok');
// }


// let value = 1;
// let toString = String(value);
// console.log(toString, typeof (toString));
// toString = value + '';
// console.log(toString);


// value = 'akshjh';
// let = toNumber = Number(value);
// console.log(toNumber);
// toNumber = +value;
// console.log(toNumber);
// value = '456fghdfgh';
// toNumber = parseInt(value);
// console.log(toNumber);

// value = '';
// console.log(Number(value));
// value = ' ';
// console.log(value.length);
// console.log(value.trim()); //чистить пробіли
// console.log(Number(value.trim()));

// value = true;
// console.log(Number(value));

// value = false;
// console.log(Number(value));

// value = null;
// console.log(Number(value)); //шось є

// value = undefined;
// console.log(Number(value));//нема нічого

// value = undefined;
// console.log(Boolean(value));

// value = null;
// console.log(Boolean(value));

// value = '';
// console.log(Boolean(value));

// value = ' ';
// console.log(Boolean(value));

// value = 0;
// console.log(Boolean(value));

// value = 1;
// console.log(Boolean(value));

// value = NaN;
// console.log(Boolean(value));

// value = Infinity;
// console.log(Boolean(value));

// let number = 1;
// console.log(number);

// // number = !number;
// // console.log(number);

// number = !!number;
// console.log(number);

// // Logical Operators

// // &&

// console.log(1 && true && 'javascript'); //javascript
// //         true && true && javascript 

// console.log(0 && true && 'javascript');
// //        false   

// console.log(true && 0 && 'javascript');
// //         true    false

// console.log(1 || true || 'javascript');//1
// //        true

// console.log( 1|| true || 'javascript');

//--------------------

// 5) Напишите функцию, которая принимает
// объект и возвращает
// новый объект без указанного параметра

// Ожидаемый результат - ({ a: 1, b: 2 }, 'b') => { a: 1 }
// const updateObj = (obj, ...removeKeys) => {
//   let newObj = { ...obj };
//     console.log(obj);
//     console.log(removeKeys);
//     for (const key of removeKeys) {
//         console.log(key);
//         console.log(newObj[key]);//new.Obj.a
//     delete newObj[key];
//   }

//   return newObj;
// };

// console.log(updateObj({ a: 1, b: 2, c: 3 }, "b", "a"));

//---------------------

// const addArray = function (baseArray, newEl, findName, changeName) {
//     console.log(baseArray, mewEl);
//     const newArray = [...baseArray, newEl];
//     console.log(findName, changeName);
//     console.log(newArray);

//     let a = newArray.indexOf(findName);
//     console.log(a);
//     if (a >= 0) {
//         console.log(a);
//         newArray.splice(a, 1, changeName)
//     }
//     else {
//         console.log('nema nichto');
//     }
//     return newArray;
// };

// const result = addArray(arr, 'Pit', 'Ishtvan', 'Georg');
// console.log(result);


//--------------

// Створити обєкт піци з полями і методами
// В обєкті має бути такі поля і методи:
// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
const SIZES = {
    BIG: { price: 25, cal: 100, time: 15 },
    SMALL: { price: 15, cal: 50, time: 7 },
    MEDIUM: { price: 15, cal: 50, time: 7 }
};
const STUFFING = {
    CHEESE: { price: 6.5, cal: 45, time: 2 },
    BEACON: { price: 10, cal: 70, time: 6 },
    TOMATO: { price: 12.1, cal: 4, time: 5 },
    CHICKEN: { price: 9.3, cal: 30, time: 5.1 }
};
const SAUCES = {
    MUSTARD: { price: 3, cal: 5, time: 1 },
    KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
    BOLOGNESE: { price: 7.5, cal: 50, time: 3 }
};
// Створити всі методи і перевірити чи вони працюють

const pizza = {
    size: SIZES,
    stuffing: STUFFING,
    sauces: SAUCES,
    _pizza: {
        stuffing: [],
    },
    get pizza() {
        return this._pizza
    },

    // метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
    getStuffing(stuffing) {
        const keys = Object.keys(this.stuffing);
        for (let key of keys) {
            if (key.toLowerCase() === stuffing.toLowerCase()) {
                const { stuffing: myStuffing } = this._pizza;

                return stuffing.includes(stuffing)
                    ? `${myStuffing} already has`
                    : myStuffing.push(stuffing);
            }
        }
        console.log(this._pizza);
        return this._pizza;
    },

    // метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
    getSauces(sauces) {
        const keys = Object.keys(this.sauces);
        for (let key of keys) {
            const { sauces:mySause } = this._pizza;
            if (key.toLowerCase() === sauces.toLowerCase())
                return mySause.includes(sauces)
                    ? `${sauces} уже есть`
                    : mySause.push(sauces);
        }
        return this._pizza;
    },
    // метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
    removeStuffing(stuffing) {
        stuffing = stuffing.toLowerCase();
        const { stuffing: myStuffing } = this._pizza;
        for (let i = 0; i < myStuffing.length; i++) {
            let stuff = myStuffing[i].toLowerCase();
            console.log(stuff);

            if (stuff === stuffing) {
                myStuffing.splice(i, 1);
            }
        }
        return this._pizza;
    },
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
    removeSauces(sauces) {
        sauces = sauces.toLowerCase();
        console.log(this._pizza.sauces);
        const { sauces: mySauces } = this._pizza;
        for (let i = 0; i < mySauces.length; i+=1) {
            // console.log(mySauces[i]);
            let sauce = mySauces[i].toLowerCase();
            if (sauce === sauces) {
                mySauces.splice(i, 1);
            }
        }
        return this._pizza;
        // console.log(sauces);
    },
};

pizza.removeSauces('KETCHUP');
pizza.removeStuffing('TOMATO')
pizza.getStuffing('Beacon');
pizza.getStuffing('Cheese');
pizza.getSauces('BOLOGNESE');
// pizza.getSauces('KETCHUP');
console.log(pizza.getStuffing('Cheese'));
console.log(pizza.pizza);


