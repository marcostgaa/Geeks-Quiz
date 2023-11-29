document.addEventListener("DOMContentLoaded", function() {
    // Recuperar informações do localStorage
    var loggedIn = localStorage.getItem('loggedIn');
    var currentUser = localStorage.getItem('currentUser');
    var userImage = localStorage.getItem('userImage');

    // Verificar se o usuário está logado
    if (loggedIn === 'true' && currentUser) {
      // Exibir nome do usuário
      document.getElementById('userName').textContent = 'Bem-vindo, ' + currentUser;

      // Exibir imagem do usuário (se existir)
      if (userImage) {
        document.getElementById('userImage').src = userImage;
      }
    } else {
      // Redirecionar para a página de login se o usuário não estiver logado
      window.location.href = 'login.html';
    }
  });

  function saveImage() {
    // Recuperar a opção selecionada
    var selectedOption = document.getElementById('imageOptions');
    var selectedImagePath = selectedOption.value;
  
    console.log('Caminho da imagem selecionada:', selectedImagePath); // Verifique no console
  
    // Armazenar a imagem selecionada no localStorage
    localStorage.setItem('userImage', selectedImagePath);
  
    // Atualizar a exibição da imagem do usuário
    document.getElementById('userImage').src = selectedImagePath;
  
    alert('Imagem salva com sucesso!');
  }
  
  