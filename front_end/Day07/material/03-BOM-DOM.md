# BOM / DOM（上）

- 今天开始我们开始使用 js 去操作浏览器和页面中的 html 元素了



## BOM

- BOM（Browser Object Model）： 浏览器对象模型
- 其实就是操作浏览器的一些能力
- 我们可以操作哪些内容
  - 获取一些浏览器的相关信息（窗口的大小）
  - 操作浏览器进行页面跳转
  - 获取当前浏览器地址栏的信息
  - 操作浏览器的滚动条
  - 浏览器的信息（浏览器的版本）
  - 让浏览器出现一个弹出框（alert/confirm/prompt）
- BOM 的核心就是 window 对象
- window 是浏览器内置的一个对象，里面包含着操作浏览器的方法



### 获取浏览器窗口的尺寸

- ` innerHeight` 和 `innerWidth`

- 这两个方法分别是用来获取浏览器窗口的宽度和高度（包含滚动条的）

  ```javascript
  var windowHeight = window.innerHeight
  console.log(windowHeight)
  
  var windowWidth = window.innerWidth
  console.log(windowWidth)
  ```

  

### 浏览器的弹出层

- `alert` 是在浏览器弹出一个提示框

  ```javascript
  window.alert('我是一个提示框')
  ```

  - 这个弹出层知识一个提示内容，只有一个确定按钮
  - 点击确定按钮以后，这个提示框就消失了

- `confirm` 是在浏览器弹出一个询问框

  ```javascript
  var boo = window.confirm('我是一个询问框')
  console.log(boo)
  ```
 
  
  - 这个弹出层有一个询问信息和两个按钮
  - 当你点击确定的时候，就会得到 true
  - 当你点击取消的时候，就会得到 false

- `prompt` 是在浏览器弹出一个输入框

  ```javascript
  var str = window.prompt('请输入内容')
  console.log(str)
  ```


  - 这个弹出层有一个输入框和两个按钮
  - 当你点击取消的时候，得到的是 null
  - 当你点击确定的时候得到的就是你输入的内容



### 浏览器的地址信息

- 在 window 中有一个对象叫做 `location` 
- 就是专门用来存储浏览器的地址栏内的信息的



#### location.href

- `location.href` 这个属性存储的是浏览器地址栏内 url 地址的信息

  ```javascript
  console.log(window.location.href)
  ```

  - 会把中文编程 url 编码的格式

- `location.href` 这个属性也可以给他赋值

  ```javascript
  window.location.href = './index.html'
  // 这个就会跳转页面到后面你给的那个地址
  ```



#### location.reload

- `location.reload()` 这个方法会重新加载一遍页面，就相当于刷新是一个道理

  ```javascript
  window.location.reload()
  ```

  - 注意： **不要写在全局，不然浏览器就会一直处在刷新状态**



### 浏览器的历史记录

- window 中有一个对象叫做 `history` 
- 是专门用来存储历史记录信息的



#### history.back

- `history.back` 是用来会退历史记录的，就是回到前一个页面，就相当于浏览器上的 ⬅️ 按钮

  ```javascript
  window.history.back()
  ```

  - 前提是你要有上一条记录，不然就是一直在这个页面，也不会回退



#### history.forword

- `history.forword` 是去到下一个历史记录里面，也就是去到下一个页面，就相当于浏览器上的 ➡️ 按钮

  ```javascript
  window.history.forward()
  ```

  - 前提是你要之前有过回退操作，不然的话你现在就是最后一个页面，没有下一个



### 浏览器的版本信息（了解）

- window 中有一个对象叫做 `navigator`
- 是专门用来获取浏览器信息的


### 浏览器的 onload 事件

- 这个不在是对象了，而是一个事件

- 是在页面所有资源加载完毕后执行的

  ```javascript
  window.onload = function () {
    console.log('页面已经加载完毕')
  }
  ```



