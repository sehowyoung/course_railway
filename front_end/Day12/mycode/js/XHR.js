function xhr(url, options) {
    // - 如果我们的可选参数很多，那么我们必须要把这些参数放入到options之中; 
    /*
        {
            method : "POST" |"GET",
            // GET请求的参数 , 是以对象形式进行传递的; 
            params : {} ,
            // POST 请求参数 ; 
            body : {} , 请求参数默认会被转换为URL字符串格式; 
            // 请求头设置 
            headers : { content-type : xxxx , }
        }
    */

    /*
        部分参数是带有默认值的，所以我们需要对参数进行默认值合并处理; 
    */

    // 1. 让options默认为对象类型，避免在进行取出运算的时候发生报错; 
    // options = options || {};
    if (!isObject(options)) options = {};

    // 2. 默认参数 : 
    let _default_options = {
        method: "GET",
        callback: function () { },
        dataType: "text"
    }
    // API : Obejct.assign( obj1 , obj2 ,...objn);
    // 这个API会让obj1后面的所有对象都想obj1合并属性和属性值; 
    // 返回值是合并之后的obj1 
    options = Object.assign(_default_options, options);

    // 3. 处理我们需要的数据! 
    // url : 路径; 
    // 如果请求方式是GET，同时有params 参数传入，那么我们就需要对url路径进行拼接; 
    if (isObject(options.params)) {
        // 把params参数拼接到路径上; 
        url += "?" + formateObject(options.params);
    }

    let xhr = new XMLHttpRequest();

    xhr.open(options.method, url);

    // 请求头 : 
    if (isObject(options.headers)) {
        for (let attr in options.headers) {
            // setRequestHeader 每次调用会设置一条请求头; 
            xhr.setRequestHeader(attr, options.headers[attr]);
        }
    }
    // send有可能携带POST参数; 
    if (options.method.toUpperCase() === "POST" && isObject(options.headers) && options.headers["content-type"] === "application/x-www-form-urlencoded") {
        xhr.send(formateObject(options.body));
    } else if (options.method.toUpperCase() === "POST") {
        xhr.send(options.body);
    } else {
        xhr.send()
    }
    // 响应处理; 

    xhr.onload = function () {

        let data = xhr.responseText;
        switch (options.dataType) {
            case "text": break;
            case "json":
                data = JSON.parse(data);
                break;
        }
        // console.log(data);
        options.callback(data);
    }
}
function formateObject(params) {
    let url_parmas = "";
    for (let attr in params) {
        url_parmas += `&${attr}=${params[attr]}`;
    }
    return url_parmas.slice(1);
}
function isObject(options) {
    // 对象类型判断 : 
    // instanceof 是判定实例对象来自于那个构造函数的; 
    return typeof options === "object" && options !== null && !(options instanceof Array)
}