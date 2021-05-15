const answers = [
    {
        email: 'a@gmail.com',
        score: 11,
    },
    {
        email: 'b@gmail.com',
        score: 13,
    },
    {
        email: 'c@gmail.com',
        score: 19,
    },
    {
        email: 'd@gmail.com',
        score: 12,
    },
    {
        email: 'e@gmail.com',
        score: 10,
    },
];

// //Уважаемый имеил,ваш ответ со скором,принят. В случае, если он 16 и более

function checkResult(arr) {
    let message = '';
    for (const answer of arr) {
        if (arr.score >= 16) {
            message = `Уважаемый ${answer.email},ваш ответ со скором ${answer.score}принят.`;
            answer.isDone = true;

        } else {
            message = `Уважаемый ${answer.email},ваш ответ со скором ${answer.score} не принят. Пересдайте!`;
            answer.isDone = false;
        }
        console.log(message);
    }
}

// // console.log(answers);

class GetForm {
    constructor(email, ...rest) {
        this.email = email;
        this.score = rest;
        this.score = 0;
    }

    getScore() {
        let total = 0;
        for (const number of this.result) {
            total += number;
        }
        this.score = total;
    }
}
const form1 = new GetForm('some@gmail.com', 5, 3, 14, 10, 7);
// // console.log(form1);
form1.getScore();
console.log(form1);

const getData = () => {
    console.log('You push button');
    const x = new GetForm('some@gmail.com', 5, 3, 14, 10, 7);
    console.log(x);
    x.getScore();
    answers.push(x);
    console.log(answers);
    checkResult(answers);
};

const btn = document.querySelector('.button');

btn.addEventListener('click', getData);
console.log(answers);
//-----------------
const dish = {
    name: 'Цезарь',
    pruduct: ['курица', 'сыр', 'салат'],
    
    updateProduct(product, newProduct) {
        for (let item of this.products) {
            if (item === product) {
                // item = newProduct;
                const index = this.products.indexOf(item);
                this.products[index] = newProduct;
            }
        }
        return this.products;
    },
    addProduct(newProduct) {
        console.log(newProduct);
        this.products.push(...newProduct);
    },
    removeProduct(product) {
        for (let i = 0; i <= this.product.length; i += 1){
            if (this.products[i] === product) {
                this.products.splice(i, 1);

            }
        }
    },
};
console.log(dish);
dish.updateProduct('курица', 'лосось');

const dish2 = {
    name: 'Georgian',
    products: [],
}
dish.addProduct.call(dish2, ['tomato', 'nuts']);
console.log(dish2);
const y = ['tomato', 'cherry'];
dish.updateProduct.call(dish2, 'nuts', 'cucumber');

dish.updateProduct.apply(dish2, 'tomato', 'cherry');
console.log(dish2);
//------------------
function myMainFunction(callback, a ,b) {
    let result = callback(a, b);
    return result;
};
function myCallback1(x, y) {
    return x + y;
}
console.log(myMainFunction(myCallback1, 3, 18));

function myCallback2(y, z) {
    return y - z;
}
console.log(myMainFunction((x, y) => x + y, 15, 245));

//--------------------

const liteObject = {
    x: 1,
    y: 2,
    
    sum() {
        return this.x + this.y;
    },
};

const newObject = Object.create(liteObject);

newObject.x = 10;
newObject.y = 20;

const newObject2 = {
    x: 15,
    y: 33,
    
};

newObject.sum();
console.log(newObject.sum());
// // newObject2.sum();
// // console.log(newObject2.sum());

// //--------------
//----------CALL----------
const newObject3 = {
    title:'new',
    total: '20',
    count: '50',

    getTitle() {
        return this.title;
    }

};
const newObject4 = {
    title: 'jakudza',
};
newObject3.getTitle.call(newObject4)

console.log(newObject3.getTitle.call(newObject4));
console.log(newObject3.getTitle());

//------------------

const napoleon = {
    _lairs: 7,
    _cream: 'zavarnoj',

    get lairs() {

    },
    set lairs(value) {
        
    }
};
console.log(napoleon);

class Napoleon {
    constructor(lairs, cream) {
        this._lairs = lairs;
        this._cream = cream;
    }
    get lairs() {
        return this._lairs;
    }
    set lairs(value) {
        return this._lairs = value;
    }
}

const newNapoleon = new Napoleon(8, 'smetana')
console.log(newNapoleon);

const newNapoleon2 = new Napoleon(6, 'chocolate')
console.log(newNapoleon2);
//Получаємо значення свойства напряму і через Геттер
console.log(newNapoleon._lairs);
console.log(newNapoleon2.lairs);
//Получаємо значення свойства напряму і через Сеттер
console.log(newNapoleon._lairs = 4);
console.log(newNapoleon.lairs = 56);

//-------------
// console.log(newObject3);
// console.log(newObject3.title);
// console.log(newObject3.total);
// console.log(newObject3.count);
// newObject3.title = 'new2';
// newObject3.total = 30;
// newObject3.count = 70;
// console.log(newObject3.title);
// console.log(newObject3.total);
// console.log(newObject3.count);


//----------------PRACTICE------------

// Вот чем можете заняться в свободное от дз время:
// :link:видео про объекты
// https://youtu.be/N63ZEZF4ElA
// :link:исходный код в начале занятия
// https://github.com/AleksaHrevtsova/objects-js/tree/start
// :link:итоговый код в конце занятия
// https://github.com/AleksaHrevtsova/objects-js/tree/master
// Тесты по первым четырем модулям:
// 1. JavaScript Definition http://bit.ly/2wAFTSQ
// 2. JavaScript Mathematics http://bit.ly/39YQd66
// 3. JavaScript Branches and Loops https://bit.ly/2Uacj0c
//  (https://bit.ly/2Uacj0c)4. JavaScript Arrays https://bit.ly/39AJgY9
// 5. JavaScript Functions https://bit.ly/3cbC2vl
// 6. JavaScript Objects https://bit.ly/3ebVXMw
// 7. JavaScript Spread, Rest, Destructuring https://bit.ly/2JTmBvx
// 8. JavaScript Callback, Closure, this http://bit.ly/3hKha2k
// 1. JavaScript Definition http://bit.ly/2wAFTSQ

// 2. JavaScript Mathematics http://bit.ly/39YQd66
// 3. JavaScript Branches and Loops https://bit.ly/2Uacj0c
// 4. JavaScript Arrays https://bit.ly/39AJgY9

// 5. JavaScript Functions https://bit.ly/3cbC2vl

// 6. JavaScript Objects https://bit.ly/3ebVXMw
// 7. JavaScript Spread, Rest, Destructuring 
// https://bit.ly/2JTmBvx
// 8. JavaScript Callback, Closure, this http://bit.ly/3hKha2k
//0500715330 telegram

