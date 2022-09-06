function isSushu(k){
    let i ;
    for( i = 2; i < parseInt(k / 2) ; i ++ ){
        if( k % i === 0 ){
            // 是不是素数 ? 
            break;
        }
    }
    // 三目运算的三个部分之中都不能写return! 
    // 我们只能返回三目运算的结果; 
    return i === parseInt(k / 2);
}