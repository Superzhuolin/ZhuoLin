import parse from "./parse"
var templateString = `<div>
    <h3 class="aa bb cc" data-m="7" id="mybox">你好</h3>
    <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
    </ul>
</div>`;

var test = parse(templateString);
console.log(test);