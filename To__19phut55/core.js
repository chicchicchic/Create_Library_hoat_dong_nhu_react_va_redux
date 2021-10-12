
// Truyền vào func [] trong bài Destructuring (ES6)
export default function html([first, ...strings], ...values) {
    // 2 tham số trong reduce là acc (biến tích trữ) và cur (current value)
    return values.reduce(
        // Giá trị khởi tạo là chính Array của first
        // Lần đầu func trong reduce dc gọi thì acc là [first]
        // ...values là nó lưu những giá trị trong biến nội suy trong thẻ ul
        // Nối cur và những phần tử còn lại và bỏ đi phần tử đầu (shift()), concat nó sẽ nối và nó làm phẳng array thành cùng 1 cấp
        (acc, cur) => acc.concat(cur, strings.shift()), [first]
    )    
    .filter(x => x && x !== true || x === 0 )
    .join('')

    // Kết quả: tại biến nội suy của file 'javascript' ta truyền vào true/false/null/undefined thì console ra sẽ thấy nó loại bò dc, còn nếu truyền số 0 vào thì nó nhận
}