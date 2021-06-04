if(localStorage.getItem('signedIn')=='True') {
    var info=JSON.parse(localStorage.getItem('user'))
    var username=info['username']
    var welcomeText=document.createElement('p')
    welcomeText.innerHTML='Welcome, '+String(username);
    welcomeText.id='welcome'
    document.getElementById('login').style.display='None';
    document.getElementById('signup').style.display='None';
    document.getElementById('headbar').appendChild(welcomeText)
}