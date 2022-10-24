/* 
    扫描器类
*/
export default class Scanner {
    constructor(templateStr) {
        this.templateStr = templateStr;// 将模板字符串写到实例身上
        this.pos = 0; // 指针
        this.tail = templateStr;// 尾巴，起始为模板字符串原文
    }

    // 功能弱，就是走过指定内容，没有返回值(作用:跳过 {{ }} )
    scan(tag) {
        if (this.tail.indexOf(tag) == 0) {
            // tag有多长，比如{{长度是2，就让指针后移多少位
            this.pos += tag.length;
            // 尾巴也要变，改变尾巴为从当前指针这个字符开始，到最后的全部字符
            this.tail = this.templateStr.substring(this.pos);
        }
    }

    // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
    // 作用:返回遇到 {{ }} 之前的内容
    scanUtil(stopTag) {
        // 记录一下执行本方法的时候pos的值
        const pos_backup = this.pos;
        // 当尾巴的开头不是stopTag的时候，就说明还没有扫描到stopTag
        // 写&&很有必要，因为防止找不到，那么寻找到最后也要停止下来
        while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
            this.pos++;
            // 改变尾巴为从当前指针这个字符开始，到最后的全部字符
            this.tail = this.templateStr.substring(this.pos);
        }
        return this.templateStr.substring(pos_backup, this.pos);
    }

    // 指针是否已经到头，返回布尔值。end of string
    eos() {
        return this.pos >= this.templateStr.length;
    }
};