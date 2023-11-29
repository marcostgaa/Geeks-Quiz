function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Armazenar dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou realizar outras operações

    alert('Cadastro realizado com sucesso!');

    // Redirecionar para a página principal após o cadastro
    window.location.href = 'index.html'; // Substitua 'index.html' pela sua página principal
  }