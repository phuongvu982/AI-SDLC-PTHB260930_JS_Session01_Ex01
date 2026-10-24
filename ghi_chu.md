# BÁO CÁO SỬA LỖI MÔ-ĐUN XỬ LÝ ĐIỂM (JS SESSION 01 - EX 01)

## 1. Bảng báo cáo các lỗi phát hiện và cách khắc phục

| STT | Dữ liệu đầu vào | Kết quả thực tế bị lỗi | Kết quả kỳ vọng đúng | Dòng code gây lỗi | Giải thích nguyên nhân |
|:---:|---|:---:|:---:|---|---|
| 1 | `calcAverage("8.5", "9")` | `4.295` | `8.75` | `return (quizText + examText) / 2;` | Hai giá trị nhận từ ô nhập đều là kiểu chuỗi, nên toán tử `+` thực hiện nối chuỗi thành `"8.59"`, sau đó mới chia cho 2 tạo ra kết quả `4.295`. |
| 2 | `normalizeName("  nguyễn văn an  ")` | `"  NGUYỄN VĂN AN  "` | `"NGUYỄN VĂN AN"` | `return rawName.toUpperCase();` | Hàm chỉ chuyển sang chữ in hoa bằng `toUpperCase()` mà không gọi `trim()` để cắt bỏ khoảng trắng hai đầu, dẫn đến tên bị lệch cột trên bảng điểm. |
| 3 | `isValidScore("9 điểm")` | `true` | `false` | `const score = parseInt(scoreText);` | `parseInt` đọc từ trái qua phải và bỏ qua phần chữ phía sau nên `"9 điểm"` bị ép thành số `9` (báo hợp lệ sai). Đồng thời `parseInt("10.5")` lấy thành `10` lọt qua điều kiện `score <= 10`. |
| 4 | `canGetCertificate("60", 9)` | `true` | `false` | `return progressText >= 80 || average >= 5;` | Sử dụng toán tử logic `||` (HOẶC) thay vì `&&` (VÀ), khiến học viên chỉ hoàn thành 60% tiến độ (dưới 80%) nhưng có điểm trung bình 9 vẫn nhận kết quả đủ điều kiện cấp chứng chỉ. |

---

## 2. Đoạn văn tóm tắt quá trình thực hiện

Trong bài tập này, em đã tiến hành rà soát mã nguồn mô-đun `script.js` và xác định 4 nguyên nhân gốc rễ gây ra lỗi logic về kiểu dữ liệu và toán tử. Em đã dùng `Number()` để chuyển đổi kiểu tường minh cho các chuỗi điểm số và tiến độ trước khi tính toán, đồng thời dùng `.trim()` kết hợp kiểm tra chuỗi rỗng và `!isNaN()` để từ chối các dữ liệu nhập sai định dạng như `"9 điểm"` hay `"8,5"`. Bên cạnh đó, em thay toán tử `||` thành `&&` để đảm bảo học viên phải đáp ứng đồng thời cả hai điều kiện về tiến độ và điểm trung bình mới được cấp chứng chỉ, cũng như áp dụng template literal trong `buildScoreMessage`. Nhờ các chỉnh sửa trên, toàn bộ 10/10 test case trong `tests.html` đều vượt qua thành công và giao diện tính điểm hoạt động chuẩn xác.
