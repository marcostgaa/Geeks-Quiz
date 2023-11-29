$(document).ready(function() {
    var loggedIn = localStorage.getItem('loggedIn');
    var currentUser = localStorage.getItem('currentUser');
    var userImage = localStorage.getItem('userImage');

    if (loggedIn === 'true' && currentUser) {
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

        if (loggedIn === 'true' && currentUser) {
            $('#userName').text(currentUser);

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

    colorPicker.click();
}
