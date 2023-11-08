function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});



// Função para abrir o modal de login
document.getElementById("loginButton").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "block";
  });
  
  // Função para fechar o modal de login
  document.getElementById("closeLoginModal").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "none";
  });
  
  // Função para abrir o modal de cadastro de produtos
  document.getElementById("cadastroProdutoButton").addEventListener("click", function() {
    document.getElementById("cadastroProdutoModal").style.display = "block";
  });
  
  // Função para fechar o modal de cadastro de produtos
  document.getElementById("closeCadastroProdutoModal").addEventListener("click", function() {
    document.getElementById("cadastroProdutoModal").style.display = "none";
  });
  
  // Fechar o modal se o usuário clicar fora da área do modal
  window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) {
      document.getElementById("loginModal").style.display = "none";
    }
    if (event.target == document.getElementById("cadastroProdutoModal")) {
      document.getElementById("cadastroProdutoModal").style.display = "none";
    }
  };
  