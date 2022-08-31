import '../css/style.css';
import '../css/title.less';
import '../css/image.css';
import zznhImage from '../img/zznh.png';
import '../font/iconfont.css';

const divEL = document.createElement('div');
divEL.className = 'title';
divEL.innerHTML = 'Hello Webpack';
document.body.appendChild(divEL);

// 设置背景图片
const bgDivEL = document.createElement('div');
bgDivEL.className = 'image-bg';
document.body.appendChild(bgDivEL);

// 设置img元素的src
const imgEL = document.createElement('img');
imgEL.src = zznhImage;
document.body.appendChild(imgEL);
// i元素
const iEl = document.createElement('i');
iEl.className = 'iconfont icon-ashbin';
document.body.appendChild(iEl);

// 测试错误用
// console.log(content.length);
