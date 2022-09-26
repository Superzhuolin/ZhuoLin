// 定义食物类
class Food {
    //定义一个属性表示食物所对应的元素 
    element: HTMLElement;//定义一个HTML类型的元素
    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById("food")!; //!表示元素不可能为空
    }

    // 定义获取食物X/Y轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change() {
        /* 
            生成一个随机的位置
            食物的位置最小是0 最大是290
            蛇移动一次就是一格，一根大小就是10，则食物坐标需为整10
        */

        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}
// 测试代码
// const food = new Food();
// console.log(food.X,food.Y);
// food.change();
// console.log(food.X,food.Y);

export default Food;//导出Food模块