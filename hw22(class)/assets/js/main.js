

class Circle{
    constructor(radius) {
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(new_r) {
        this.radius = new_r;
    }
    get getDiametr() {
        return this.radius * 2;
      
    }
    countArea() {
        return (Math.pow(this.radius, 2) * Math.PI).toFixed(2);
    }
    countLength() {
        return (this.radius * 2 * Math.PI).toFixed(2);
    }
}
const circl_btn = document.getElementById('circle-btn');
const toShow = document.getElementById('circle');
let info = '';
circl_btn.onclick = showCircleInfo;
function showCircleInfo() {
const circle = new Circle(8);
circle.setRadius = '5';
    info += `<div >
CIRCLE'S RADIUS: ${circle.getRadius}<br>
CIRCLE'S DIAMETR: ${circle.getDiametr}<br>
CIRCLE'S AREA: ${circle.countArea()}<br>
CIRCLE'S LENGTH: ${circle.countLength()}<br>
</div>
    `
    toShow.innerHTML = info;

}





class Marker{
    constructor(color, ink_amount) {
        this.color = color;
        this.ink_amount = ink_amount;
    }
 
    inputAndOutput(text = "") {
     
   let  info = document.getElementById('marker');
    let ink = this.ink_amount;
        info.innerHTML= `<div style="color:${this.color}" id="output"></div>`;
        
    let elem = '';
    let enteredText = Array.from(text);
     for (let i = 0; i < enteredText.length; i++){
         if (ink !== 0) {
             elem += enteredText[i];
             if (enteredText[i] !== ' ') {
                 ink -= 0.5;
             }
         } else {
             this.ink_amount = ink;
             break;
         }
     }
     const showText = document.getElementById('output');
     showText.innerText = elem;
 

} 
}

class RefilledMarker extends Marker{
    constructor(color, ink_amount) {
        super(color, ink_amount);
    }
    refill() {
        this.ink_amount = 100;
        console.log(`CONGRATILATIONS!!! AMOUNT OF INK = ${this.ink_amount}%`);
}
}


const marker_btn = document.getElementById('marker-btn');
marker_btn.onclick = function () {
    const marker = new Marker('red', 5);
marker.inputAndOutput('Mother, I have eaten!');
const reffiled = new RefilledMarker('red', 8);
reffiled.refill();
}







class Employee {
    constructor(empl) {
        this.name = empl.name;
        this.last_name = empl.last_name;
        this.position = empl.position;
    }
}


class EmpTable{
    constructor(empList) {
        this.empList = empList;
    }
    getHTML() {
        let html = '';
        this.empList.forEach(element => {
            html += `
            <tr >
            <td>${element.name}</td> 
            <td>${element.last_name}</td>
            <td>${element.position}</td>  
            </tr>
            `;
        });
        return html;
    }

    ViewHtml(){
        document.getElementById('emp-tbody').innerHTML = this.getHTML();  
}
}




const list = [
    new Employee({
        name: 'Viktoriia',
        last_name: 'Nidzelska',
        position: 'developer',
    }),
    new Employee({
        name: 'Max',
        last_name: 'Fedirko',
        position: 'manager',
    })

];

const employee_btn = document.getElementById('employee-btn');
const myTable = new EmpTable(list);
employee_btn.onclick = function () {
    myTable.ViewHtml();
}
