//HOMEWORK

class Students {
  constructor(id, firstName, lastName, age, avgScore) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.avgScore = avgScore;
  }
}

let studentsManager = {
  students: [],
  nextId: 1,

  add(firstName, lastName, age, avgScore) {
    let newStudent = new Students(
      this.nextId++,
      firstName,
      lastName,
      age,
      avgScore
    );
    this.students.push(newStudent);
    this.renderTable();
  },

  remove(id) {
    id = parseInt(id);
    let index = this.students.findIndex((student) => student.id === id);

    if (index !== -1) {
      this.students.splice(index, 1);
      document.querySelector(
        "#message"
      ).textContent = `Студент з ID ${id} успішно видалений.`;
    } else {
      document.querySelector(
        "#message"
      ).textContent = `Студента з ID ${id} не знайдено.`;
    }

    document.querySelector("#input-id").value = "";
    this.renderTable();
  },

  find(id) {
    return this.students.find((student) => student.id === parseInt(id)) || null;
  },

  renderTable() {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = "";

    this.students.forEach((student) => {
      let row = `<tr>
                  <td class="td-tbl">${student.id}</td>
                  <td class="td-tbl">${student.firstName}</td>
                  <td class="td-tbl">${student.lastName}</td>
                  <td class="td-tbl">${student.age}</td>
                  <td class="td-tbl">${student.avgScore}</td>
                </tr>`;
      tableBody.insertAdjacentHTML("beforeend", row);
    });
  },
};

document
  .querySelector("#studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let age = document.querySelector("#age").value;
    let avgScore = document.querySelector("#avgScore").value;

    studentsManager.add(firstName, lastName, age, avgScore);

    document.querySelector("#studentForm").reset();
    document.querySelector("#message").textContent = "";
  });

document.querySelector("#find").onclick = function () {
  let id = document.querySelector("#input-id").value;
  let message = document.querySelector("#message");
  let student = studentsManager.find(id);
  if (student) {
    message.textContent = `Студент з ID ${student.id} - ${student.firstName} ${student.lastName}, вік: ${student.age} р., середній бал: ${student.avgScore}`;
  } else {
    message.textContent = `Студент з ID ${id} не знайдений`;
  }

  document.querySelector("#input-id").value = "";
};

document.querySelector("#remove").onclick = function () {
  let id = document.querySelector("#input-id").value;
  studentsManager.remove(id);
};

// CLASSWORK

let shopDatabase = {
  products: [
    { name: "iceCream", price: 50 },
    { name: "cupcake", price: 80 },
    { name: "cake", price: 500 },
    { name: "juice", price: 70 },
    { name: "coffee", price: 60 },
  ],

  add: function (name, price) {
    this.products.push({ name: name, price: price });
  },

  remove: function (name) {
    let product = this.products.filter((x) => x.name === name)[0];
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  },
};

// console.log(shopDatabase.products);

// shopDatabase.add("pizza", 300);
// console.log([...shopDatabase.products]);

// shopDatabase.remove("cake");
// console.log([...shopDatabase.products]);

let shoppingCart = {
  cart: [],

  add(product, count) {
    this.cart.push({ product: product, count: count });
  },

  getTotalPrice() {
    return this.cart.reduce(
      (sum, item) => sum + item.product.price * item.count,
      0
    );
  },

  clearCart() {
    this.cart = [];
  },
};

let uiController = {
  showCost() {
    shopDatabase.products.forEach((product) => {
      let input = document.querySelector(`#quantity-${product.name}`);
      if (input) {
        input.addEventListener("input", () => {
          let count = +input.value;
          let costElement = document.querySelector(`#cost-${product.name}`);
          if (costElement) {
            costElement.textContent = count * product.price;
          }
        });
      }
    });
  },

  showTotalPrice() {
    let totalPrice = shoppingCart.getTotalPrice();
    document.querySelector(".result-sweets span").textContent = totalPrice;
  },
};

uiController.showCost();

document.querySelector("#count-sweets").onclick = function () {
  shoppingCart.clearCart();

  shopDatabase.products.forEach((product) => {
    let input = document.querySelector(`#quantity-${product.name}`);
    let count = 0;
    if (input) {
      count = +input.value;
    }

    if (count >= 0) {
      shoppingCart.add(product, count);
    }

    uiController.showTotalPrice();
  });
};

// Функція фабрика (можна використовувати, коли є лише властивості, без методів)

function createGoods(id, name, price) {
  let goods = {};

  goods.id = id;
  goods.name = name;
  goods.price = price;
  goods.displayInfo = function display() {
    console.log(this.id);
    console.log(this.name);
    console.log(this.price);
  };

  return goods;
}

// Конструктор

class Goods {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  displayInfo() {
    console.log(this.id);
    console.log(this.name);
    console.log(this.price);
  }
}

// let goodss = [createGoods(1, 'Phone', 5000), createGoods(2, 'Laptop', 50000)]

let goods1 = createGoods(1, "Phone", 5000);
let goods2 = createGoods(2, "Laptop", 50000);

let goods3 = new Goods(3, "Desktop", 30000);
let goods4 = new Goods(4, "Tablet", 10000);

goods1.displayInfo();
goods2.displayInfo();

goods3.displayInfo();
goods4.displayInfo();
