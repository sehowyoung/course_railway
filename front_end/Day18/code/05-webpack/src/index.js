// 项目文件: 

function foo(){
    console.log("hello webpack");
    
}
foo();
import "./modules/countDown";
import { Banner } from "./modules/banner";
Banner();

// 把css引入到 index.js 之中进行统一编译 ! 

// import "./css/index.css";
import "./scss/index.scss";
import axios from "axios";

// console.log(axios.get);

axios("https://www.baidu.com")