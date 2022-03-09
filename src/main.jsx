import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ShowAge from './conponents/Showage'
const person = {
  name: "Hùng",
  age: 200,
  status: true,
  children: [
    { id: "1", name: "Dương" },
    { id: "2", name: "Nghĩa" },
  ]
}
// sử dụng hàm
const showAge = (age) => <p>Tuổi của bạn là: {age}</p>

ReactDOM.render(<div>
  <p>Tên: {person.name}</p>
  <p>Tuổi: {person.age}</p>
  <p>Con trai: {person.children.map(item => <li>
    {item.name}
  </li>)}</p>
  <p>function: {showAge(person.age)}</p>
  <p>Conponent: <ShowAge age={person.age} /></p>
</div>, document.getElementById('root')
)
