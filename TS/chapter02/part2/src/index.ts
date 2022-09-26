// 引入样式
import "./style/index.less";
// import Food  from "./moduls/Food";""
// import ScorePanel from "./moduls/ScorePanel";

// // 测试代码
// const food = new Food();
// console.log(food.X,food.Y);
// food.change();
// console.log(food.X,food.Y);


// const scorePanel = new ScorePanel(160,2);
// for (let i = 0; i < 300; i++) {
//     scorePanel.addScore();
// }


import GameContral from "./moduls/GameControl";
const gameContral = new GameContral();


// setInterval(() => {
//     console.log(gameContral.direction);
// }, 10000)