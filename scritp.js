// Produtos e galeria embutidos para evitar problemas de fetch
const products = [
  {id:1,name:"Crochê",price:2500,image:"images/croche.jpg",description:"Crochê artesanal feito à mão"},
  {id:2,name:"Crochê Praia",price:3000,image:"images/croche_praia.jpg",description:"Ideal para praia e verão"},
  {id:3,name:"Vestido",price:4500,image:"images/vestido.jpg",description:"Vestido elegante para todas as ocasiões"}
];

const galleryImages = [
  {image:"images/croche.jpg",alt:"Crochê artesanal"},
  {image:"images/croche_praia.jpg",alt:"Crochê para praia"},
  {image:"images/vestido.jpg",alt:"Vestido elegante"}
];

// Carregar galeria
const galleryContainer = document.getElementById('gallery-container');
galleryImages.forEach(img => {
  const image = document.createElement('img');
  image.src = img.image;
  image.alt = img.alt;
  galleryContainer.appendChild(image);
});

// Carregar produtos
const productsContainer = document.getElementById('products-container');
products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <p>Preço: Kz ${p.price}</p>
    <button onclick="addToCart(${p.id})">Adicionar ao carrinho</button>
  `;
  productsContainer.appendChild(card);
});

// Carrinho funcional
let cart = [];

function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart(){
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Kz ${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = `Total: Kz ${total}`;
}
