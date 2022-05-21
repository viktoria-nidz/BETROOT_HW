function numbFirstgeId() {
    let age;
   
        document.getElementById('task_1.1_result').innerText = "ENTER YOUR AGE";
    age = parseInt(document.getElementById('task_1.1').value);   
    if (age < 0 || isNaN(age) || age === null || age == undefined) {
        document.getElementById('task_1.1_result').innerText = "INVALID DATA"; 
    }
    

 
    if (age >= 0 && age <= 11) {
        document.getElementById('task_1.1_result').innerText = "ДИТИНА";
    } else if (age >= 12 && age <= 17) {
        document.getElementById('task_1.1_result').innerText = "ПІДЛІТОК";
    } else if (age >= 18 && age <= 59) {
        document.getElementById('task_1.1_result').innerText = "ДОРОСЛИЙ";
    } else if(age>= 60){
        document.getElementById('task_1.1_result').innerText = "ПЕНСІОНЕР";  
    }
}





function numbConvert() {
    let numbToConvert;
    document.getElementById('task_1.2_result').innerText = "ENTER YOUR TOTAL PRICE";
    numbToConvert = parseInt(document.getElementById('task_1.2').value);   
    switch (numbToConvert) {
        case 0:
            document.getElementById('task_1.2_result').innerText = 'your symbol - )';
            break;
        case 1:
            document.getElementById('task_1.2_result').innerText = 'your symbol - !';
            break;
        case 2:
                document.getElementById('task_1.2_result').innerText = 'your symbol - @';
                break;
        case 3:
                    document.getElementById('task_1.2_result').innerText = 'your symbol - #';
            break;
            case 4:
                document.getElementById('task_1.2_result').innerText = 'your symbol - $';
            break;
            case 5:
                document.getElementById('task_1.2_result').innerText = 'your symbol - %';
            break;
            case 6:
                document.getElementById('task_1.2_result').innerText = 'your symbol - ^';
            break;
            case 7:
                document.getElementById('task_1.2_result').innerText = 'your symbol - &';
            break;
            case 8:
                document.getElementById('task_1.2_result').innerText = 'your symbol - *';
            break;
            case 9:
                document.getElementById('task_1.2_result').innerText = 'your symbol - (';
            break;
        default:
            document.getElementById('task_1.2_result').innerText = 'INVALID DATA';  

    }
}


function counter() {
    let numbStart = 0;
    let numbFin = 0;
    let counter = 0;
    
    numbStart = parseInt(prompt("Рахувати числа в діапазоні від:"));
    numbFin = parseInt(prompt("Рахувати числа в діапазоні до:"));
    while (numbStart < 0 || isNaN(numbStart) || numbStart === null || numbStart == undefined) {
        numbStart = parseFloat(prompt("Рахувати числа в діапазоні від:"));
    }
    while (numbFin < 0 || isNaN(numbFin) || numbFin === null || numbFin == undefined || numbFin<=numbStart) {
        numbFin = parseFloat(prompt("Рахувати числа в діапазоні до:"));
    }
    for (let i = numbStart; i <= numbFin; i++) {
        counter += i;
    }
    document.getElementById('task_1.3_result').innerText = `Sum is ${counter}`;  
}


function largestDivider() {
    let numbFirst = 0;
    let numbSec = 0;
    let divider= 0;
   
    numbFirst = parseInt(prompt("Введіть число :"));
    numbSec = parseInt(prompt("Введіть число :"));
    while (numbFirst < 0 || isNaN(numbFirst) || numbFirst === null || numbFirst == undefined) {
        numbFirst = parseInt(prompt("Введіть число :"));
    }
    while (numbSec < 0 || isNaN(numbSec) || numbSec === null || numbSec == undefined) {
        numbSec = parseInt(prompt("Введіть число :"));
    } 
    let min = (numbFirst >= numbSec) ? numbSec : numbFirst;
    let i = 1;
    while (i <= min) {
        if (numbFirst % i == 0 && numbSec % i == 0) {
            divider = i;
        }
        i++;
}
document.getElementById('task_1.4_result').innerText = divider;  
}


