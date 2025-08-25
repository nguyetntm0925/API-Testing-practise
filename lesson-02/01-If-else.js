// File: 01-js.js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});
rl.question('Nhập kết quả trận đấu (1:win, 2:draw, 3:lose): ', (input) => {
    let message;
    let result = parseInt(input);
    
if (result === 1) {
  console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
} else if (result === 2) {
  console.log("Trận đấu hòa, thật đáng tiếc!");
} else if (result === 3) {
  console.log("Thua rồi, nhưng đừng bỏ cuộc!");
} else {
  console.log("Kết quả không hợp lệ.");
}
console.log(message);
  rl.close();
});