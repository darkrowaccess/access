function searchProducts() {
    const input = normalizeText(document.getElementById('searchInput').value).toLowerCase();
    const productos = document.querySelectorAll('.producto');
    const searchResults = document.getElementById('searchResults');

    // Borra los resultados anteriores
    searchResults.innerHTML = '';

    productos.forEach(producto => {
        const nombre = normalizeText(producto.getAttribute('data-nombre')).toLowerCase();
        if (nombre.includes(input)) {
            // Solo agrega el producto si coincide con la búsqueda actual
            const productoClonado = producto.cloneNode(true);
            searchResults.appendChild(productoClonado);
        }
    });

    if (searchResults.children.length === 0) {
        searchResults.textContent = 'No se encontraron resultados.';
    }
}
