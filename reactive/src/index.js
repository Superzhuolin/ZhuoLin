import observe from './observe.js';
import Watcher from './Watcher.js';
import defineReative from "./defineReactive"

var obj = {
    a: {
        m: { 
            n: 5
        }
    },
    b:10,
    c:{
        d:{
            e:{
                f:666
            }
        }
    },
    g:[22,33,44,55]
};


observe(obj);
new Watcher(obj,"a.m.n",(val)=>{
    console.log("★★★★★★", val);
}) //相当于watch作用
obj.a.m.n=88;

// // obj.g.push(66);
console.log(obj);

// obj.g = 10;
// obj.g.push(66,77,88);
// console.log(obj.g);
// obj.g.splice(2,1,[88,99,[100]]);
// console.log(obj.g);
// obj[2].push(100);
