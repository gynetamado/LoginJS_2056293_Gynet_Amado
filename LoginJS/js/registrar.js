const name = document.getElementById('name');
const nick = document.getElementById('nick');
const pass = document.getElementById('pass');
const form = document.getElementById('form');

const alert = document.getElementById('alert');

var val = 0;

var userList = [];

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(userList));
} else {
    userList = JSON.parse(localStorage.getItem('users'));
}

function addUser(name, nick, pass) {
    userList.push({ 'name': name, 'nick': nick, 'pass': pass });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    for (var i = 0; i < JSON.parse(localStorage.getItem('users')).length; i++){
        if (JSON.parse(localStorage.getItem('users'))[i].nick == nick.value) {
            val += 1;
        }
    }

    if (val > 0) {
        val = 0;
        alert.className = 'alert alert-warning';
        alert.style.display = 'block';
        alert.innerText = 'Ya existe un registro con este nombre de usuario';
        setTimeout(function () { alert.style.display = 'none'; alert.className = ''; }, 2500);
    } else {
        val = 0;
        addUser(name.value, nick.value, pass.value)
        localStorage.setItem('users', JSON.stringify(userList));
        alert.className = 'alert alert-success';
        alert.style.display = 'block';
        alert.innerText = 'Usuario registrado correctamente';
        form.reset();
        setTimeout(function () { alert.style.display = 'none'; alert.className = ''; }, 2500);
        
    }
})




