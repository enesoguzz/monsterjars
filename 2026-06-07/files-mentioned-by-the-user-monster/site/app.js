const products = [
  ["Monster Jar", "milkshakes", "assets/products/milkshakes/monster-jar.png"],
  ["Nutella Nirvana", "milkshakes", "assets/products/milkshakes/nutella-nirvana.png"],
  ["Oreo Overload", "milkshakes", "assets/products/milkshakes/oreo-overload.png"],
  ["Strawberry Bliss", "milkshakes", "assets/products/milkshakes/strawberry-bliss.png"],
  ["Mocha Mayhem", "milkshakes", "assets/products/milkshakes/mocha-mayhem.png"],
  ["Peanut Butter Pleasure", "milkshakes", "assets/products/milkshakes/peanut-butter-pleasure.png"],
  ["Minty Dreams", "milkshakes", "assets/products/milkshakes/minty-dreams.png"],
  ["Crazy Cookie", "milkshakes", "assets/products/milkshakes/crazy-cookie.png"],
  ["Snallygaster", "ice-cream", "assets/products/ice-cream/snallygaster.png"],
  ["Cookie Butter", "ice-cream", "assets/products/ice-cream/cookie-butter.png"],
  ["Chocolate Peanut Butter", "ice-cream", "assets/products/ice-cream/chocolate-peanut-butter.png"],
  ["Mocha Cookie Crumble", "ice-cream", "assets/products/ice-cream/mocha-cookie-crumble.png"],
  ["Black Raspberry", "ice-cream", "assets/products/ice-cream/black-raspberry.png"],
  ["Sea Salted Caramel", "ice-cream", "assets/products/ice-cream/sea-salted-caramel.png"],
  ["Chocolate Chip Cookie Dough", "ice-cream", "assets/products/ice-cream/chocolate-chip-cookie-dough.png"],
  ["Vanilla", "ice-cream", "assets/products/ice-cream/vanilla.png"],
  ["Chocolate", "ice-cream", "assets/products/ice-cream/chocolate.png"],
  ["Strawberry", "ice-cream", "assets/products/ice-cream/strawberry.png"],
  ["Mint Chip", "ice-cream", "assets/products/ice-cream/mint-chip.png"],
  ["Coconut", "ice-cream", "assets/products/ice-cream/coconut.png"],
  ["Hibiscus Guava", "juices", "assets/products/juices/hibiscus-guava.png"],
  ["Blueberry Mojito", "juices", "assets/products/juices/blueberry-mojito.png"],
  ["Pineapple Mango", "juices", "assets/products/juices/pineapple-mango.png"],
  ["Cucumber Chia", "juices", "assets/products/juices/cucumber-chia.png"],
  ["Watermelon", "juices", "assets/products/juices/watermelon.png"],
  ["Banana Milk", "juices", "assets/products/juices/banana-milk.png"],
  ["Horchata", "juices", "assets/products/juices/horchata.png"]
];

const menuMap = {
  "main-menu": ["Main Menu", "assets/menus/main-menu.png"],
  milkshakes: ["Milkshakes", "assets/menus/milkshakes.png"],
  "ice-creams": ["Ice Creams", "assets/menus/ice-creams.png"],
  juices: ["Juices", "assets/menus/juices.png"],
  "allergen-guide": ["Allergen Guide", "assets/menus/allergen-guide.png"]
};

const categoryNames = {
  milkshakes: "Milkshake",
  "ice-cream": "Ice Cream",
  juices: "Juice"
};

const productGrid = document.querySelector("#product-grid");
const tabs = document.querySelectorAll(".tab");
const menuButtons = document.querySelectorAll(".menu-button");
const menuImage = document.querySelector("#menu-image");
const menuCaption = document.querySelector("#menu-caption");
const zoomButton = document.querySelector("#zoom-menu");
const dialog = document.querySelector("#menu-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogClose = document.querySelector(".dialog-close");

function renderProducts(category = "all") {
  const visibleProducts = products.filter((product) => category === "all" || product[1] === category);
  productGrid.innerHTML = visibleProducts
    .map(([name, productCategory, image]) => `
      <article class="product-card">
        <img src="${image}" alt="${name}">
        <div>
          <p>${categoryNames[productCategory]}</p>
          <h3>${name}</h3>
        </div>
      </article>
    `)
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderProducts(tab.dataset.category);
  });
});

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const [label, image] = menuMap[button.dataset.menu];
    menuButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    menuImage.src = image;
    menuImage.alt = label;
    menuCaption.textContent = label;
    dialogImage.src = image;
    dialogImage.alt = label;
  });
});

zoomButton.addEventListener("click", () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

renderProducts();
