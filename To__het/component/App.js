import html from '../core.js'
// Để lấy dữ liệu từ Store vào app này 
import { connect } from '../store.js'

// 'const connector = connect()' nó sẽ chạy thằng connect trong (core.js) và return lại cho mình cái func bên trong thằng connect, trong connect ở file core.js sẽ nhận đối số là 'component' 
// connect()  nó sẽ đẩy dữ liệu của state vào component, mà component của ta ở đây là 'App', nên tham số 'props' của App sẽ nhận tất cả những gì nó đẩy vào
// Bây giờ mình ko muốn nhận cả Store mà chỉ nhận mỗi car thì truyền vào 'state => ({car: state.cars[0], cars: state.cars}). Ta làm dc như vậy là do có bước 'selector = state => state' trong 'connect' (core.js) 
const connector = connect()

function App({ cars }) {
    // console ra sẽ thấy nó đẩy dc 'const init = {cars: ['BMW']}' (reducer.js) vào App component
    // console.log(props);


    // Vì trong (store.js) ta đã tạo dispatch là dạng global rồi nên ta muốn thực hiện hành động click để Add thêm car thì gọi đến dispatch khi click
    // Hãy nhớ dispatch này nhận 1 action
    return html`
        <h1>Hello world of Khanh</h1>
        <ul> 
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>
        <button onclick="dispatch('ADD', 'Porsche')">Add car</button>
    `
}


// Đối số của 'const connector = connect()' component, mà component của ta ở đầy là 'App' nên ta có thể truyền như này 'connector(App)'
// Để gọi App thì nó phải thông qua connector, mà connector = connect(). Sau khi dispatch khi ta click 'Add car' thì nó chình sửa state củ thành state mới, và nhờ connect() mà ta mới lấy dc state mới vừa dc dispatch xong nên cái View (App) nó nhận dc car mới và nó render lại
export default connector(App)