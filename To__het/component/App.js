import html from '../core.js'
// Để lấy dữ liệu từ Store vào app này 
import { connect } from '../store.js'

// 'const connector = connect()' nó sẽ chạy thằng connect trong (core.js) và return lại cho mình cái func bên trong thằng connect, trong connect ở file core.js sẽ nhận đối số là 'component' 
// connect()  nó sẽ đẩy dữ liệu của state vào component, mà component của ta ở đây là 'App', nên tham số 'props' của App sẽ nhận tất cả những gì nó đẩy vào
const connector = connect()

function App(props) {
    // console ra sẽ thấy nó đẩy dc 'const init = {cars: ['BMW']}' (reducer.js) vào App component
    console.log(props);

    return html`
        <h1>Hello world of Khanh</h1>
        <ul> 
            <li>${props.cars}</li>
        </ul>
    `
}


// Đối số của 'const connector = connect()' component, mà component của ta ở đầy là 'App' nên ta có thể truyền như này 'connector(App)'
export default connector(App)