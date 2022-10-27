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
    },
    g:[22,33,44,55]
};


observe(obj);
obj.g.push(66,77,88);
console.log(obj.g);
