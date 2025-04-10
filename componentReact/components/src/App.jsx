import { useState } from 'react'
import './App.css'
import { Card } from './component/Card'
import ensalada from './assets/ensalada.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <section clas="full">
      <Card
        imge={ensalada}
        title="Bandeja Paisa"
        time="10"
        pointer="4.5"
        price="10.00" />


    </section>
  )
}

export default App
