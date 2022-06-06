const CAR = {
    manufacturer: "Ford",
    model: "Ford Puma",
    year: 2021,
    'average speed': 120,
    'tank volume': 42,
    'fuel consumption': 5,
    drivers: ['Petya', 'Sasha', 'Masha'],
    Isgasoline: 10,
}

function showInfo() {
    const resElem = document.getElementById('carOperation');
    const resWrap = document.createElement('div');
    const properties = Object.keys(CAR);
    properties.forEach(element => {
        resWrap.innerHTML += `<li>${element}:  ${CAR[element]}</li>`
    });
    resElem.prepend(resWrap);
    const button = document.getElementById('btn-show');
    button.setAttribute('disabled', '');
}


function addDriver() {
    const driver = document.getElementById('task_1.2').value;
    if (driver === '') {
        alert("Enter driver name");
        return 0;
    }
    if (driver.indexOf(' ') !== -1 || driver.indexOf(',') !== -1) {
        alert("Enter one valid driver name without spaces");
        return 0;
    }
    CAR.drivers.push(driver);
    const resElem = document.getElementById('carOperation');
    const resWrap = document.createElement('div');
    resWrap.innerHTML += `<div> drivers:  ${CAR.drivers}</div>`;
    resElem.append(resWrap);
}

function addGasoline() {
    const amountToAdd = parseInt(document.getElementById('task_1.3').value)
    if (isNaN(amountToAdd) || amountToAdd <= 0 ) {
        alert("Enter amount of gasoline");
        return 0;
    }
    if (CAR.Isgasoline + amountToAdd <= CAR['tank volume']) {
        CAR.Isgasoline += amountToAdd;
    showInfo();  
    } else {
        alert("Enter less amount of gasoline, it is too much");
        return 0;
    }
}
function toCalcTime(distance, name) {

    let checkDriver = CAR.drivers.findIndex(function (e) {
        return e === name;
    });
    if (checkDriver === -1) {
        alert("The driver can't drive this car");
        return 0;
    }
    let checkGasoline = parseInt(CAR['tank volume'] - (CAR['fuel consumption']/100*distance));
    if (checkGasoline < 0) {
        alert("You don't have enought gasoline, you should refuel car");
        return 0;
    }
    const resElem = document.getElementById('carOperation');
    const resWrap = document.createElement('div');
    let timeYouNeed = (parseFloat(distance / CAR['average speed'])).toFixed(3);
    if (timeYouNeed >= 4) {
        let extraTime = parseInt(timeYouNeed / 4);
        timeYouNeed += extraTime;
       
        resWrap.innerHTML += `<div> You will need:  ${timeYouNeed} hours</div>`;
        resElem.append(resWrap);
    }
    resWrap.innerHTML += `<div> You will need:  ${timeYouNeed} hours</div>`;
    resElem.append(resWrap);
    const button = document.getElementById('btn-calc');
    button.setAttribute('disabled', '');
}

function takeValues() {
    let distance = parseInt(prompt('Enter distanse:'));
    if (isNaN(distance) || distance <= 0 ) {
        alert("Enter valid distance");
        do {
            distance = parseInt(prompt('Enter distanse:'));
        }while(isNaN(distance) || distance <= 0)
    }
    let name = prompt('Enter driver name:');
    if (name ==='' || name.indexOf(' ') !== -1 || name.indexOf(',') !== -1 ) {
        alert("Enter one valid driver name without spaces");
        do {
            name = prompt('Enter driver name:');
        }while(name ==='' || name.indexOf(' ') !== -1 || name.indexOf(',') !== -1 )
    }
    toCalcTime(distance, name);
 
}

// ДРУГЕ ЗАВДАННЯ

const TIME = {
    hours:   0,
    minutes: 0,
    seconds: 0,
}

function showTime(){
    const forOperations = document.getElementById('timeOperations');
    const resWrap = document.createElement('div');
    let hours = parseInt(TIME.hours);
    let minutes = parseInt(TIME.minutes);
    let seconds = parseInt(TIME.seconds);
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    resWrap.innerText = `${hours}:${minutes}:${seconds}`;
    forOperations.append(resWrap);

}

function addSeconds() {
    const secondsToAdd = parseInt(document.getElementById('task_2.2').value);
    if (isNaN(secondsToAdd) || secondsToAdd <= 0 ) {
        alert("Enter valid amount of seconds");
        return 0;
    }
    let currSec = TIME.seconds;
    if (currSec + secondsToAdd < 60) {
        TIME.seconds = secondsToAdd+currSec;
        alert("You add seconds");
        return 1;
    }
    if (currSec + secondsToAdd === 60) {
        TIME.seconds = 0;
        addMinutes(1);
        alert("You add seconds");
        return 1;
    }
    if (currSec + secondsToAdd > 60) {
        currSec += secondsToAdd % 60;
        addMinutes(secondsToAdd / 60);
        if (currSec + TIME.seconds > 60) {
            currSec = currSec + TIME.seconds - 60;
            addMinutes(1);
        }
        TIME.seconds = currSec;
        alert("You add seconds");
        return 1;
}   
}


