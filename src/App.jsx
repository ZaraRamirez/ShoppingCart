import { Component } from 'react'
import Products from "../Components/Products"
import Tittle from '../Components/Tittle'
import Layout from '../Components/Layout'
import Navbar from '../Components/Navbar'

export class App extends Component {
  state = {
    productos: [
      { name: "Laptop", price: 2500, image: '/laptop.png' },
      { name: "Phone", price: 1500, image: '/phone.png' },
      { name: "Speaker", price: 800, image: '/speaker.png' },
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(product => product.name === producto.name)) { // Reviso si el producto ya se encuentra en el array
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1 // Si existe, sumo 1 a la cantidad
        })
        : x
      )
      return this.setState({ carro: newCarro })
    }

    return this.setState({  // Si es la primera vez que añado el producto, le añado la cantidad y asigno 1
      carro: this.state.carro.concat({
        ...producto, // Hago una copia del producto
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) { // Si el carro no tiene productos
      return // Termina
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible }) // Sino, me muestra el carro
  }

  disminuirCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(pdt => pdt.name === producto.name && pdt.cantidad > 1)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad - 1
        })
        : x
      )
      return this.setState({ carro: newCarro })
    }
    const newCarro = carro.filter(x => x.name !== producto.name)
    this.setState({ carro: newCarro })
  }

  aumentarCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(pdt => pdt.name === producto.name && pdt.cantidad > 1)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x
      )
      return this.setState({ carro: newCarro })
    }
    const newCarro = carro.filter(x => x.name !== producto.name)
    this.setState({ carro: newCarro })
  }

  eliminarCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(pdt => pdt.name === producto.name && pdt.cantidad > 1)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: 0
        })
        : x
      )
      return this.setState({ carro: newCarro })
    }
    const newCarro = carro.filter(x => x.name !== producto.name)
    this.setState({ carro: newCarro })
  }

  render() {
    const { esCarroVisible } = this.state
    console.log(esCarroVisible)
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
          disminuirCarro={this.disminuirCarro}
          aumentarCarro={this.aumentarCarro}
          eliminarCarro={this.eliminarCarro}
        />
        <Layout>
          <Tittle />
          <Products
            productos={this.state.productos}
            agregarAlCarro={this.agregarAlCarro}
          />
        </Layout>
      </div>
    )
  }


}

export default App