document.querySelector('.btn-user').addEventListener('click', async ()=>{
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    let res = await xhr('http://localhost:8888/users/login', {
        method: 'POST',
        headers: {
            "content-type" : "application/x-www-form-urlencoded"
        },
        body: {
            'username' : username,
            'password' : password
        },
        dataType: 'json'
    })

    console.log(res);

    switch (res.code) {
        case 0:
            alert('用户名或密码错误')
            break;
    
        case 1:
            localStorage.setItem('token', res.token)
            localStorage.setItem('UID', JSON.stringify(res.user))
            console.log(localStorage.getItem('token'));
            console.log(localStorage.getItem('UID'));
            location.href = './index.html'
            break;
    }
})