function allDividers() {
    let numbFirst = 0;
    let numbSec = 0;
    let rez= 1;
   
    numbFirst = parseInt(prompt("Введіть число :"));
    numbSec = parseInt(prompt("Введіть число :"));
    while (numbFirst < 0 || isNaN(numbFirst) || numbFirst === null || numbFirst == undefined) {
        numbFirst = parseInt(prompt("Введіть число :"));
    }
    while (numbSec < 0 || isNaN(numbSec) || numbSec === null || numbSec == undefined) {
        numbSec = parseInt(prompt("Введіть число :"));
    } 
    let min = (numbFirst >= numbSec) ? numbSec : numbFirst;
    let i = 1;
    while (i <= min) {
        if (numbFirst % i == 0 && numbSec % i == 0) {
            if (i == 1) {
                rez += ',';
            } else {
                rez += i + ',';  
            }
            
         
        }
        i++;
}
document.getElementById('task_1.5_result').innerText =rez;  
}


function IsPolindrom() {
    let numbStart = parseInt(document.getElementById('task_2.1').value);
    let copyStartNumb = numbStart;
    let numbFinal = 0;
    if (isNaN(numbStart)  || numbStart<10000 ||  numbStart>99999) {
        document.getElementById('task_2.1_result').innerText ='ERROR';  
    } else {
        for (let i = 10000; i >= 1; i= i / 10){
            numbFinal += (numbStart % 10) * i;
            numbStart = parseInt(numbStart / 10);
           
        }
        if (copyStartNumb === numbFinal) {
            document.getElementById('task_2.1_result').innerText ='POLINDROM';  
        } else {
            document.getElementById('task_2.1_result').innerText =' DOES NOT POLINDROM';  
        }
       
    }
}

function discount() {
    let priceTotal;
   
        document.getElementById('task_2.2_result').innerText = "ENTER YOUR TOTAL PRICE";
        priceTotal = parseFloat(document.getElementById('task_2.2').value);
     if (priceTotal < 0 || isNaN(priceTotal) || priceTotal === null || priceTotal == undefined) {
        ocument.getElementById('task_2.2_result').innerText = "ERORR"; 
    }

 
    if (priceTotal<200 ) {
        document.getElementById('task_2.2_result').innerText =`you should to pay ${priceTotal} UAN` ;
    } else if (priceTotal >=200 && priceTotal < 300) {
        document.getElementById('task_2.2_result').innerText = `you should to pay ${(priceTotal-(priceTotal/100*3)).toFixed(2)} UAN` ;
    } else if (priceTotal >= 300 && priceTotal < 500) {
        document.getElementById('task_2.2_result').innerText = `you should to pay ${(priceTotal-(priceTotal/100*5)).toFixed(2)} UAN` ;
    } else {
        document.getElementById('task_2.2_result').innerText = `you should to pay ${(priceTotal-(priceTotal/100*7)).toFixed(2)} UAN` ;
    }
}


function numbersChecker() {
    let numb = 0;
    let positive = 0;
    let negative = 0;
    let odd = 0;
    let even = 0;
    for (let i = 1; i <= 10; i++){
        numb = parseFloat(prompt( `Enter your ${i} number`));
            if (numb < 0 || isNaN(numb) || numb === null || numb == undefined) {
            document.getElementById('task_2.3_result').innerText = `ERROR, TRY AGAIN`;
            } else {
              
                if (numb > 0) {
                    positive++;
                } else {
                    negative++;
                }
                if (numb % 2 == 0) {
                    even++;
                } else {
                    odd++;
                }
            }
    }
   
        document.getElementById('task_2.3_result').innerText = `There are ${positive} positive numbers. There are ${negative} negative numbers. There are ${even} even numbers .There are ${odd} odd numbers.`;

}

