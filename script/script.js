'Use strict';
let money;
const  
// time = new Date(prompt('Введите дату в формате YYYY-MM-DD', ''));
// console.log(time);

   appData = {
        budjet: () => {prompt('Ваш бюджет на месяц?', '');},
        timeData: () => {prompt('Введите дату в формате YYYY-MM-DD', '');},
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
//    appData.budjet();
//    appData.timeData();
// обязательные статьи разходов
//     for (let i = 0; i<2; i++){

//         let a, b;
// a = prompt('Введите обязательную статью расходов в этом месяце','');
// b = prompt('Во сколько обойдется?','');
// appData.expenses[a]=b;

 //   };
    
//цикл while
    let i = 0;
    while(i<2) {
        let a, b;
a = prompt('Введите обязательную статью расходов в этом месяце','');
b = prompt('Во сколько обойдется?','');
appData.expenses[a]=b;
      i++;  
    }
    console.log(appData.expenses);

// бюджет на 1 день
// money = + appData.budjet();
// alert(money/30);