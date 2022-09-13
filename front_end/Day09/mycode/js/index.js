let ele = document.getElementById('box3')
let body = document.querySelector("body")
let left = 0
let up = 0

function distance_left(ele){
    if (ele.parentNode === body){
        return ele.offsetLeft
    }
    let tmp = distance_left(ele.parentNode) + ele.offsetLeft
    return tmp
}

function distance_top(ele){
    if (ele.parentNode === body){
        return ele.offsetTop
    }
    return distance_top(ele.parentNode) + ele.offsetTop
}

left = distance_left(ele)
up = distance_top(ele)

console.log(left, up);