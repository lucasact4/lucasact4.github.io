function dispararConfete() {
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function frame() {
    var timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return;

    var ticks = Math.max(100, 300 * (timeLeft / duration)); // Reduzindo os ticks
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 2,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        y: (Math.random() * skew) - 0.2
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4)
    });

    setTimeout(() => requestAnimationFrame(frame), 100);
  }

  frame();
}

document.addEventListener('DOMContentLoaded', function() {
    dispararConfete();
});

function dispararConfeteEmCimaDaDiv(elementoClicado, comCorações = false) {
  const rect = elementoClicado.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top;

  confetti({
      particleCount: 10,
      spread: 100,
      startVelocity: 25,
      origin: { x: x / window.innerWidth, y: y / window.innerHeight }
  });

  if (comCorações) {
    dispararEmojisDeCoracao(elementoClicado);
  }
}


function dispararEmojisDeCoracao(elementoClicado) {
  const rect = elementoClicado.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  var scalar = 1.5;
  var heartEmoji = confetti.shapeFromText({ 
      text: '❤️',  
      scalar,
      font: 'bold 28px Arial', 
      opacity: 0.9
  });

  var defaults = {
      spread: 120,
      ticks: 100,
      gravity: -0.2,
      decay: 0.95,
      startVelocity: 5,
      shapes: [heartEmoji],
      scalar
  };

  function shoot() {
      confetti({
          ...defaults,
          particleCount: 2,
          origin: { x: x / window.innerWidth, y: y / window.innerHeight }
      });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 300);
  setTimeout(shoot, 600);
  setTimeout(shoot, 900);
}

document.addEventListener('DOMContentLoaded', function() {
  const divsIconContainer = document.querySelectorAll('.sectiontwo__icon-container');

  divsIconContainer.forEach(function(container) {
      container.addEventListener('click', function(event) {
          const languageName = container.querySelector('.sectiontwo__language-name');
          const comCorações = languageName && languageName.classList.contains('with-heart');

          dispararConfeteEmCimaDaDiv(event.currentTarget, comCorações);
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

function highlightButton(card) {
  const button = card.querySelector('#project-btn');

  button.classList.add('highlight-btn');

  setTimeout(() => {
      button.classList.remove('highlight-btn');
  }, 300);
}

// Loading Tooltip
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
          delay: { "show": 0, "hide": 100 },
          template: '<div class="tooltip custom-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          offset: [0, 21]
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion-button-project").forEach(button => {
      button.addEventListener("click", function () {
          const imgContainer = this.closest(".project-card").querySelector(".img-executed-challenge");
          
          if (this.classList.contains("collapsed")) {
              imgContainer.style.height = "50px";
          } else {
              imgContainer.style.height = "167px";
              
              const accordionItem = this.closest(".accordion-item");
              const offset = 200;

              window.scrollTo({
                  top: accordionItem.getBoundingClientRect().top + window.scrollY - offset,
                  behavior: 'smooth'
              });
          }
      });
  });
});