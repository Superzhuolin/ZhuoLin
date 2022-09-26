// 定义表示记分牌的类
class ScorePanel {
    // score和leve用来记录分数和等级
    score = 0;
    level = 1;
    // 分数和等级所在元素，在构造函数中进行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;// 设置限制等级的变量
    upScore: number; //设置表示多少分升级的变量

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //设置一个加分的方法 
    addScore() {
        // 使分数自增
        this.scoreEle.innerHTML = ++this.score + '';
        //  每upScore分升一级
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    // 设置提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + "";
        }
    }
}
export default ScorePanel;


// 测试代码
// const scorePanel = new ScorePanel(100, 2);
// for (let i = 0; i < 200; i++) {
//     scorePanel.addScore();
// }