import html from './core.js'

const cars = ['BMW', 'Porsches', 'Mescedes'];

const isSuccess = false;

const output = 
    // map qua 'cars' và return ra các li chứa các car
    // '${cars.map(car => `<li>${car}</li>`)}' nó sẽ tự động nối các phần tử trong Array = dấu ','. Muốn mất dấu ',' thì .join và nối nó bằng chuỗi rỗng ''
    // Nhưng ta cũng ko nên dùng .join vì sau này ta làm việc với Array rất nhiều, map rất nhiều 
    // Ôn bài Template literals (ES6)
    html`
        <h1>${undefined}</h1>
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>
    `

console.log(output);