// Gestión interactiva: Carrito de compras, filtros de catálogo y newsletter
document.addEventListener('DOMContentLoaded', () => {
    let carrito = [];
    
    const cartCount = document.getElementById('cartCount');
    const carritoItems = document.getElementById('carritoItems');
    const carritoTotal = document.getElementById('carritoTotal');
    const btnCheckout = document.getElementById('btnCheckout');
    
    // 1. Agregar productos al carrito
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const nombre = btn.getAttribute('data-name');
            const precio = parseFloat(btn.getAttribute('data-price'));
            
            carrito.push({ nombre, precio, id: Date.now() });
            actualizarCarrito();
            
            // Animación visual del botón
            btn.classList.replace('btn-dark', 'btn-success');
            setTimeout(() => {
                btn.classList.replace('btn-success', 'btn-dark');
            }, 600);
        });
    });

    function actualizarCarrito() {
        cartCount.textContent = carrito.length;
        
        if (carrito.length === 0) {
            carritoItems.innerHTML = '<p class="text-muted text-center my-5">Tu bolsa de compras está vacía.</p>';
            carritoTotal.textContent = 'S/ 0.00';
            return;
        }

        carritoItems.innerHTML = '';
        let total = 0;

        carrito.forEach((item, index) => {
            total += item.precio;
            const itemEl = document.createElement('div');
            itemEl.className = 'd-flex justify-content-between align-items-center cart-item-row';
            itemEl.innerHTML = `
                <div>
                    <div class="fw-bold small text-dark">${item.nombre}</div>
                    <div class="text-muted small">S/ ${item.precio.toFixed(2)}</div>
                </div>
                <button class="btn btn-sm btn-outline-danger border-0 rounded-circle" onclick="eliminarDelCarrito(${index})" title="Eliminar">
                    <i class="bi bi-trash3"></i>
                </button>
            `;
            carritoItems.appendChild(itemEl);
        });

        carritoTotal.textContent = `S/ ${total.toFixed(2)}`;
    }

    // Función para remover items
    window.eliminarDelCarrito = (index) => {
        carrito.splice(index, 1);
        actualizarCarrito();
    };

    // Checkout modal demo
    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            if (carrito.length === 0) {
                alert('Tu bolsa de compras está vacía. Añade prendas para continuar.');
            } else {
                alert(`¡Gracias por tu compra! Procesando pedido de ${carrito.length} prendas por un valor de ${carritoTotal.textContent}.`);
                carrito = [];
                actualizarCarrito();
            }
        });
    }

    // 2. Filtros de categoría en catálogo
    const filterButtons = document.querySelectorAll('#filtros button');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('btn-dark', 'active');
                b.classList.add('btn-outline-dark');
            });
            btn.classList.remove('btn-outline-dark');
            btn.classList.add('btn-dark', 'active');

            const category = btn.getAttribute('data-filter');
            productItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 3. Formulario Newsletter
    const newsForm = document.getElementById('newsletterForm');
    const newsMsg = document.getElementById('newsletterMsg');
    if (newsForm && newsMsg) {
        newsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            newsForm.reset();
            newsMsg.classList.remove('d-none');
            setTimeout(() => newsMsg.classList.add('d-none'), 4000);
        });
    }
});
