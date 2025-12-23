// Galeria
fetch('gallery.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('gallery-container');
    data.forEach(img => {
      const image = document.createElement('img');
      image.src = img.image;
      image.alt = img.alt;
      container.appendChild(image);
    });
  });

// Produtos
fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('products-container');
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
      container.appendChild(card);
    });
  });

// Carrinho simples
let cart = [];
function addToCart(id) {
  cart.push(id);
  alert('Produto adicionado ao carrinho!');
}
