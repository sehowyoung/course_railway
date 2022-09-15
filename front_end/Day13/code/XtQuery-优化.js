;(function( window ){
   
    function XtQuery( selector ){
        // 判定selector 是字符串，那么我们就确定这个selector是选择符，我们使用选择器选择DOM对象，然后把DOM对象放到实例对象上; 
        if(typeof selector === "string"){
            this.selector( selector );
        }
    }

    XtQuery.prototype = {
        constructor : XtQuery , 
        selector : function( selector ){
            let eles = document.querySelectorAll( selector );
    
            // 把eles里面的所有dom对象放入到实例对象( this )之中;
    
            for(let i = 0 ; i < eles.length ; i ++){
                this[ i ] = eles[i]
            }
            this.length = eles.length;
        },
        eq : function( index ){
            // 1. 找到dom对象! 
            // 2. 通过xtquery创建一个新的实例对象，并且把这个dom对象放入到新的实例对象之中并返回; 
            let instance = new XtQuery()
    
            instance[0] = this[index];
            instance.length = 1;
    
            // 给eq添加一个prev属性， 表示eq拆分的是哪一个实例对象; 
            // 我们可以通过这个prev属性访问到对应的实例对象; 
            instance.prev = this;
    
            return instance;
        },
        end : function(){
            // 返回当前选择器的上一次选择结果; 
            return this.prev;
        },
        css : function( options ){
            for(let i = 0 ; i < this.length ; i ++){
                 let dom = this[i];
                 for(let attr in options){
                     // 我们需要判断这个属性是否需要添加px像素单位;
                     dom.style[attr] = options[attr] + addPx( attr );
                 }
             }
             return this
         },
        html : function( html ){
            for(let i = 0 ; i < this.length ; i ++){
                 let dom = this[i];
                 // 1. dom.innerHTML = html;
                 dom.innerHTML = html;
             }
             return this;
        },
        val : function( val ){
            for(let i = 0 ; i < this.length ; i ++){
                 let dom = this[i];
                 dom.value = val ; 
             }
             return this;
        },
        attr : function( val ){
            for(let i = 0 ; i < this.length ; i ++){
                let dom = this[i];
                // 在这里可以设置元素的属性! 
    
             }
             return this;
        }
    }   

    function addPx( attr ){
        let attr_list = "width,height,left,top,bottom,rigth,margin,padding,margin-left,marginLeft,paddingLeft,padding-left";
        // string.indexOf( 参数); 
        // 查找字符串之中是有存在参数字符; 
        // - 如果存在返回下表; 
        // - 如果不存在返回 -1 ; 
        if( attr_list.indexOf( attr ) !== -1){
            return "px"
        }else{
            return "";
        }
    }

    window.XtQuery = window.$ = XtQuery;
})( window );