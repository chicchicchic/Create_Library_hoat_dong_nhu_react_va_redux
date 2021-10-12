//  Ví dụ ứng dụng quản lý ô tô

// Tạo 1 giá trị khởi tạo
const init = {
    cars: ['BMW']
}


// Mặc định cho state = init
export default function reducer(state = init, action, agrs) {
    // Lần đầu reduce bên file core.js dc gọi 'let state = reducer()' nó return ra init 'const init = {cars: ['BMW']}
    switch (action) {
        // Action thêm ô tô (Create)
        case 'CREATE':
            //Code here
            break;

        default:
            return state;
    }
}