#### 在 html 页面中把 js 写在 head 里面

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <script>
    	// 这个代码执行的时候，body 还没有加载
      // 这个时候我们就获取不到 body 中的那个 div
      
      // 就需要使用 window.onload 事件
      window.onload = function () {
        // 这个函数会在页面加载完毕以后在执行
        // 那么这个时候页面的 DOM 元素都已经加载了，我们就可以获取 div 了
      }
    </script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```



#### 在 html 页面中把 js 写在 body 最后面

```html
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div></div>
    
    <script>
    	// 这个代码执行的时候，body 已经加载完毕了
      // 在这里就可以获取到 div，写不写 window.onload 就无所谓了
      
      window.onload = function () {
        // 这个函数会在页面加载完毕以后在执行
        // 那么这个时候页面的 DOM 元素都已经加载了，我们就可以获取 div 了
      }
    </script>
  </body>
</html>
```





### 浏览器的 onscroll 事件

- 这个 onscroll 事件是当浏览器的滚动条滚动的时候触发

- 或者鼠标滚轮滚动的时候出发

  ```javascript
  window.onscroll = function () {
    console.log('浏览器滚动了')
  }
  ```

  - 注意：**前提是页面的高度要超过浏览器的可是窗口才可以**



### 浏览器滚动的距离

- 浏览器内的内容即然可以滚动，那么我们就可以获取到浏览器滚动的距离
- 思考一个问题？
  - 浏览器真的滚动了吗？
  - 其实我们的浏览器是没有滚动的，是一直在那里
  - 滚动的是什么？是我们的页面
  - 所以说，**其实浏览器没有动，只不过是页面向上走了**
- 所以，这个已经不能单纯的算是浏览器的内容了，而是我们页面的内容
- 所以不是在用 window 对象了，而是使用 document 对象



#### scrollTop

- 获取的是页面向上滚动的距离

- 一共有两个获取方式

  - `document.body.scrollTop`
  - `document.documentElement.scrollTop`

  ```javascript
  window.onscroll = function () {
    console.log(document.body.scrollTop)
    console.log(document.documentElement.scrollTop)
  }
  ```

  - 两个都是获取页面向上滚动的距离
  - 区别：
    - IE 浏览器
      - 没有 `DOCTYPE` 声明的时候，用这两个都行
      - 有 `DOCTYPE` 声明的时候，只能用 `document.documentElement.scrollTop`
    - Chrome 和 FireFox
      - 没有 `DOCTYPE` 声明的时候，用 `document.body.scrollTop`
      - 有 `DOCTYPE` 声明的时候，用 `document.documentElement.scrollTop`
    - Safari
      - 两个都不用，使用一个单独的方法 `window.pageYOffset `



#### scrollLeft

- 获取页面向左滚动的距离

- 也是两个方法

  - `document.body.scrollLeft`

  - `document.documentElementLeft`

    ```javascript
    window.onscroll = function () {
      console.log(document.body.scrollLeft)
      console.log(document.documentElement.scrollLeft)
    }
    ```

  - 两个之间的区别和之前的 `scrollTop` 一样



### 定时器

- 在 js 里面，有两种定时器，**倒计时定时器** 和 **间隔定时器**



#### 倒计时定时器

- 倒计时多少时间以后执行函数

- 语法： `setTimeout(要执行的函数，多长时间以后执行)`

- 会在你设定的时间以后，执行函数

  ```javascript
  var timerId = setTimeout(function () {
    console.log('我执行了')
  }, 1000)
  console.log(timerId) // 1
  ```

  - 时间是按照毫秒进行计算的，1000 毫秒就是 1秒钟
  - 所以会在页面打开 1 秒钟以后执行函数
  - 只执行一次，就不在执行了
  - 返回值是，当前这个定时器是页面中的第几个定时器



#### 间隔定时器

- 每间隔多少时间就执行一次函数

- 语法： `setInterval(要执行的函数，间隔多少时间)`

  ```javascript
  var timerId = setInterval(function () {
    console.log('我执行了')
  }, 1000)
  ```

  - 时间和刚才一样，是按照毫秒进行计算的
  - 每间隔 1 秒钟执行一次函数
  - 只要不关闭，会一直执行
  - 返回值是，当前这个定时器是页面中的第几个定时器



#### 定时器的返回值

- 设置定时器的时候，他的返回值是部分 `setTimeout` 和 `setInterval` 的

- 只要有一个定时器，那么就是一个数字

  ```javascript
  var timerId = setTimeout(function () {
    console.log('倒计时定时器')
  }, 1000)
  
  var timerId2 = setInterval(function () {
    console.log('间隔定时器')
  }, 1000)
  
  console.log(timerId) // 1
  console.log(timerId2) // 2
  ```



#### 关闭定时器

- 我们刚才提到过一个 timerId，是表示这个定时器是页面上的第几个定时器

- 这个 timerId 就是用来关闭定时器的数字

- 我们有两个方法来关闭定时器 `clearTimeout` 和 `clearInterval`

  ```javascript
  var timerId = setTimeout(function () {
    console.log('倒计时定时器')
  }, 1000)
  clearTimeout(timerId)
  ```

  - 关闭以后，定时器就不会在执行了

  ```javascript
  var timerId2 = setInterval(function () {
    console.log('间隔定时器')
  }, 1000)
  coearInterval(timerId2)
  ```

  - 关闭以后定时器就不会在执行了

- 原则上是 

  - `clearTimeout` 关闭 `setTimeout`
  - `clearInterval` 关闭 `setInterval`

- 但是其实是可以通用的，他们可以混着使用

  ```javascript
  var timerId = setTimeout(function () {
    console.log('倒计时定时器')
  }, 1000)
  // 关闭倒计时定时器
  clearInterval(timerId)
  
  var timerId2 = setInterval(function () {
    console.log('间隔定时器')
  }, 1000)
  // 关闭间隔定时器
  clearTimeout(timerId2)
  ```

  

## DOM 

- DOM（Document Object Model）： 文档对象模型
- 其实就是操作 html 中的标签的一些能力
- 我们可以操作哪些内容
  - 获取一个元素
  - 移除一个元素
  - 创建一个元素
  - 向页面里面添加一个元素
  - 给元素绑定一些事件
  - 获取元素的属性
  - 给元素添加一些 css 样式
  - ...
- DOM 的核心对象就是 docuemnt 对象
- document 对象是浏览器内置的一个对象，里面存储着专门用来操作元素的各种方法
- DOM： 页面中的标签，我们通过 js 获取到以后，就把这个对象叫做 DOM 对象



###获取一个元素

- 通过 js 代码来获取页面中的标签
- 获取到以后我们就可以操作这些标签了



#### getElementById

- `getElementById` 是通过标签的 id 名称来获取标签的

- 因为在一个页面中 id 是唯一的，所以获取到的就是一个元素

  ```html
  <body>
    <div id="box"></div>
    <script>
    	var box = document.getElementById('box')
    	console.log(box) // <div></div>
    </script>
  </body>
  ```

  - 获取到的就是页面中的那个 id 为 box 的 div 标签



#### querySelector

- `querySelector` 是按照选择器的方式来获取元素

- 也就是说，按照我们写 css 的时候的选择器来获取

- 这个方法只能获取到一个元素，并且是页面中第一个满足条件的元素

  ```javascript
  console.log(document.querySelector('div')) // 获取页面中的第一个 div 元素 
  console.log(docuemnt.querySelector('.box')) // 获取页面中第一个有 box 类名的元素
  console.log(document.querySelector('#box')) // 获取页面中第一个 id 名为 box 的元素
  ```



#### querySelectorAll

- `querySelectorAll` 是按照选择器的方式来获取元素

- 这个方法能获取到所有满足条件的元素，以一个伪数组的形式返回

  ```javascript
  console.log(document.querySelectorAll('div')) // 获取页面中的所有的 div 元素 
  console.log(docuemnt.querySelectorAll('.box')) // 获取页面中所有有 box 类名的元素
  ```

  - 获取到的是一组数据，也是需要用索引来获取到准确的每一个 DOM 元素



### 操作属性

- 通过我们各种获取元素的方式获取到页面中的标签以后
- 我们可以直接操作 DOM 元素的属性，就能直接把效果展示在页面上



#### innerHTML 

- 获取元素内部的 HTML 结构

  ```html
  <body>
    <div>
      <p>
        <span>hello</span>
      </p>
    </div>
  
    <script>
      var div = document.querySelector('div')
      console.log(div.innerHTML)
  		/*
  			
        <p>
          <span>hello</span>
        </p>
  		
  		*/
    </script>
  </body>
  ```

- 设置元素的内容

  ```html
  <body>
    <div></div>
  
    <script>
      var div = document.querySelector('div')
     	div.innerHTML = '<p>hello</p>'
    </script>
  </body>
  ```

  - 设置完以后，页面中的 div 元素里面就会嵌套一个 p 元素



#### innerText

- 获取元素内部的文本（只能获取到文本内容，获取不到 html 标签）

  ```html
  <body>
    <div>
      <p>
        <span>hello</span>
      </p>
    </div>
  
    <script>
      var div = document.querySelector('div')
      console.log(div.innerText) // hello
    </script>
  </body>
  ```

- 可以设置元素内部的文本

  ```html
  <body>
    <div></div>
  
    <script>
      var div = document.querySelector('div')
     	div.innerText = '<p>hello</p>'
    </script>
  </body>
  ```

  - 设置完毕以后，会把 `<p>hello</p>` 当作一个文本出现在 div 元素里面，而不会把 p 解析成标签



#### getAttribute

- 获取元素的某个属性（包括自定义属性）

  ```html
  <body>
    <div a="100" class="box"></div>
  
    <script>
      var div = document.querySelector('div')
     	console.log(div.getAttribute('a')) // 100
      console.log(div.getAttribute('class')) // box
    </script>
  </body>
  ```



#### setAttribute

- 给元素设置一个属性（包括自定义属性）

  ```html
  <body>
    <div></div>
  
    <script>
      var div = document.querySelector('div')
     	div.setAttribute('a', 100)
      div.setAttribute('class', 'box')
      console.log(div) // <div a="100" class="box"></div>
    </script>
  </body>
  ```

  

#### removeAttribute

- 直接移除元素的某个属性

  ```html
  <body>
    <div a="100" class="box"></div>
  
    <script>
      var div = document.querySelector('div')
     	div.removeAttribute('class')
      console.log(div) // <div a="100"></div>
    </script>
  </body>
  ```

  

#### style

- 专门用来给元素添加 css 样式的

- 添加的都是行内样式

  ```html
  <body>
    <div></div>
  
    <script>
      var div = document.querySelector('div')
     	div.style.width = "100px"
      div.style.height = "100px"
      div.style.backgroundColor = "pink"
      console.log(div) 
      // <div style="width: 100px; height: 100px; background-color: pink;"></div>
    </script>
  </body>
  ```

  - 页面中的 div 就会变成一个宽高都是100，背景颜色是粉色



#### className

- 专门用来操作元素的 类名的

  ```html
  <body>
    <div class="box"></div>
  
    <script>
      var div = document.querySelector('div')
     	console.log(div.className) // box
    </script>
  </body>
  ```

- 也可以设置元素的类名，不过是全覆盖式的操作

  ```html
  <body>
    <div class="box"></div>
  
    <script>
      var div = document.querySelector('div')
     	div.className = 'test'
      console.log(div) // <div class="test"></div>
    </script>
  </body>
  ```

  - 在设置的时候，不管之前有没有类名，都会全部被设置的值覆盖


## DOM节点

- DOM 的节点我们一般分为常用的三大类 **元素节点** / **文本节点** / **属性节点**
- 什么是分类，比如我们在获取元素的时候，通过各种方法获取到的我们叫做元素节点（标签节点）
- 比如我们标签里面写的文字，那么就是文本节点
- 写在每一个标签上的属性，就是属性节点



### 元素节点

- 我们通过 `getElementBy...` 获取到的都是元素节点



### 属性节点

- 我们通过 `getAttribute` 获取的就是元素的属性节点



### 文本节点

- 我们通过 `innerText` 获取到的就是元素的文本节点




### 创建一个节点

- `createElement`：用于创建一个元素节点

  ```javascript
  // 创建一个 div 元素节点
  var oDiv = document.createElement('div')
  
  console.log(oDiv) // <div></div>
  ```

  - 创建出来的就是一个可以使用的 div 元素


### 向页面中加入一个节点

- `appendChild`：是向一个元素节点的末尾追加一个节点

- 语法： `父节点.appendChild(要插入的子节点)`

  ```javascript
  // 创建一个 div 元素节点
  var oDiv = document.createElement('div')
  var oText = document.createTextNode('我是一个文本')
  
  // 向 div 中追加一个文本节点
  oDiv.appendChild(oText)
  
  console.log(oDiv) // <div>我是一个文本</div>
  ```

- `insertBefore`：向某一个节点前插入一个节点

- 语法： `父节点.insertBefore(要插入的节点，插入在哪一个节点的前面)`

  ```html
  <body>
    <div>
      <p>我是一个 p 标签</p>
    </div>
    
    <script>
    	var oDiv = document.querySelector('div')
      var oP = oDiv.querySelector('p')
      
      // 创建一个元素节点
      var oSpan = document.createElement('span')
      
      // 将这个元素节点添加到 div 下的 p 的前面
      oDiv.insertBefore(oSpan, oP)
      
      console.log(oDiv)
      /*
      	<div>
      		<span></span>
      		<p>我是一个 p 标签</p>
      	</div>
      */
    </script>
  </body>
  ```



### 删除页面中的某一个节点

- `remove`：移除某一节点下的某一个节点

- 语法：`节点名称.remove()`



### 修改页面中的某一个节点

- `replaceChild`：将页面中的某一个节点替换掉

- 语法： `父节点.replaceChild(新节点，旧节点)`

  ```html
  <body>
    <div>
      <p>我是一个 p 标签</p>
    </div>
    
    <script>
    	var oDiv = document.querySelector('div')
      var oP = oDiv.querySelector('p')
      
      // 创建一个 span 节点
      var oSpan = document.createElement('span')
      // 向 span 元素中加点文字
      oSpan.innerHTML = '我是新创建的 span 标签'
      
     	// 用创建的 span 标签替换原先 div 下的 p 标签
      oDiv.replaceChild(oSpan, oP)
      
      console.log(oDiv)
      /*
      	<div>
      		<span>我是新创建的 span 标签</span>
      	</div>
      */
    </script>
  </body>
  ```



## 获取元素的非行间样式

- 我们在操作 DOM 的时候，很重要的一点就是要操作元素的 css 样式

- 那么在操作 css 样式的时候，我们避免不了就要获取元素的样式

- 之前我们说过可以用 `元素.style.xxx` 来获取

- 但是这个方法只能获取到元素 **行间样式**，也就是写在行内的样式

  ```html
  <style>
    div {
      width: 100px;
    }
  </style>
  <body>
    <div style="height: 100px;">
      <p>我是一个 p 标签</p>
    </div>
  
    <script>
      var oDiv = document.querySelector('div')
  		console.log(oDiv.style.height) // 100px
      console.log(oDIv.style.width) // ''
    </script>
  </body>
  ```

- 不管是外链式还是内嵌式，我们都获取不到该元素的样式

- 这里我们就要使用方法来获取了 **getComputedStyle** 和 **currentStyle**

- 这两个方法的作用是一样的，只不过一个在 **非 IE** 浏览器，一个在 **IE** 浏览器



### getComputedStyle（非IE使用）

- 语法：`window.getComputedStyle(元素, null).要获取的属性`

  ```html
  <style>
    div {
      width: 100px;
    }
  </style>
  <body>
    <div style="height: 100px;">
      <p>我是一个 p 标签</p>
    </div>
  
    <script>
      var oDiv = document.querySelector('div')
  		console.log(window.getComputedStyle(oDiv).width) // 100px
      console.log(window.getComputedStyle(oDiv).height) // 100px
    </script>
  </body>
  ```

  - 这个方法获取行间样式和非行间样式都可以

  

## 获取元素的偏移量

- 就是元素在页面上的什么位置
- 我们有几个属性来获取，**offsetLeft** 和 **offsetTop** 和 **offsetWidth** 和 **offsetHeight**



### offsetLeft 和 offsetTop

- 获取的是元左边的偏移量和上边的偏移量
- 分成两个情况来看
- 没有定位的情况下
  - 获取元素边框外侧到页面内侧的距离
- 有定位的情况下
  - 获取元素边框外侧到定位父级边框内侧的距离（其实就是我们写的 left 和 top 值）



### offsetWidth 和 offsetHeight

- 获取元素 `内容宽高 + padding宽高 + border宽高` 的和



