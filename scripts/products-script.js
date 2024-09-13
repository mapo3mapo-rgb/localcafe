/*
-------------------------------------------------------------------------------------------------------------------------
Handlebars section
-------------------------------------------------------------------------------------------------------------------------
*/

const data = {
  items: [
    {
      id: 0,
      title: "Smart Book",
      description:
        "We are enthusiastic about learning, and what's a better way of doing it than reading? Perferc for anyone who's a keen reader!",
      image: "./images/book.jpg",
      price: 11.95,
      quantity: 0,
    },
    {
      id: 1,
      title: "Coffee Grinder",
      description:
        "Let your coffee always be freshly grinded precisely to your taste!",
      image: "./images/grinder.jpg",
      price: 49.95,
      quantity: 0,
    },
    {
      id: 2,
      title: "Cosy Mug",
      description:
        "Non-discriminating mug. It will be happy with whatever you pour into it - be it coffee or tea or anything else you fancy!",
      image: "./images/mug.jpg",
      price: 7.45,
      quantity: 0,
    },
    {
      id: 3,
      title: "Warm Hoodie",
      description:
        "Have you ever be cold in those dreary Irish autumn evening? No need to worry about it anymore, this hoodie will get you covered!",
      image: "./images/hoodie.jpg",
      price: 25.95,
      quantity: 0,
    },
    {
      id: 4,
      title: "Rubick's Cube",
      description:
        "For the ones who likes a good mental challenege and cracking puzzles!",
      image: "./images/rubick.jpg",
      price: 14.45,
      quantity: 0,
    },
    {
      id: 5,
      title: "Fancy T-Shirt",
      description:
        "You will never have to worry about being unstilish with this on. Suitable for all lifes occasions (ok, almost all...)!",
      image: "./images/tshirt.jpg",
      price: 19.95,
      quantity: 0,
    },
  ],
};

const container = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(container);

const htmlContent = template(data);

document.getElementById("products-content").innerHTML = htmlContent;

/*
-------------------------------------------------------------------------------------------------------------------------
Event handlers and functions for the interaticon with products.html (Shop) page
-------------------------------------------------------------------------------------------------------------------------
*/

// Function that clears all values from the fields
function clearData() {
  for (const item of data.items) {
    item.quantity = 0;
  }
  const items = document.getElementsByClassName("item-input");
  console.log(items);
  for (const item of items) {
    item.innerHTML = 0;
  }
}

// Function that creates a checkout form
function generateCheckOutForm() {
  let content = "<h2>Order</h2>";

  let total = 0;
  let order =
    '<table class="table table-hover"> <tr><th>Item</th><th class="price">Quantity</th><th class="price">Price</th></tr>';

  data.items.forEach((item) => {
    if (item.quantity != 0) {
      order += `<tr><td>${item.title}</td><td class="price">${
        item.quantity
      }</td><td class="price">${(item.price * item.quantity).toFixed(
        2
      )}</td></tr>`;
      total += item.quantity * item.price;
    }
  });

  order += `<tr><td></td><td></td><th class="price">Total: &euro; ${total.toFixed(
    2
  )}</th></tr></table>`;

  let payment = " <h2>Payment Details</h2>";

  payment += '<form id="payment-info" action="#">';
  payment +=
    '<label for="name">Cardholder Name: </label> <input id="name" name="name" type="text" required />';
  payment +=
    '<label for="email">Email: </label> <input id="email" name="email" type="email" required />';
  payment +=
    '<label for="address">Billing Address: </label> <input id="address" name="address" type="text" required />';
  payment +=
    '<label for="card_number">Card Number: </label> <input id="card_number" name="card_number" type="text" required />';
  payment +=
    '<label for="expiration_date">Expire Date: </label> <input id="expiration_date" name="expiration_date" type="text" placeholder="MM/YY" required />';
  payment +=
    '<label for="security_digits">Security Digits: </label> <input id="security_digits" name="security_digits" type="text" placeholder="XXX" required />';
  payment += "</form>";

  const buttons =
    '<button id="pop-up-close" class="click-button">Close</button><button id="pop-up-submit" class="click-button">Submit</button>';

  content += order;
  content += payment;
  content += buttons;

  return content;
}