function WeekDay() {
    let day = 7;
    let check = true;
    while (check) {
        switch (day) {
            case 1:
                check = confirm(`Понеділок. Хочеш побачити наступний день?`)
                day++;
                break;
                case 2:
                    check = confirm(`Вівторок. Хочеш побачити наступний день?`)
                    day++;
                break;
                case 3:
                    check = confirm(`Середа. Хочеш побачити наступний день?`)
                    day++;
                break;
                case 4:
                    check = confirm(`Четвер. Хочеш побачити наступний день?`)
                    day++;
                break;
                case 5:
                    check = confirm(`П"ятниця. Хочеш побачити наступний день?`)
                    day++;
                break;
                case 6:
                    check = confirm(`Субота. Хочеш побачити наступний день?`)
                    day++;
                break;
                case 7:
                    check = confirm(`Неділя. Хочеш побачити наступний день?`)
                day = 1;
                break;
            
        }
    }
}


function guessNumb(){
    alert(`Загадай числот від 0 до 100`);
    let max = 100;
    let min = 0;
    let answer;
    let average = 0;
    check = true;
    average = max / 2;
    while (check) {
       answer = prompt(`Введіть знак, котрий відповідає дійсності. > , якщо ваше число більше за ${average}.  < , якщо ваше число менше за ${average} .   = , якщо ваше число дорівнює ${average} `);
        if (answer == "=")
        {
            alert(`Вашe число ${average}`);
            check = false;
        } else if (answer == ">") {
            min = average; 
            average = parseInt(((max-min)/2)+min);
        } else if (answer == "<") {
            max = average;
           average =parseInt(((max-min)/2)+min);
        } else {
            check = false;
   }
    } 
}

function multi() {
    let tableCreate = '<div style="display:flex; flex-wrap:wrap; gap:5px">';
    for (let i = 2; i <= 9; i++){
        tableCreate += '<ul>';
        for (let j = 1; j <= 10; j++) {
            tableCreate += '<li>' + i + '*' + j + '=' + (i * j) + '</li>';
        }
        
        tableCreate += '</ul>';
    }
    tableCreate += '</div>';
    document.getElementById('task_3.2_result').innerHTML = tableCreate   ;
}


function DateNext() {
    let year, month, day;
    let nextYear, nextMonth, nextDay;
    year = parseInt(prompt("Введіть загаданий рік:"));
    month = parseInt(prompt("Введіть загаданий місяць:"));
    day = parseInt(prompt("Введіть загаданий день:"));
    if (day <= 0 || day > 31 || isNaN(day) || day === null || day == undefined) {
        document.getElementById('task_3.3_result').innerText = `ERROR, TRY AGAIN`;
    } else if (year <= 0 || isNaN(year) || year === null || year == undefined) {
        document.getElementById('task_3.3_result').innerText = `ERROR, TRY AGAIN`;
    } else if (month <= 0 || month > 12 || isNaN(month) || month === null || month == undefined) {
        document.getElementById('task_3.3_result').innerText = `ERROR, TRY AGAIN`;
    } else {
        switch (day) {
            case (day >= 1 && day <= 27):
                nextDay = day++;
                break;
            case 28:
                if ((year % 4 == 0 || year % 400 == 0 || year % 100 == 0) && month == 2) {
                    nextDay = 29;
                } else if (month == 2 && year % 4 != 0 && year % 400 != 0 && year % 100 != 0) {
                    nextDay = 1;
                    nextMonth = month++;
                } else {
                    nextDay = 29;
                }
                break;
            case 29:
                nextDay = 30;
                break;
            case 30:
                if (month == 4 || month == 6 || month == 9 || month == 11) {
                    nextDay = 1;
                    nextMonth = month++;
                } else {
                    nextDay = 31;
                }
                break;
            case 31:
                if (month == 12) {
                    nextMonth = 1;
                    nextDay = 1;
                    nextYear = year++;
                } else {
                    nextMonth = month++;
                    nextDay = day++;
                }
                break;
            default:
                document.getElementById('task_3.3_result').innerText = `ERROR, TRY AGAIN`;
                break;
        }
        document.getElementById('task_3.3_result').innerText = `${day}:${month}:${year}`;
    }
}