import { Component } from 'react'
import Products from "../Components/Products"
import Tittle from '../Components/Tittle'
import Layout from '../Components/Layout'
import Navbar from '../Components/Navbar'

export class App extends Component {
  state = {
    productos : [
      { name:"Laptop", price:2500, image:'/laptop.png' },
      { name:"Phone", price:1500, image:'/phone.png' },
      { name:"Speaker", price:800, image:'/speaker.png' },
    ]
  }
  
  agregarAlCarro = (producto) => {
    console.log(producto)
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Layout>
          <Tittle/>
          <Products
            productos = {this.state.productos}
            agregarAlCarro = {this.agregarAlCarro}
          />
        </Layout>
      </div>
    )
  }
}

export default App