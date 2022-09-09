	// 定义全局变量timer
			// var timer;
			/* 定义一个移动函数 
			参数:	
				obj 		要执行动画的对象
				attr(属性)	要执行动画的样式(left top width height)
				target		执行动画的目标
				speed		速度(正数向右,负数向左)
				回调函数
			*/
			function move(obj,attr,target,speed,callback){
				clearInterval(obj.timer);
				// 获取obj当前的left值(Number类型)
				var current = parseInt(getStyle(obj,attr));
				/* 通过target判断speed 正负  (使box1只能在target范围内移动)
				 current	< target 	 	speed>0
				 current	> target 		speed <0
				 */
				if(current>target){
					speed = -speed;
				}
				
				// 开启定时器(每次开启定时器,都会产生新的全局变量timer)
				/* 解决:向执行动画的对象中添加一个time属性,用来保存它自己的定时器标识*/
				obj.timer = setInterval(function(){
					// 获取obj原来的attr值(Number类型)
					var oldValue = parseInt(getStyle(obj,attr));
					// 在旧值基础上增加
					var newValue = oldValue + speed;
					
					/* 判断target位置
					 向左移动时(speed>0)同时newValue大于target,newValue = target;
					 向右移动时(speed<0),同时newValue小于target,newValue=0;
					 */
					if(speed<0 && newValue <target ||speed>0 && newValue >target){
						newValue = target;
					}
					// 将新值设置给obj	(att是变量需要[]包裹)
					obj.style[attr] = newValue+"px";
					// 当元素移动到800px时,停止执行动画
					
					if(newValue  === 0 ||newValue === target){
						clearInterval(obj.timer);
						// 动画执行完毕执行回调函数
						callback&& callback();
					}
				},30)
			}
			
			/* 定义一个函数,用来获取指定元素的当前样式
				参数:
					obj		要获取的样式元素
					name 	要获取的样式名*/
			function getStyle(obj,name){
				if(window.getComputedStyle){
					 // 有getComputedStyle()方法,正常浏览器方式执行
					return getComputedStyle(obj,null)[name];
				}else{
					 // 没有getComputedStyle()方法,使用IE8的方式
					 return obj.currentStyle[name];
				} 
			}
			
/* -----------------------类的操作-------------------------------- */			
			/* 1.判断一个元素中是否含有指定的class属性值
			 如果有该class,则返回true,没有则返回false*/
			 function hasClass (obj,cn){
				 // 使用构造函数动态生成一个正则表达式
				 // var reg = /\bb2\b/;
				 var reg = new RegExp("\\b"+cn+"\\b");
				 // alert(reg);
				 return reg.test(obj.className);
			 }
			// 2.定义函数,用来向元素中添加指定的class属性值
			/* 参数:
				obj	要添加的class属性的元素
				cn	要添加的class值*/
			function addClass(obj,cn){
				/* 检查obj中是否含有cn	若没有添加 */
				if(!hasClass(obj,cn)){
					obj.className  += " "+cn;
				}
			}
			 /* 3.删除元素中的class属性*/
			function removeClass(obj,cn){
				// 创建一个正则表达式
				var reg = new RegExp("\\b"+cn+"\\b");
				
				// 删除class (使用空串去替代正则表达式内容)
				obj.className = obj.className.replace(reg,"");
			}
			/* 4.toggleClass切换一个类
			 如果元素中有该类,则删除
			 如果元素中没有该类,则添加
			 */
			function toggleClass(obj,cn){
				// 判断obj中是否有cn
				if(hasClass(obj,cn)){
					// 若有则删除
					removeClass(obj,cn);
				}else{
					// 没有则删除
					addClass(obj,cn);
				}
				
			}