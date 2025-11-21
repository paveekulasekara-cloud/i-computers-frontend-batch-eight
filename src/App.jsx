import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <Header/>

      <ProductCard name="Laptop" price="100,000.00" image="https://picsum.photos/id/0/200/300"/>

      <ProductCard name="Phone" price="90,000.00" image="https://picsum.photos/id/3/200/300"/>

      <ProductCard name="Watch" price="5,000.00" image="https://picsum.photos/id/4/200/300"/>
    </>
  )
}

export default App
