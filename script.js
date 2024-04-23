function dispararConfete() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;
    
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    (function frame() {
      var timeLeft = animationEnd - Date.now();
      var ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);
    
      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: (Math.random() * skew) - 0.2
        },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      });
    
      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    }());
}

document.addEventListener('DOMContentLoaded', function() {
    dispararConfete();
});

function dispararConfeteEmCimaDaDiv(elementoClicado) {
    const rect = elementoClicado.getBoundingClientRect();

    const x = rect.left + (rect.width / 2);
    const y = rect.top;

    confetti({
        particleCount: 50,
        spread: 50,
        startVelocity: 20,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const divsIconContainer = document.querySelectorAll('.sectiontwo__language-icon');

    divsIconContainer.forEach(function(divIconContainer) {
        divIconContainer.addEventListener('click', function(event) {
            dispararConfeteEmCimaDaDiv(event.currentTarget);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const divIconContainer = document.querySelector('.glass-shine-effect-profile');

    divIconContainer.addEventListener('click', function(event) {
      dispararEmojisNoProfile(event.currentTarget);
    });
});

function dispararEmojisNoProfile(elementoClicado) {
  const rect = elementoClicado.getBoundingClientRect();

  const x = rect.left + (rect.width / 2);
  const y = rect.top + (rect.width / 2);

  var scalar = 2;
  var unicorn = confetti.shapeFromText({ 
    text: '</>', 
    scalar,
    font: 'bold 32px Arial', 
    color: 'black', 
    opacity: 1,
    shadow: {
        color: 'black',
        blur: 10,
        offsetX: 2,
        offsetY: 2
    }
  });
  
  var defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: [unicorn],
    scalar
  };
  
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
      origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    });
  
    confetti({
      ...defaults,
      particleCount: 5,
      flat: true,
      origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    });
  
    confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ['circle'],
      origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    });
  }
  
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}