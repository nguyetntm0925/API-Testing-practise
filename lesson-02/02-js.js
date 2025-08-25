let packageType = "premium"; // Bạn có thể thay đổi giá trị này thành "basic", "standard" hoặc "premium"
switch (packageType) {
    case "free":
        console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
        break;
    case "premium":
        console.log("Không quảng cáo, nghe nhạc offline!");
        break;
    case "family":
        console.log("Gói dùng cho nhiều thành viên!");
        break;
    case "student":
        console.log("Giá ưu đãi cho sinh viên!");
        break;  
    default:
        console.log("Gói không hợp lệ.");
}