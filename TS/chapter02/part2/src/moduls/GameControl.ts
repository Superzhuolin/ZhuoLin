//  引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器,控制其他所有的类
class GameContral {
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 创建存储蛇移动方向的属性(即按键方向)
    direction: string = "";
    // 记录游戏是否结束
    isLive=true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,1);

        this.init();
    }
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        // 调用run方法,使蛇移动
        this.run();  
    } 


    /*
   *   ArrowUp  Up
       ArrowDown Down
       ArrowLeft Left
       ArrowRight Right
   * */
    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）
        // 修改direction属性
        this.direction = event.key;
    }

    // 创建控制蛇移动的方法
    run(){
    /*
    *   根据方向（this.direction）来使蛇的位置改变
    *       向上 top 减少
    *       向下 top 增加
    *       向左  left 减少
    *       向右  left 增加
    */
        // 获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        } 
        // 检查是否吃到食物了 
        this.checkEat(X,Y);

        // 修改蛇的X和Y的值
        try {
            this.snake.X=X;
            this.snake.Y=Y;
        } catch (e:any) {
            // 出现异常,游戏结束
            alert(e.message+' GAME OVER!');
            this.isLive=false;
        }

        // 开启一个定时器
        this.isLive&&setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
    }

    // 定义方法检测蛇是否吃到食物
    checkEat(X:number,Y:number){
        if(X===this.food.X && Y ===this.food.Y){
            // 食物重置位置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇要增加一行
            this.snake.addBody();
        }
    }

}

export default GameContral;