import observe from './observe.js';
// import Watcher from './Watcher.js';
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
    }
};


observe(obj);
// obj.b++;
// obj.a.m=10;
console.log(obj.c.d.e.f);