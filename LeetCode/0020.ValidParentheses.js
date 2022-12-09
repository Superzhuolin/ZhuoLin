/* 1.创建一个HashMap，把括号配对放进去
2.创建一个stack (array) ，for循环遍历字符串对于每一个字符，如果map里有这个key，则为左括号，从map里取得相对应的右括号
把它push进stack里。否则为右括号,pop出stack里的第一个字符判断等于当前的字符?不相符，则返回false。
3.循环结束后如果stack不为空，说明还剩一些左括号没有被闭合，返回false。 否则返回true。 */
var isValid = function (s) {
  const mappings = new Map();
  mappings.set("(", ")");
  mappings.set("[", "]");
  mappings.set("{", "}");

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (mappings.has(s[i])) {
      stack.push(mappings.get(s[i]));
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};
