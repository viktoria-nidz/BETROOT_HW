"use strict";

var topPanel = {
  show: function show(text, className) {
    var panel = "<div id=\"top-panel\" class=\"top-panel ".concat(className, "\">").concat(text, "</div>");

    if (document.getElementById('top-panel') !== null) {
      document.getElementById('top-panel').remove();
    }

    document.body.insertAdjacentHTML('afterbegin', panel);
    this.hide();
  },
  hide: function hide() {
    setTimeout(function () {
      if (document.getElementById("top-panel") !== null) {
        document.getElementById('top-panel').remove();
      }
    }, 3000);
  },
  error: function error(text) {
    this.show(text, 'panel-error');
  },
  success: function success(text) {
    this.show(text, 'panel-success');
  },
  info: function info(text) {
    this.show(text, 'panel-info');
  }
};
var CART = [];
viewCardTable();

function addToCart(name, qty, price) {
  if (CART.find(function (el) {
    return el.name === name;
  }) === undefined) {
    CART.push({
      name: name,
      qty: qty,
      isBuy: false,
      price: price,
      total: parseFloat((qty * price).toFixed(2))
    });
    topPanel.success("Product successfully added");
  } else {
    var prodIndex = CART.findIndex(function (el) {
      return el.name === name;
    });
    var newQty = CART[prodIndex].qty + qty;
    CART[prodIndex].qty = newQty;
    CART[prodIndex].total = parseFloat((newQty * CART[prodIndex].price).toFixed(2));
    topPanel.success("Product quantity changed");
  }

  viewCardTable();
}

function checkAndAddToCart() {
  var name = document.getElementById('product_name').value,
      qty = parseInt(document.getElementById('product_qty').value),
      price = parseFloat(document.getElementById('product_price').value);
  var valid = true;

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
  var index = CART.findIndex(function (el) {
    return el.name === name;
  });
  var newQty = 0;

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
  var html = '';
  CART.sort(function (a, b) {
    return Number(b.isBuy) - Number(a.isBuy);
  });
  CART.forEach(function (product) {
    html += " <tr>\n                <td> ".concat(product.name, "</td>\n                <td>").concat(product.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>', "</td>\n                <td>\n                <button class=\"btn btn-info btn-sm\" onclick=\"changeProductQty('").concat(product.name, "', 'dec')\">-</button>\n                ").concat(product.qty, "\n                <button class=\"btn btn-info btn-sm\" onclick=\"changeProductQty('").concat(product.name, "', 'inc')\">+</button>\n                </td>\n                <td> ").concat(product.price.toFixed(2), " </td>\n                <td> ").concat(product.total.toFixed(2), "</td>\n                <td>\n                <button type=\"button\" class=\"btn btn-primary\" onclick=\"changeProdStatus('").concat(product.name, "')\"> Change status </button>\n                <button type=\"button\" class=\"btn btn-danger\" onclick=\"askProdDel('").concat(product.name, "')\">&times;</button>\n                </td>\n            </tr>");
  });
  document.getElementById('cart-tbody').innerHTML = html;
  document.getElementById('cart-total').innerText = summTotal().toFixed(2);
}

viewCardTable();

function summTotal() {
  return CART.reduce(function (prev, curr) {
    return prev + curr.total;
  }, 0);
} //CHECK


var productToBuy = CART.filter(function (elem) {
  return elem.isBuy === true;
});

function sumToPay() {
  return productToBuy.reduce(function (prev, curr) {
    return prev + curr.total;
  }, 0);
}

function viewCheck() {
  var newTotal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var text = '';
  productToBuy = CART.filter(function (elem) {
    return elem.isBuy === true;
  });
  productToBuy.forEach(function (product) {
    text += " <tr>\n                <td> ".concat(product.name, "</td>\n                <td> ").concat(product.qty, "</td>\n                <td> ").concat(product.price.toFixed(2), " </td>\n                <td> ").concat(product.total.toFixed(2), "</td>\n            </tr>");
  });
  document.getElementById('check-tbody').innerHTML = text;

  if (newTotal === 0) {
    document.getElementById('check-total').innerText = sumToPay().toFixed(2);
  } else {
    document.getElementById('check-total').innerText = newTotal.toFixed(2);
  }
}

function viewAfterSorting(productToBuy) {
  var text = '';
  productToBuy.forEach(function (product) {
    text += " <tr>\n                <td> ".concat(product.name, "</td>\n                <td> ").concat(product.qty, "</td>\n                <td> ").concat(product.price.toFixed(2), " </td>\n                <td> ").concat(product.total.toFixed(2), "</td>\n            </tr>");
  });
  document.getElementById('check-tbody').innerHTML = text;
}

function setSorting() {
  var sorting = document.getElementById('sorting').value;

  if (sorting == 'az') {
    productToBuy.sort(function (a, b) {
      return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
    });
  } else if (sorting == 'za') {
    productToBuy.sort(function (a, b) {
      return a.name > b.name ? -1 : b.name > a.name ? 1 : 0;
    });
  } else if (sorting == 'desc') {
    productToBuy.sort(function (a, b) {
      return a.total > b.total ? 1 : b.total > a.total ? -1 : 0;
    });
  } else if (sorting == 'asc') {
    productToBuy.sort(function (a, b) {
      return a.total < b.total ? 1 : b.total < a.total ? -1 : 0;
    });
  }

  viewAfterSorting(productToBuy);
}

function askProdDel(name) {
  if (confirm("Do you want to delete ".concat(name, " ?"))) {
    var index = CART.findIndex(function (element) {
      return element.name === name;
    });
    CART.splice(index, 1);
    viewCardTable();
    topPanel.info("Product seccessfully delated");
  }
}

function changeProdStatus(name) {
  var index = CART.findIndex(function (element) {
    return element.name === name;
  });
  CART[index].isBuy = !CART[index].isBuy;
  viewCardTable();
  topPanel.info("Product status changed");
}

var DISCOUNT = [{
  promo: 'qwe',
  type: 'fixed',
  //or persent
  value: 15,
  isUsed: false
}, {
  promo: 'qwert',
  type: 'persent',
  //or persent
  value: 5,
  isUsed: false
}];

function checkAndApplyDiscount() {
  var discPromo = document.getElementById('discountField').value;

  if (discPromo === '') {
    topPanel.error('Enter promocode');
    return false;
  }

  var index = DISCOUNT.findIndex(function (el) {
    return el.promo === discPromo;
  });

  if (index === -1) {
    topPanel.error('Promocode not found');
    return false;
  }

  var disc = DISCOUNT[index];

  if (disc.isUsed) {
    topPanel.error("This promo is used");
    return false;
  }

  var newTotal = calcDiscount(disc);
  DISCOUNT[index].isUsed = true;
  document.getElementById('discValue').innerText = disc.value + (disc.type === "fixed" ? ' UAN' : " %");
  document.getElementById("totalWithDisc").innerText = newTotal.toFixed(2);
  viewCheck(newTotal);
  document.getElementById('discountField').value = '';
}

function calcDiscount(disc) {
  var type = disc.type,
      value = disc.value;
  var sumTotalValue = summTotal();

  switch (type) {
    case "fixed":
      return sumTotalValue - value;

    case 'persent':
      return sumTotalValue - sumTotalValue / 100 * value;
  }
}