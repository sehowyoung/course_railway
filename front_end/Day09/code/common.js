function countDown( date_string ){
    // 1. 拆分参数字符串 : 
    let date_array = date_string.split(" ");

    // 2. 保存日期对象 : 
    let d = null, date = null;
    switch( date_array.length ){
        case 1 : 
            // 只传递了年月日; 
            date = date_array[0].split("-");
            d = new Date( date[0] , date[1] - 1 , date[2]);
            break;
        case 2 : 
            // 传递了年于日时分秒; 
            date = date_array[0].split("-");
            let time = date_array[1].split(":");
            d = new Date( date[0] , date[1] - 1 , date[2] , time[0] , time[1] , time[2] );
    }

    // 3. 获取时间戳差值; 
    let reduce = d.getTime() - Date.now();
    // 负数处理 : 

    if( reduce <= 0 ){
        // throw "倒计时日期过期";

        return {
            message : "倒计时日期过期"
        }
    }

    // 4. 把日期对象格式化，放入对象之中; ;
    let res = {};

    // 放入倒计时秒信息; 
    // - e+ 表示数字后面有多少个0;
    res.second = parseInt(reduce / 1e+3 ) % 60 ;
    res.minute = parseInt(reduce / 6e+4 ) % 60 ;
    res.hour = parseInt(reduce / 36e+5 );
    //  小时的处理需要注意 : 
    // - 如果小时大于24 ，那么我们添加天数; 
    // - 如果小时小于等于24 那么我们不添加天数; 
    if(res.hour > 24){
        res.day = parseInt(res.hour / 24)
        res.hour %= 24
    }
    
    return res;             
}

