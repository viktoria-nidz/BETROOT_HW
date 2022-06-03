const topPanel = {
    show: function (text, className) {
        let panel = `<div id="top-panel" class="top-panel ${className}">${text}</div>`
        if (document.getElementById('top-panel') !== null) {
            document.getElementById('top-panel').remove();
        }
        document.body.insertAdjacentHTML('afterbegin', panel);
        this.hide();
    },

    hide: function () {
        setTimeout(function () {
            if (document.getElementById("top-panel")!==null) {
                document.getElementById('top-panel').remove();
            }
          
        }, 3000);
    },

    error: function (text) {
        this.show(text, 'panel-error');
    },
 
    success: function (text) {
        this.show(text, 'panel-success');
    },

    info: function (text) {
        this.show(text, 'panel-info');
    }
};
const CART = [];



viewCardTable();
function addToCart(name, qty, price) {
    if (CART.find(el => el.name === name) === undefined) {
        CART.push({
            name: name,
            qty: qty,
            isBuy: false,
            price: price,
            total: parseFloat((qty * price).toFixed(2))
        });
        topPanel.success("Product successfully added");
    } else {
        const prodIndex = CART.findIndex(el => el.name === name);
        const newQty = CART[prodIndex].qty + qty;
        CART[prodIndex].qty = newQty;
        CART[prodIndex].total = parseFloat((newQty * CART[prodIndex].price).toFixed(2));
        topPanel.success("Product quantity changed");
    }
    viewCardTable();
}
function checkAndAddToCart() {
    let name = document.getElementById('product_name').value,
        qty = parseInt(document.getElementById('product_qty').value),
        price = parseFloat(document.getElementById('product_price').value);
    let valid = true;
    if (name === '') {
        topPanel.error("Enter product name");
        valid = false;
    }
    if (isNaN(qty)) {
        topPanel.error("Enter quantity valid value");

        valid = false;
    }
    if (qty <= 0) {
        topPanel.error("Quantity should be positive");
        valid = false;
    }
    if (isNaN(price)) {
        topPanel.error("Enter price valid value");
        valid = false;
    }
    if (price <= 0) {
        topPanel.error("Price should be positive");
        valid = false;
    }
    if (valid) {
        addToCart(name, qty, price);
        document.getElementById('product_name').value = '';
        document.getElementById('product_qty').value = '1';
        document.getElementById('product_price').value = '';
    }
}
function changeProductQty(name, action) {
    const index = CART.findIndex(el => el.name === name);
    let newQty = 0;
    if (action === 'inc') {
        newQty = CART[index].qty + 1;
    } else {
        if (CART[index].qty >= 2) {
            newQty = CART[index].qty - 1;
        } else {
            askProdDel(name);
            return false;
        }
        
    }
    
    CART[index].qty = newQty;
    CART[index].total = CART[index].price * newQty;
    viewCardTable();
}

function viewCardTable() {
    let html = '';
    CART.sort((a, b) => (Number(b.isBuy) - Number(a.isBuy)));
    CART.forEach(product => {
        html +=
           ` <tr>
                <td> ${product.name}</td>
                <td>${product.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>'}</td>
                <td>
                <button class="btn btn-info btn-sm" onclick="changeProductQty('${product.name}', 'dec')">-</button>
                ${product.qty}
                <button class="btn btn-info btn-sm" onclick="changeProductQty('${product.name}', 'inc')">+</button>
                </td>
                <td> ${product.price.toFixed(2)} </td>
                <td> ${product.total.toFixed(2)}</td>
                <td>
                <button type="button" class="btn btn-primary" onclick="changeProdStatus('${product.name}')"> Change status </button>
                <button type="button" class="btn btn-danger" onclick="askProdDel('${product.name}')">&times;</button>
                </td>
            </tr>`
            ;
    })
    document.getElementById('cart-tbody').innerHTML = html;
    document.getElementById('cart-total').innerText = (summTotal()).toFixed(2);
}

