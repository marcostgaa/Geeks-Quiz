function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Recuperar a senha do localStorage
    var storedPassword = localStorage.getItem('password');

    // Verificar as credenciais (lógica de exemplo)
    if (username === localStorage.getItem('username') && password === storedPassword) {
      // Login bem-sucedido

      // Armazenar informações de login no localStorage
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('currentUser', username);

      // Redirecionar para a página principal após o login
      window.location.href = 'profile.html'; // Substitua 'index.html' pela sua página principal
    } else {
      // Login falhou
      alert('Login falhou. Verifique suas credenciais.');
    }
  }