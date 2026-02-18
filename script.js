let cart = [];

function showPage(pageId) {
  // إخفاء كل الصفحات
  const pages = document.querySelectorAll('.page-content');
  pages.forEach(p => p.style.display = 'none');
  
  // إظهار الصفحة المطلوبة
  const target = document.getElementById(pageId);
  if (target) {
    target.style.display = 'block';
  }
}

function addToCart(name) {
  cart.push(name);
  document.getElementById('cart-count').innerText = cart.length;
  updateCartUI();
  alert("✅ تم إضافة " + name + " للسلة");
}

function updateCartUI() {
  const list = document.getElementById('cart-items');
  list.innerHTML = "";
  cart.forEach((item, i) => {
    let li = document.createElement('li');
    li.style.padding = "10px 0";
    li.style.borderBottom = "1px solid #222";
    li.innerText = (i + 1) + ". " + item;
    list.appendChild(li);
  });
}

function toggleCart() {
  const m = document.getElementById('cart-modal');
  m.style.display = (m.style.display === 'block') ? 'none' : 'block';
}

function sendToWhatsApp() {
  if (cart.length === 0) return alert("السلة فارغة!");
  let text = "طلب جديد من متجر Turst:%0a" + cart.map((item, i) => (i+1) + "- " + item).join("%0a");
  window.open("https://wa.me/966502519600?text=" + text); 
}
