$(document).ready(function() {
    var loggedIn = localStorage.getItem('loggedIn');
    var currentUser = localStorage.getItem('currentUser');
    var userImage = localStorage.getItem('userImage');

    // Verificar se o usuário está logado
    if (loggedIn === 'true' && currentUser) {
        // Exibir nome do usuário
        $('#userName').text('Bem-vindo, ' + currentUser);

        if (userImage) {
            $('#profileImage').attr('src', userImage);
        }
    } else {
        window.location.href = 'login.html';
    }
});

function toggleSidebar() {
    const sidebar = $('#mySidebar');
    const isOpen = sidebar.css('left') === '0';

    sidebar.css('left', (sidebar.css('left') === '-200px') ? '0' : '-200px');

    if (!isOpen) {
        var loggedIn = localStorage.getItem('loggedIn');
        var currentUser = localStorage.getItem('currentUser');
        var userImage = localStorage.getItem('userImage');

        // Verificar se o usuário está logado
        if (loggedIn === 'true' && currentUser) {
            // Exibir nome do usuário
            $('#userName').text(currentUser);

            // Exibir imagem do usuário (se existir)
            if (userImage) {
                $('#profileImage').attr('src', userImage);
            }
        }
    }
}

function changeNameColor() {
    const profileName = $('#userName');
    const colorPicker = $('#colorPicker');

    profileName.css('color', colorPicker.val());
}

function openColorPicker() {
    const colorPicker = $('#colorPicker');

    // Abre a paleta de cores
    colorPicker.click();
}
