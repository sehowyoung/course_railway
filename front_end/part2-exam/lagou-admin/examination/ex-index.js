let user = JSON.parse(localStorage.getItem('UID'))
let al_lo = document.getElementById('already-login')
let lo = document.getElementById('login')

console.log(user);

if (user.nickname) {
    al_lo.style.display = 'block'
    lo.style.display = 'none'
    let username = document.getElementById('username')
    username.innerText = user.username
} else {
    al_lo.style.display = 'none'
    lo.style.display = 'block'
}