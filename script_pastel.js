function shine(element) {
    var shineEffect = document.createElement("div");
    shineEffect.classList.add("shine");
    element.appendChild(shineEffect);

    setTimeout(function() {
        shineEffect.classList.add("active");
        setTimeout(function() {
            shineEffect.remove();
        }, 2000); // Duración del efecto de brillo
    }, 50);
}
