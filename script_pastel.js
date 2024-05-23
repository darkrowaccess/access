function shine(element) {
    var shineEffect = document.createElement("div");
    shineEffect.classList.add("shine");
    element.appendChild(shineEffect);

    setTimeout(function() {
        shineEffect.classList.add("active");
        setTimeout(function() {
            shineEffect.remove();
        }, 1000); // Modifica el tiempo de duración del efecto si lo deseas
    }, 50);
}
