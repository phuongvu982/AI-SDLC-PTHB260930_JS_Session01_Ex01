/**
 * Bộ 10 bài test kiểm tra các hàm xử lý điểm học viên trong script.js
 */

// Test 1: normalizeName loại bỏ khoảng trắng hai đầu và chuyển sang chữ hoa
test("normalizeName: loại bỏ khoảng trắng thừa hai đầu và viết hoa toàn bộ", () => {
  expect(normalizeName("  nguyen van an  ")).toBe("NGUYEN VAN AN");
});

// Test 2: normalizeName xử lý chính xác chuỗi có dấu tiếng Việt
test("normalizeName: chuẩn hóa chính xác tên tiếng Việt có dấu", () => {
  expect(normalizeName("   trần thu hà   ")).toBe("TRẦN THU HÀ");
});

// Test 3: isValidScore chấp nhận các chuỗi biểu diễn số hợp lệ từ 0 đến 10
test("isValidScore: trả về true với điểm số hợp lệ từ 0 đến 10 (cả số nguyên và số thập phân)", () => {
  expect(isValidScore("8.5")).toBe(true);
  expect(isValidScore("10")).toBe(true);
  expect(isValidScore("0")).toBe(true);
  expect(isValidScore("  9  ")).toBe(true);
});

// Test 4: isValidScore từ chối điểm vượt ngoài thang điểm 0 - 10
test("isValidScore: trả về false khi điểm số vượt ngoài khoảng từ 0 đến 10", () => {
  expect(isValidScore("10.5")).toBe(false);
  expect(isValidScore("-1")).toBe(false);
  expect(isValidScore("11")).toBe(false);
});

// Test 5: isValidScore từ chối chuỗi rỗng hoặc chỉ có khoảng trắng
test("isValidScore: trả về false khi chuỗi rỗng hoặc chỉ chứa khoảng trắng", () => {
  expect(isValidScore("")).toBe(false);
  expect(isValidScore("   ")).toBe(false);
});

// Test 6: isValidScore từ chối chuỗi chứa chữ hoặc định dạng sai
test("isValidScore: trả về false khi chuỗi nhập lẫn chữ ('9 điểm')", () => {
  expect(isValidScore("9 điểm")).toBe(false);
  expect(isValidScore("abc")).toBe(false);
  expect(isValidScore("10a")).toBe(false);
});

// Test 7: isValidScore từ chối khi nhập số dùng dấu phẩy như '8,5'
test("isValidScore: trả về false khi nhập dấu phẩy ('8,5') thay vì dấu chấm", () => {
  expect(isValidScore("8,5")).toBe(false);
});

// Test 8: calcAverage tính trung bình cộng chính xác và trả về kiểu số
test("calcAverage: tính trung bình cộng chính xác của hai chuỗi điểm kiểu số (8.5 và 9 ra 8.75)", () => {
  const result = calcAverage("8.5", "9");
  expect(result).toBe(8.75);
  expect(typeof result).toBe("number");
});

// Test 9: canGetCertificate yêu cầu cả hai điều kiện: tiến độ >= 80% VÀ điểm TB >= 5
test("canGetCertificate: kiểm tra điều kiện cấp chứng chỉ (tiến độ >= 80 và điểm TB >= 5)", () => {
  // Tiến độ 60%, điểm 9 => false (lỗi trước đây trả về true vì dùng toán tử ||)
  expect(canGetCertificate("60", 9)).toBe(false);
  // Tiến độ 85%, điểm 4.5 => false
  expect(canGetCertificate("85", 4.5)).toBe(false);
  // Tiến độ 80%, điểm 5.0 => true
  expect(canGetCertificate("80", 5.0)).toBe(true);
  // Tiến độ 90%, điểm 8.75 => true
  expect(canGetCertificate("90", 8.75)).toBe(true);
});

// Test 10: buildScoreMessage dựng thông báo chuẩn xác với template literal và tên được chuẩn hóa
test("buildScoreMessage: hiển thị đúng định dạng thông báo và tự động gọi normalizeName", () => {
  expect(buildScoreMessage("  trần thu hà  ", 7.5)).toBe("Học viên TRẦN THU HÀ: 7.5 điểm");
  expect(buildScoreMessage("  nguyễn văn an  ", 8.75)).toBe("Học viên NGUYỄN VĂN AN: 8.75 điểm");
});
