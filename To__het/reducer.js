//  Ví dụ ứng dụng quản lý ô tô

// Tạo 1 giá trị khởi tạo
const init = {
    cars: ['BMW']
}


// Mặc định cho state = init
export default function reducer(state = init, action, args) {
    console.log(action, args);

    // Lần đầu reduce bên file core.js dc gọi 'let state = reducer()' nó return ra init 'const init = {cars: ['BMW']}
    switch (action) {
        // Action thêm ô tô (ADD)
        case 'ADD':
            // args là data mà mình add vào (porsche)
            // Vì args nằm trong Array (console.log(action, args) sẽ thấy nó thêm 'porsche' và đưa vào Array) nên ta 'const [newCar] = args'
            const [newCar] = args
            return {
                // '...state' là thừa hưởng object cũ (là BMW)
                // Sau đó nó chỉnh sửa cars bằng cách thêm Object mới vào (newCar) vào cuối Array
                cars: [...state.cars, newCar]
            }

        default:
            return state;
    }
}