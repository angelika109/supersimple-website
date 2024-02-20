var code = '1234';
var entry = '';

function getE(id) { return document.getElementById(id); }

function loginKey(key) {
 var out = getE('login-code');

 entry += key;
 out.value += ' * ';
}

function loginClear() {
 var out = getE('login-code');

 entry = '';
 out.value = '';
}

function loginConfirm() {
 alert(entry);
}