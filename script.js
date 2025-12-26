const menu = document.querySelector('.menu');
const toggleBtn = document.getElementById('toggleMenu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

const products = [
  { name: 'TV', price: 200, count: 30 },
  { name: 'Laptop', price: 800, count: 12 },
  { name: 'Phone', price: 500, count: 20 },
  { name: 'Tablet', price: 300, count: 15 }
];

const productsBody = document.getElementById('productsBody');

products.forEach(product => {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${product.name}</td>
    <td><span class="price">$${product.price}</span></td>
    <td><span class="count">${product.count}</span></td>
  `;

  productsBody.appendChild(row);
});

document.getElementById('usersCount').textContent = 120;
document.getElementById('postsCount').textContent = 756;
document.getElementById('productsCount').textContent = products.length;
document.getElementById('revenueCount').textContent = '$1200';


