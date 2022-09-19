document.querySelector('.btn-user').addEventListener('click', async function(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let rpassword = document.getElementById('rpassword').value
    let nickname = document.getElementById('nickname').value

    console.log(username, password, rpassword, nickname);
    
    let res = await xhr('http://localhost:8888/users/register', {
        method: 'POST',
        headers: {
            "content-type" : "application/x-www-form-urlencoded"
        },
        body: {
            'username' : username,
            'password' : password,
            'rpassword' : rpassword,
            'nickname' : nickname,
        },
        dataType: 'json'
    })

    console.log(res);

    switch (res.code) {
        case 0:
            alert('注册失败')
            break;
    
        case 1:
            // alert('注册成功')
            location.href='./login.html'
            break;
    }
})