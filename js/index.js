
console.log("Your index.js file is loaded correctly!");
document.querySelector('.viewProjectsButton').addEventListener('click', function() {
    const myWorkSection = document.querySelector('.myWork');
    myWorkSection.scrollIntoView({ behavior: 'smooth' });
  });
  