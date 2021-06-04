function addNewUser() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    var email = document.getElementById('mail').value;
    if(username==''||password==''||email=='') {
        alert('One/Some of these input boxes are empty');
    } else {
        var newUserArray={'username':username,'password':password,'email':email};
        localStorage.setItem('signedIn','True')
        localStorage.setItem('user',JSON.stringify(newUserArray));
        window.location='dashboard.html'
    }
}
document.getElementById('signup').addEventListener('click',e=>addNewUser());