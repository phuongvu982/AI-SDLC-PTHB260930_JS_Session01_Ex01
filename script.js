// Hàm chuẩn hóa tên học viên: loại bỏ khoảng trắng thừa hai đầu và viết hoa toàn bộ
function normalizeName(rawName) {
  // Sửa: Trước đây rawName.toUpperCase() không loại bỏ khoảng trắng hai đầu làm lệch cột bảng điểm
  return rawName.trim().toUpperCase();
}

// Hàm kiểm tra điểm số hợp lệ: chuỗi phải biểu diễn số từ 0 đến 10
function isValidScore(scoreText) {
  // Sửa: Lấy chuỗi sau khi bỏ khoảng trắng hai đầu để kiểm tra chính xác
  const trimmedScore = scoreText.trim();
  // Sửa: Trước đây chuỗi rỗng "" hoặc khoảng trắng không được chặn lại
  if (trimmedScore === "") {
    return false;
  }
  // Sửa: Trước đây dùng parseInt("9 điểm") vẫn ra 9 (sai), dùng Number để chuỗi lẫn chữ hay "8,5" chuyển thành NaN
  const score = Number(trimmedScore);
  // Sửa: Trước đây dùng parseInt làm mất số thập phân (8.5) và không bắt được NaN hay điểm vượt quá 10 (10.5)
  return !isNaN(score) && score >= 0 && score <= 10;
}

// Hàm tính điểm trung bình của bài kiểm tra và bài thi
function calcAverage(quizText, examText) {
  // Sửa: Trước đây (quizText + examText) là phép nối chuỗi ("8.5" + "9" = "8.59") rồi mới chia 2 dẫn đến kết quả 4.295
  const quiz = Number(quizText);
  // Sửa: Chuyển đổi rõ ràng examText sang kiểu số trước khi thực hiện phép cộng toán học
  const exam = Number(examText);
  return (quiz + exam) / 2;
}

// Hàm kiểm tra điều kiện cấp chứng chỉ (tiến độ từ 80% trở lên VÀ điểm trung bình từ 5 trở lên)
function canGetCertificate(progressText, average) {
  // Sửa: Ép kiểu chuỗi progressText sang số để so sánh toán học an toàn
  const progress = Number(progressText);
  // Sửa: Trước đây dùng toán tử || (hoặc) khiến học viên tiến độ 60% vẫn được cấp chứng chỉ khi điểm >= 5; quy tắc đúng phải là && (đồng thời)
  return progress >= 80 && average >= 5;
}

// Hàm dựng thông báo điểm hoàn chỉnh cho học viên
function buildScoreMessage(rawName, average) {
  // Sửa: Gọi lại hàm normalizeName để chuẩn hóa họ tên học viên trước khi ghép vào thông báo
  const formattedName = normalizeName(rawName);
  // Sửa: Trước đây dùng nối chuỗi bằng toán tử +, nay chuyển sang dùng template literal theo đúng yêu cầu đề bài
  return `Học viên ${formattedName}: ${average} điểm`;
}
