document.querySelectorAll('a:not(#resume):not(#tech-link):not(#info-link)').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault(); 

    transitions = document.querySelectorAll('.transition')

    let count = 0; 

    transitions.forEach(function(div) {
      div.style.animation = 'fade-down 0.5s';
      div.style.opacity   = 0; 
      count++; 
    });

    document.addEventListener('animationend', function() {
      if (count === transitions.length) {
        setTimeout(function() {
          window.location.href = anchor.href;
          console.log("All animations complete, redirecting!");
        }, 250);
      }
    });

  }); 
}); 