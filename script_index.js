/*const sliderTopcontainer = document.querySelector(".slider-topcontainer");
const images = sliderTopcontainer.children;

// Duplique les images pour un effet de défilement fluide
for (let i = 0; i < images.length; i++) {
  const clone = images[i].cloneNode(true);
  sliderTopcontainer.appendChild(clone);
}*/
document.getElementById("go-section").addEventListener("click", function () {
  const target = document.getElementById("footrose");
  const targetPosition = target.offsetTop; // Position de la cible
  const startPosition = window.pageYOffset; // Position actuelle de défilement
  const distance = targetPosition - startPosition; // Distance à parcourir
  const duration = 10000; // Durée en millisecondes ici c'est genre 1 seconde en équivalence
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
});

/*document.getElementById("footrose").scrollIntoView({
    behavior: "smooth", // Animation fluide
    block: "start", // Défile jusqu'au début de l'élément cible
  });
});*/
