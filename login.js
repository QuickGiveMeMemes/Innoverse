function login() {
    var anyWrong = false;
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    var email = document.getElementById('mail').value;
    var account = JSON.parse(localStorage.getItem('user'));
    if (username!=account['username'] || password!=account['password'] || email!=account['email']) {
        anyWrong = true;
    }
    if (anyWrong==false) {
        var redirectLoc=localStorage.getItem('currentpage')
        localStorage.setItem('signedIn','True');
        window.location=redirectLoc;
    } else {
        alert('Wrong Username or Password or Email');
    }
}
document.getElementById('signup').addEventListener('click',e=>login());