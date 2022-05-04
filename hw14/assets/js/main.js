function nameIs() {
    let userName = prompt("What is your name?");
    alert(`Привіт, ${userName}`);
}

function ageCounter() {
    const currentYear = 2022;
    let birth= parseInt(prompt("What is your birth year?"))
    if (isNaN(birth) || birth == 0 || birth < 0) {
        alert("Failed operation");
    } else {
        alert(`Your age: ${currentYear - birth}`);
    }
}


function squearePerimetr() {
    let perimetr = parseFloat(prompt("What is the side length?"));
    if (isNaN(perimetr) || perimetr == 0 || perimetr < 0) {
        alert("Failed operation");
    } else {
        alert(`Square perimetr: ${perimetr * 4}`);
    }
}

function circleS() {
    let radius = parseFloat(prompt("What is the circle radius?"));
    if (isNaN(radius) || radius == 0 || radius < 0) {
        alert("Failed operation");
    } else {
        alert(`S of the circle: ${radius**2*Math.PI}`);
    }
}


function speedYouNeed() {
    let distance = Number(prompt("What is the distance between cities?"));
    let time = Number(prompt("How many hours do you have?"));
    if (isNaN(distance) || distance == 0 || distance < 0) {
        alert("Failed operation");
    }else if(isNaN(time) || time == 0 || time < 0){
        alert("Failed operation");
    }
    else {
        alert(`Your pass  ${distance/time} km per hour.`);
    }
}


function valuteCovertor() {
    const euroInDollar = 1.05;
    let dollarsAmount = Number(prompt("How many dollars you want to convert?"));
   
    if (isNaN(dollarsAmount) || dollarsAmount == 0 || dollarsAmount < 0) {
        alert("Failed operation");
    }else {
        alert(`It is  ${(dollarsAmount / euroInDollar).toFixed(3)} euros`);
    }
}


function numberChanger() {
    let numb = parseInt(prompt("What is your number (5-digit number)"));
   
    if (isNaN(numb) || numb == 0 || numb < 0 || numb<10000 || numb>99999) {
        alert("Failed operation");
    } else {
        let lastNumb = numb % 10;
        let changedNumb = numb/10;
        changedNumb += lastNumb * 10000;
        alert(` Changed number: ${parseInt(changedNumb)}`);
    }
}


function salary() {

    const guaranteedSalary = 250;
    let salesProfit = parseFloat(prompt("What is sales profit this month?"));
   
    if (isNaN(salesProfit) || salesProfit == 0 || salesProfit < 0) {
        alert("Failed operation");
    } else {
        let totalSalary = guaranteedSalary + (salesProfit / 100 * 10);
        alert(` This month you earned: ${totalSalary.toFixed(3)} $` );
    }
}