function addMinutes(add = 0) {
    let minutesToAdd = 0;
    if (add === 0) {
        minutesToAdd = parseInt(document.getElementById('task_2.3').value);
        if (isNaN(minutesToAdd) || minutesToAdd <= 0 ) {
            alert("Enter valid amount of minutes");
            return 0;
        } 
    } else {
        minutesToAdd = add; 
    }
    let currMin = TIME.minutes;
    if (currMin + minutesToAdd < 60) {
        TIME.minutes = parseInt(minutesToAdd+currMin);
        alert("You add minutes");
        return 1;
    }
    if (currMin + minutesToAdd === 60) {
        TIME.minutes = 0;
        addHours(1);
        alert("You add minutes");
        return 1;
    }
    if (currMin + minutesToAdd > 60) {
        currMin += (minutesToAdd % 60);
        addHours(parseInt(minutesToAdd / 60));
        if (currMin + TIME.minutes > 60) {
            currMin = currMin + TIME.minutes - 60;
            addHours(1);
        }
        TIME.minutes = currMin;
        alert("You add minutes");
        return 1;
}   
}


function addHours(add = 0) {
    let hoursToAdd = 0;
    if (add === 0) {
        hoursToAdd = parseInt(document.getElementById('task_2.4').value);
        if (isNaN(hoursToAdd) || hoursToAdd <= 0 ) {
            alert("Enter valid amount of hours");
            return 0;
        } 
    } else {
        hoursToAdd = add; 
    }
    let currHours = TIME.hours;
    if ((currHours + hoursToAdd) <= 24) {
        TIME.hours = parseInt(hoursToAdd + currHours);
        alert("You add hours");
        return 1;
    }
    if (currHours + hoursToAdd > 24) {
        let sumOfHours = parseInt(currHours + hoursToAdd);
        do {
            sumOfHours -= 24;
        } while (sumOfHours > 24);
        TIME.hours = parseInt(sumOfHours);
        alert("You add hours");
        return 1;
    }
}


// 3 ЗАВДАННЯ


const drobb = {
    value1: {
        ch: 1,
        zn: 4,
    },
    value2: {
        ch: 4,
        zn: 8,
    },
    add: function () {
        const resElem = document.getElementById('fractionOperations');
        const resWrap = document.createElement('div');
        if (this.value1.zn === this.value2.zn) {
            resWrap.innerText = `${this.value1.ch + this.value2.ch}/${this.value1.zn}`;
            resElem.append(resWrap);
            return 1;
        }
        let commonZn = 1;
        do {
            if (this.value1.zn > this.value2.zn) {
                commonZn = this.value1.zn;
            } else {
                commonZn = this.value2.zn;
            }
            commonZn *= 2;
                
        } while (commonZn % this.value1.zn !== 0 && commonZn % this.value2.zn !== 0);
        let newChVal1, newChVal2;
        newChVal1 = this.value1.ch * (commonZn / this.value1.zn);
        newChVal2 = this.value2.ch * (commonZn / this.value2.zn);
        resWrap.innerText = `${newChVal2 + newChVal1}/${commonZn}`;
        resElem.append(resWrap);
        return 1;
    },
    subtract: function () {
        const resElem = document.getElementById('fractionOperations');
        const resWrap = document.createElement('div');
        if (this.value1.zn === this.value2.zn) {
            resWrap.innerText = `${this.value1.ch - this.value2.ch}/${this.value1.zn}`;
            resElem.append(resWrap);
            return 1;
        }
        let commonZn = 1;
        do {
            if (this.value1.zn > this.value2.zn) {
                commonZn = this.value1.zn;
            } else {
                commonZn = this.value2.zn;
            }
            commonZn *= 2;
                
        } while (commonZn % this.value1.zn !== 0 && commonZn % this.value2.zn !== 0);
        let newChVal1, newChVal2;
        newChVal1 = this.value1.ch * (commonZn / this.value1.zn);
        newChVal2 = this.value2.ch * (commonZn / this.value2.zn);
        resWrap.innerText = `${newChVal2 - newChVal1}/${commonZn}`;
        resElem.append(resWrap);
        return 1;
    },
    multiply: function () {
        const resElem = document.getElementById('fractionOperations');
        const resWrap = document.createElement('div');
        resWrap.innerText = `${this.value1.ch * this.value2.ch}/${this.value1.zn * this.value2.zn}`;
        resElem.append(resWrap);
        return 1;
    },
    divide: function () {
        const resElem = document.getElementById('fractionOperations');
        const resWrap = document.createElement('div');
        resWrap.innerText = `${this.value1.ch * this.value2.zn}/${this.value1.zn * this.value2.ch}`;
        resElem.append(resWrap);
        return 1;
    },
    reduce: function () {
        const resElem = document.getElementById('fractionOperations');
        const value = parseInt(document.getElementById('task_3.5').value);
        if (isNaN(value) || value <= 0 || value > 2) {
            alert("ENTER VALID NUMBER: 1 OR 2");
            return 0;
        }
        const resWrap = document.createElement('div');
        let drob;
       
        if (value === 1) {
            drob = 'value1';
        }else {
            drob = 'value2';   
        };
        let newCh = drobb[drob].ch;
       let  newZn = drobb[drob].zn;
        while (newCh % 2 == 0 && newZn % 2==0) {
            newCh = newCh / 2;
            newZn = newZn / 2;
        }
        resWrap.innerText = `${newCh}/${newZn}`;
        resElem.append(resWrap);
        return 1;
},
};