viewCardTable();
function summTotal() {
    return CART.reduce((prev, curr) => {
        return prev + curr.total;
    }, 0);
}
//CHECK
let productToBuy = CART.filter(elem => elem.isBuy === true);

function sumToPay() {
    return productToBuy.reduce((prev, curr) => {
        return prev + curr.total;
    }, 0);
}
function viewCheck(newTotal=0) {
    let text = '';
    productToBuy = CART.filter(elem => elem.isBuy === true);
    productToBuy.forEach(product => {
        text +=
           ` <tr>
                <td> ${product.name}</td>
                <td> ${product.qty}</td>
                <td> ${product.price.toFixed(2)} </td>
                <td> ${product.total.toFixed(2)}</td>
            </tr>`
            ;
    })
   
    document.getElementById('check-tbody').innerHTML = text; 
    if (newTotal === 0) {
        document.getElementById('check-total').innerText = (sumToPay()).toFixed(2);
    } else {
        document.getElementById('check-total').innerText = newTotal.toFixed(2);   
}
   
}
function viewAfterSorting(productToBuy) {
    let text = '';
    productToBuy.forEach(product => {
        text +=
           ` <tr>
                <td> ${product.name}</td>
                <td> ${product.qty}</td>
                <td> ${product.price.toFixed(2)} </td>
                <td> ${product.total.toFixed(2)}</td>
            </tr>`
            ;
    })
    document.getElementById('check-tbody').innerHTML = text;
  
}

function setSorting() {
    const sorting = document.getElementById('sorting').value;
    if (sorting == 'az') {
        productToBuy.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } else if (sorting == 'za') {
        productToBuy.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0));
    } else if (sorting == 'desc') {
        productToBuy.sort((a, b) => (a.total > b.total) ? 1 : ((b.total > a.total) ? -1 : 0));
    } else if (sorting == 'asc') {
        productToBuy.sort((a, b) => (a.total < b.total) ? 1 : ((b.total < a.total) ? -1 : 0));
    }
    viewAfterSorting(productToBuy);
}



function askProdDel(name) {
    if (confirm(`Do you want to delete ${name} ?`)) {
        const index = CART.findIndex((element) => element.name === name);
        CART.splice(index, 1);
        viewCardTable();
        topPanel.info("Product seccessfully delated");
     }
}
 
function changeProdStatus(name) {
    const index = CART.findIndex((element) => element.name === name);
    CART[index].isBuy = !CART[index].isBuy;
    viewCardTable();
    topPanel.info("Product status changed");
}

const DISCOUNT = [
    {
        promo:'qwe',
        type:'fixed', //or persent
        value: 15,
        isUsed: false,


    },

    {
        promo:'qwert',
        type: 'persent', //or persent
        value: 5,
        isUsed: false,
        

    }
];

function checkAndApplyDiscount() {
    const discPromo = document.getElementById('discountField').value;
    if (discPromo === '') {
        topPanel.error('Enter promocode');
        return false;
    }
    const index = DISCOUNT.findIndex(el => el.promo === discPromo);
    if (index === -1) {
        topPanel.error('Promocode not found');
        return false;
    }
    const disc = DISCOUNT[index];
   
    if (disc.isUsed) {
        topPanel.error("This promo is used");
        return false;
    }
    let newTotal = calcDiscount(disc);
    DISCOUNT[index].isUsed = true;
    document.getElementById('discValue').innerText = disc.value + (disc.type === "fixed" ? ' UAN' : " %");
    document.getElementById("totalWithDisc").innerText = (newTotal).toFixed(2);
    viewCheck(newTotal);
    document.getElementById('discountField').value = '';
}


function calcDiscount(disc) {
    const { type, value } = disc;
    const sumTotalValue = summTotal();
    switch (type) {
        case "fixed":
            return sumTotalValue - value;
        case 'persent':
            return sumTotalValue - (sumTotalValue / 100 * value);      
    }
    
}

