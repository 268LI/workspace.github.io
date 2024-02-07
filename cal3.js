// 计算形状的函数
function calculateShape(radius) {
  const shapes = [
    { name: "三角形", sides: 3 },
    { name: "四边形", sides: 4 },
    { name: "五边形", sides: 5 },
    { name: "六边形", sides: 6 },
    { name: "七边形", sides: 7 },
    { name: "八边形", sides: 8 },
  ];

  let html = `<table>
    <thead>
      <tr>
        <th>形状</th>
        <th>边の長さ</th>
        <th>面積</th>
      </tr>
    </thead>
    <tbody>`;

  shapes.forEach((shape) => {
    const sideLength = 2 * radius * Math.sin(Math.PI / shape.sides);
    const area = (shape.sides * Math.pow(sideLength, 2)) / (4 * Math.tan(Math.PI / shape.sides));
    html += `<tr><td>${shape.name}</td><td>${sideLength.toFixed(2)}</td><td>${area.toFixed(2)}</td></tr>`;
  });

  html += '</tbody></table>';
  document.getElementById("output").innerHTML = html;
}
// 点击计算按钮时执行的函数
document.getElementById("calculate").addEventListener("click", function() {
  const radius = parseFloat(document.getElementById("radius").value);

  if (isNaN(radius) || radius <= 0) { 
    alert("有効な半径を入力してください。");
    return;
  }

  calculateShape(radius);
});
// 添加清除按钮
document.getElementById("clear").addEventListener("click", function() {
  document.getElementById("radius").value = "";
  document.getElementById("output").innerHTML = "";
});

