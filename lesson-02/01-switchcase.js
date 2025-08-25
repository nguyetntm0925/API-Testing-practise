// File: 01-js.js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nhập kết quả trận đấu (1:win, 2:draw, 3:lose): ', (input) => {
    let message;
    let result = parseInt(input);

  switch (result) {
    case 1:
      message = "Chúc mừng! Đội của bạn đã chiến thắng!";
      break;
    case 2:
      message = "Trận đấu hòa, thật đáng tiếc!";
      break;
    case 3:
      message = "Thua rồi, nhưng đừng bỏ cuộc!";
      break;
    default:
      message = "Kết quả không hợp lệ. Vui lòng nhập 1, 2 hoặc 3.";
  }
  console.log(message);
  rl.close();
});
