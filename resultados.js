document.addEventListener("DOMContentLoaded", function() {
  var acertos = getParameterByName('acertos');
  var userName = localStorage.getItem('currentUser');
  var userImage = localStorage.getItem('userImage');

  var userNameElement = document.getElementById('userName');
  var profileImageElement = document.getElementById('profileImage');
  var parabensElement = document.getElementById('parabens');

  if (userNameElement && profileImageElement && parabensElement) {
      userNameElement.innerText = userName;

      // Verifica se a imagem do usuário está disponível
      if (userImage) {
          profileImageElement.src = userImage;
          profileImageElement.alt = "Profile";
      } else {
          // Caso a imagem não esteja disponível, você pode definir uma imagem padrão ou ocultar o elemento
          profileImageElement.style.display = "none";
      }

      parabensElement.innerText = `Parabéns, você acertou ${acertos}/10!`;
  } else {
      console.error("Erro ao encontrar elementos no DOM.");
  }
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
