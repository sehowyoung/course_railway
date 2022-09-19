function XtRouter( selector  , router_list ){
    // selector : 选择符  , 我们要使用选择符选中dom对象; 
    // router_list 我们要根据路由表数据去加载我们需要的内容; 
    let dom = document.querySelector( selector )
    window.addEventListener("hashchange" ,async function(){
        let hash = location.hash ; 
        // url#hash
        // hash => "#hash"
        hash = hash.slice(1);
        
        let item = router_list[hash];

        // 因为路由表里面的参数可能比较多，所以我们根据不同的参数实现不同的功能; 
        for(let attr in item){
            switch( attr ){
                case "src" : 
                    // 如果已经加载过数据，那么就没必要再去加载数据; 
                    if( item.data ){
                        dom.innerHTML = item.data;
                        return false;
                    }
                    let data = await loadRouterData(item[attr]);
                    // 如果我们按照常规方式去进行数据加载的话，那么每次路由改变都是一个请求， 这样的请求请求的结果是一致的，所以我们可以对数据进行缓存; 
                    item["data"] = data;
                    dom.innerHTML = data;
                break;
                // 支持路由表配置component功能; 
                case "component" :
                     dom.innerHTML = item.component;
                     break;
            }
        }
    })
}
async function loadRouterData(url){
    // 发送ajax请求加载数据; 
    let data = await xhr( url );
    return data ; 
}