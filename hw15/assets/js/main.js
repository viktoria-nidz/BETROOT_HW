function correctSum() {
    const numb1 = 0.1;
    const numb2 = 0.2;
    let sum = (numb1 + numb2).toFixed(1);
    alert("Sum: " + sum);
}


function strSum() {
    const numb1 = "1";
    const numb2 = 2;
    let sum = +numb1 + numb2;
    alert("Sum: " + sum);
}

function filesAl() {
    let gb = Number(prompt("How many gigabytes do you have?"));
    const fileSize = 820;
    const gbToMb = 1024;
    let filesAmount;
    if (isNaN(gb) || gb<=0) {
        alert("Operation failed");
    } else {
        gb *= gbToMb;
        filesAmount = gb / fileSize;
        filesAmount = parseInt(filesAmount);
        alert(`You can store ${filesAmount} files`);
    }
}

function chocolateBuy() {
    let cash = Number(prompt("How much money do you have?")); 
    let chocoPrice = Number(prompt("How much does chocolate cost?"));
    let change;
    let chocoAmount;
    if (isNaN(cash) || cash <= 0 || isNaN(chocoPrice) || chocoPrice <= 0) {
        alert("Operation failed");
    } else {
        chocoAmount = parseInt(cash / chocoPrice);
        change = cash % chocoPrice;
        alert(`You can buy ${chocoAmount} chocolate bars, your change: ${change}`);
    }
}

function numbReverse() {
    let numbStart = parseInt(prompt("YOUR 3-DIGIT NUMBER?")); 
    let numbFinal = 0;
    if (isNaN(numbStart) ||  numbStart<100 || numbStart>999) {
        alert("Operation failed");
    } else {
        numbFinal += (numbStart % 10) * 100;
        numbStart = parseInt(numbStart/10);
        numbFinal += (numbStart % 10) * 10;
        numbStart = parseInt(numbStart/10);
        numbFinal += parseInt(numbStart);
        alert(`Your reverse number:  ${numbFinal} `);
    }
}


function persentages() {
    let cash = Number(prompt("Your contribution?")); 
    const monthPers = 5 / 12;
    let monthInBank = 2;
    let persent = 0;
    if (isNaN(cash) ||  cash<=0) {
        alert("Operation failed");
    } else {
        persent = cash / 100 * (monthInBank * monthPers);
        alert(`The amount pf accrued persentages: ${persent.toFixed(2)} UAN`);
 
    }
}