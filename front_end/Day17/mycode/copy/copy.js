let fs = require('fs')

fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('error-----------------------');
        throw err
    }
    fs.writeFile('./copy.txt', data, 'utf-8', (err)=>{
        if (err) {
            throw err
        } else {
            console.log('success');
        }
    })
})

