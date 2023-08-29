const products = [
  {
    id: 1,
    title: "Female Light Green Tee",
    image: "./images/products/product-cover-5.png",
    categories: ["Female", "T-Shirts"],
  },
  {
    id: 2,
    title: "Male White Tee",
    image: "./images/products/product-cover-5 (1).png",
    categories: ["Male", "T-Shirts"],
  },
  {
    id: 3,
    title: "Female Pink Tee",
    image: "./images/products/product-cover-5 (2).png",
    categories: ["Female", "T-Shirts"],
  },
  {
    id: 4,
    title: "Female Leather Jacket",
    image: "./images/products/product-cover-5 (3).png",
    categories: ["Female", "Jackets"],
  },
  {
    id: 5,
    title: "Male Leather Jacket",
    image: "./images/products/product-cover-5 (4).png",
    categories: ["Male", "Jackets"],
  },
  {
    id: 6,
    title: "Male Black Tee",
    image: "./images/products/product-cover-5 (7).png",
    categories: ["Male", "T-Shirts"],
  },
  {
    id: 7,
    title: "Female Outdoors Set",
    image: "./images/products/product-cover-5 (5).png",
    categories: ["Female", "Sets"],
  },
  {
    id: 8,
    title: "Male Outdoors Set",
    image: "./images/products/product-cover-5 (6).png",
    categories: ["Male", "Sets"],
  },
];
const categories = [];
var cart = [];

const productsSection = document.querySelector(".products .results");
const categoriesSection = document.querySelector(".products .categories");
const cartButton = document.querySelector(".cart-button");
const cartDiv = document.querySelector(".cart");
const cartBody = document.querySelector(".cart-body");
const closeButton = document.querySelector(".close-cart");

// check if cart items are available from previous sessions
if (JSON.parse(localStorage.getItem("cart"))) {
  cart = JSON.parse(localStorage.getItem("cart"));
  renderCart();
}

cartButton.addEventListener("click", (e) => {
  cartDiv.style.display = "block";
});

closeButton.addEventListener("click", () => {
  cartDiv.style.display = "none";
});

products.forEach((product) => {
  createProductNode(product);
  product.categories.forEach((cat) => {
    if (!categories.includes(cat)) {
      categories.push(cat);
    }
  });
});

if (categories.length > 0) {
  const ul = document.createElement("ul");
  // Append show all button
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.classList.add("active");
  button.innerText = "Show all";
  button.addEventListener("click", () => {
    productsSection.innerHTML = "";
    unactivateCategoryButtons();
    button.classList.add("active");
    products.forEach((product) => createProductNode(product));
  });
  li.appendChild(button);
  ul.appendChild(li);

  // append each category
  categories.forEach((cat) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = cat;
    button.addEventListener("click", () => {
      unactivateCategoryButtons();
      button.classList.add("active");
      filterProductsByCategory(cat);
    });
    li.appendChild(button);
    ul.appendChild(li);
  });
  categoriesSection.appendChild(ul);
}

function createProductNode(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  const productImage = document.createElement("img");
  productImage.setAttribute("src", product.image);
  const productTitle = document.createElement("h2");
  productTitle.innerText = product.title;
  const productAddToCart = document.createElement("button");
  productAddToCart.innerText = "Add to cart";
  productAddToCart.classList.add("add-to-cart");
  productAddToCart.addEventListener("click", () => addToCart(product));

  productDiv.appendChild(productImage);
  productDiv.appendChild(productTitle);
  productDiv.appendChild(productAddToCart);

  productsSection.appendChild(productDiv);
}

function filterProductsByCategory(cat) {
  productsSection.innerHTML = "";
  const filteredProducts = products.filter((product) =>
    product.categories.includes(cat)
  );
  filteredProducts.forEach((product) => createProductNode(product));
}

function unactivateCategoryButtons() {
  document
    .querySelectorAll(".categories button")
    .forEach((ele) => ele.classList.remove("active"));
}

function addToCart(product) {
  if (cart.find((prod) => product.id === prod.id)) {
    var index = cart.map((p) => p.id).indexOf(product.id);
    cart[index].count++;
  } else {
    var modifiedProduct = {
      ...product,
      count: 1,
    };
    cart.push(modifiedProduct);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function increaseProductCount(id) {
  if (cart.find((prod) => id === prod.id)) {
    var index = cart.map((p) => p.id).indexOf(id);
    cart[index].count++;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function decreaseProductCount(id) {
  if (cart.find((prod) => id === prod.id)) {
    var index = cart.map((p) => p.id).indexOf(id);
    if (cart[index].count <= 1) {
      cart.splice(index, 1);
    } else {
      cart[index].count--;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  console.log("cart length: ", cart.length);
  if (cart.length > 0) {
    var cartCount = 0;
    cart.forEach((item) => (cartCount += item.count));
    document.querySelector("button.cart-button span").innerText = cartCount;
    var html = `<ol class="cart-list">`;
    cart.forEach((item) => {
      html += `<li>${item.title} <div class="cart-item-actions"><button onclick="decreaseProductCount(${item.id})">-</button><span>${item.count}</span><button onclick="increaseProductCount(${item.id})">+</button></div></li>`;
    });
    html += `</ol>`;
    cartBody.innerHTML = "";
    cartBody.innerHTML += html;
  } else {
    cartBody.innerHTML = "";
    document.querySelector("button.cart-button span").innerText = cart.length;
  }
}
