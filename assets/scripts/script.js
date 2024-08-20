document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      
      // Check if the href is an external link
      if (href.startsWith('http') || href.startsWith('mailto')) {
        window.location.href = href;
      } else {
        // internal navigation
        if (href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = targetPosition - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } else {
          // external or relative link navigation
          window.location.href = href;
        }
      }
    });
  });
  

const words = ["Hello", "Привет", "你好", "مرحبًا", "Salam", "こんにちは"];
let wordIndex = 0;

// Function for updating the greeting text
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = words[wordIndex] + ', my name is';
    wordIndex = (wordIndex + 1) % words.length;
}
setInterval(updateGreeting, 1000);
updateGreeting();

// If you're interested enough to view this source code, I'd like to say thank you for visiting my website!