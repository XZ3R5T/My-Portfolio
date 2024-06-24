const codeLines = [
    "pwd",
    "/home/XZ3R5T",
    "ls -a",
    ". .. about.txt location.txt contact.txt",
    "",
    "cat about.txt",
    "Hello! I'm a cybersecurity enthusiast and a web developer.",
    "",
    "cat location.txt",
    "I'm currently based in Jakarta, Indonesia",
    "",
    "cat contact.txt",
    "You can reach me at:",
    "Email: madinarawdo@protonmail.com",
    "LinkedIn: linkedin.com/in/rawdo-madina",
    "Github: github.com/XZ3R5T"
  ];
  
  const codeElement = document.getElementById('codeAnimation');
  
  function animateCode() {
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            codeElement.textContent += line + '\n';
            codeElement.scrollTop = codeElement.scrollHeight; 
        }, 1000 * index); 
    });
  }
  
  animateCode();
  
  