// Function that handles click on 'To Checkout'
function handlePurchase() {
  document.getElementById("shade").style.display = "block";

  const popUp = document.getElementById("pop-up");
  //const items = document.getElementsByClassName("item-input");

  // Check wether user has selected some items to purchase
  if (data.items.some((item) => item.quantity != 0)) {
    popUp.innerHTML = generateCheckOutForm();

    popUp.style.display = "block";

    document
      .getElementById("pop-up-close")
      .addEventListener("click", handleReturn);

    document
      .getElementById("pop-up-submit")
      .addEventListener("click", handleSubmit);

    // No items selected
  } else {
    popUp.innerHTML = "<h2>Ooops, nothing is selected!</h2>";
    popUp.innerHTML +=
      "<p>Please return to Shop and select what you would like to buy, before heading to checkout!</p>";

    popUp.innerHTML +=
      '<button id="pop-up-close" class="click-button">Close</button>';

    popUp.style.display = "block";

    document
      .getElementById("pop-up-close")
      .addEventListener("click", handleClick);
  }
}

function handleClick() {
  //document.getElementById("form-data").innerHTML = "";
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("pop-up").innerHTML = "";

  clearData();
  document.getElementById("shade").style.display = "none";
}

function handleReturn() {
  //document.getElementById("form-data").innerHTML = "";
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("pop-up").innerHTML = "";

  document.getElementById("shade").style.display = "none";
}

function handleSubmit() {
  const popUp = document.getElementById("pop-up");

  popUp.innerHTML = "<h2>Thank you for Shopping at Pythagorean Cafe!</h2>";
  popUp.innerHTML +=
    "<p>Your order will be on its way after we have processed the order!</p>";

  popUp.innerHTML +=
    '<button id="pop-up-close" class="click-button">Close</button>';

  document
    .getElementById("pop-up-close")
    .addEventListener("click", handleClick);
}

function handleAdd(e) {
  const elementID = e.target.classList[1];
  // Update value on the web-page
  const quantityField = document.getElementsByClassName(elementID)[2];
  quantityField.innerHTML = Number(quantityField.innerHTML) + 1;

  // Update value behind the scenes where we hold data
  for (const item of data.items) {
    if (item.id == elementID) {
      item.quantity += 1;
      console.log(`${item.title} -> ${item.quantity}`);
      break;
    }
  }
}

function handleSubtract(e) {
  const elementID = e.target.classList[1];

  const quantityField = document.getElementsByClassName(elementID)[2];

  // Check if quantity if already 0 -> do nothing
  if (quantityField.innerHTML == 0) {
    console.log("Quatity already 0.");
    return;
  }

  // Update value on the web-page
  quantityField.innerHTML = Number(quantityField.innerHTML) - 1;

  // Update value behind the scenes where we hold data
  for (const item of data.items) {
    if (item.id == elementID) {
      item.quantity -= 1;
      console.log(`${item.title} -> ${item.quantity}`);
      break;
    }
  }
}

document
  .getElementById("purchase-button")
  .addEventListener("click", handlePurchase);

// Add event listeners to "+" buttons
const addButtons = document.getElementsByClassName("add");
console.log(addButtons);
for (let i = 0; i < addButtons.length; i++) {
  //console.log(element);
  addButtons[i].addEventListener("click", handleAdd);
}

// Add event listeners to "-" buttons
const subtractButtons = document.getElementsByClassName("subtract");
console.log(subtractButtons);
for (let i = 0; i < subtractButtons.length; i++) {
  //console.log(element);
  subtractButtons[i].addEventListener("click", handleSubtract);
}
