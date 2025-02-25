const codeLines = [
  "pwd",
  "/home/XZ3R5T",
  "ls -a",
  ". .. about.txt location.txt contact.txt",
  "",
  "cat about.txt",
  "Hello! I'm a Computer Science Student",
  "",
  "cat location.txt",
  "I'm currently based in Jakarta, Indonesia",
  "",
  "cat contact.txt",
  "You can reach me at:",
  "Email: madinarawdo@gmail.com",
  "LinkedIn: linkedin.com/in/xz3r5",
  "Github: github.com/XZ3R5T"
];
  
  const codeElement = document.getElementById('codeAnimation');

  function typeLine(line, delay) {
    return new Promise((resolve) => {
      let i = 0;
      function typeChar() {
        if (i < line.length) {
          codeElement.textContent += line.charAt(i);
          i++;
          setTimeout(typeChar, 50);
        } else {
          codeElement.textContent += '\n';
          codeElement.scrollTop = codeElement.scrollHeight;
          resolve();
        }
      }
      typeChar();
    });
  }

  async function animateCode() {
    for (const line of codeLines) {
      await typeLine(line, 50);
    }
  }

  animateCode();
  