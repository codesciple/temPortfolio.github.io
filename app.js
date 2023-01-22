document.addEventListener("DOMContentLoaded", function(){
    var currentSection = 1;
    var numberOfSections = 5;
    var buttons = document.querySelectorAll('#scroll-button');
    for(var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        currentSection++;
        document.querySelector('#sec' + currentSection).scrollIntoView({
          behavior: 'smooth'
        });
        if (currentSection > numberOfSections) {
          currentSection = 1;
        }
      });
    }
  });

  
  
