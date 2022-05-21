function argumentsCount() {
    document.getElementById('task_1.2_result').innerText = argumentsCount.arguments.length;
}


function addNumb() {
    let fNumb, sNumb;
    fNumb = parseInt(document.getElementById("task_1.3.1").value);
    sNumb = parseInt(document.getElementById("task_1.3.2").value);
    if (isNaN(fNumb)) {
        errorMessage('task_1.3_result');
    }else if (isNaN(sNumb)) {
        errorMessage('task_1.3_result');
    } else {
      return  numbComperision(fNumb, sNumb); 
    }
}

function numbComperision(fNumb=0, sNumb=0) {
    if (fNumb < sNumb) {
        showPerfResult(`task_1.3_result`, -1);
    } else if (fNumb > sNumb) {
        showPerfResult(`task_1.3_result`, 1);
    } else if (fNumb === sNumb) {
        showPerfResult(`task_1.3_result`, 0);
    }
    
}

function addOneNumb() {
    let numb = parseInt(document.getElementById("task_1.4").value);
    if (isNaN(numb) || numb <= 0) {
        errorMessage('task_1.4_result');
    } else {
      return factorial(numb, addOneNumb); 
    }
}


function factorial(numb = 0, addOneNumb) {
    if (numb == 0) {
        addOneNumb();      
    }
    let factor = 1;
    for (let i = numb; i >= 1; i--){
        factor = i*factor;
        if (i == 1) {
            showPerfResult(`task_1.4_result`, factor);
        }
    }
}


function addThreeNumb() {
    let fNumb, sNumb, tNumb;
    fNumb = parseInt(document.getElementById("task_1.5.1").value);
    sNumb = parseInt(document.getElementById("task_1.5.2").value);
    tNumb = parseInt(document.getElementById("task_1.5.3").value);
    if (isNaN(fNumb) || fNumb <= 0 || fNumb > 9) {
        errorMessage('task_1.5_result');
    }else if (isNaN(sNumb) || sNumb<0 || sNumb>9) {
        errorMessage('task_1.5_result');
    } else if (isNaN(tNumb) || tNumb<0 || tNumb>9) {
        errorMessage('task_1.5_result');
    }else {
      return  numbCombinate(fNumb, sNumb, tNumb); 
    }
}

function numbCombinate(fNumb, sNumb, tNumb) {
    let newNumb = 0;
    newNumb = fNumb * 100 + sNumb * 10 + tNumb;
    document.getElementById('task_1.5_result').innerText = `New number is ${newNumb}`;
}


function addParam() {
    let length, width;
    length = parseInt(document.getElementById("task_1.6.1").value);
    width = parseInt(document.getElementById("task_1.6.2").value);
    if (length<=0 || length === null) {
        errorMessage('task_1.6_result');
    }else if ( width<=0 || width === null) {
        errorMessage('task_1.6_result');
    } else if (isNaN(length) && isNaN(width)) {
        errorMessage('task_1.6_result');
    } else if (isNaN(length) || isNaN(width)){
      return  squareS(length, width); 
    } else {
        return  rectangleS(length, width);   
    }
}


function squareS(length, width) {
    if (isNaN(width)) {
        document.getElementById('task_1.6_result').innerText =`Square S=${length*length}`;
    }
    if (isNaN(length)) {
        document.getElementById('task_1.6_result').innerText =`Square S=${width*width}`;
    }
  
}

function rectangleS(length, width) {
    document.getElementById('task_1.6_result').innerText =`Rectangle S=${length*width}`;  
}


function getAndCheck(task_7 = '') {
    let numb = document.getElementById('task_7').value;
    if (numb !== '') {
        numb = parseInt(numb);
        if (!isNaN(numb)) {
            return numb;
        } else {
            document.getElementById('task_res').innerText = "ERROR, TRE AGAIN";
        }
    } else {
        document.getElementById('task_res').innerText = "ERROR, TRE AGAIN";
    }
}

function showResult(result, task_res) {
    document.getElementById('task_res').innerText =result;  
}

function isNumbPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++){
        if (n % i === 0) {  
            sum += i;
        }
    }
    return sum === n;
}

function task7() {
    let num = 0;
    let rez = '';
    if (getAndCheck('task_7') !== false) {
        num = getAndCheck('task_7');
    } else {
        document.getElementById('task_res').innerText = "ERROR, TRE AGAIN";
    }
    if (isNumbPerfect(num)) {
        rez = `Число ${num} є досконалим`;
    } else {
        rez = `Число ${num} НЕ є досконалим`;
    }
    showResult(rez, 'task_res')
}


function getRange() {
    let minNumb, maxNumb;
    minNumb = parseInt(document.getElementById("task_8.1").value);
    maxNumb = parseInt(document.getElementById("task_8.2").value);
    if (isNaN(minNumb)) {
        errorMessage('task_8_result');
    }else if (isNaN(maxNumb)) {
        errorMessage('task_8_result');
    } else {
        let perfectNumbs = '';
        for (let i = minNumb; i <= maxNumb; i++){
            if (isNumbPerfect(i)) {
                perfectNumbs += `${i} ,`;
            }
            if (i == maxNumb) {
                if (perfectNumbs !== '') {
                    return showPerfResult('task_8_result', perfectNumbs);
                } else {
                    document.getElementById('task_8_result').innerText = "I can't find perfect numbers";
                }
               
            }
        }
     
    }
}
function errorMessage(task) {
    document.getElementById(`${task}`).innerText = "ERROR, TRE AGAIN";
}
function showPerfResult(whereIsIt, value) {
    document.getElementById(`${whereIsIt}`).innerText = value;  
}