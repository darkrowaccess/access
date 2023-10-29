function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    productos.forEach(producto => {
        const nombre = producto.getAttribute('data-nombre').toLowerCase();
        if (nombre.includes(input)) {
            searchResults.appendChild(producto.cloneNode(true));
        }
    });

    if (searchResults.children.length === 0) {
        searchResults.textContent = 'No se encontraron resultados.';
    }
}
