import { Component } from 'react'
import BubbleAlert from "./BubbleAlert";
import CarDetails from "./CarDetails";

const styles = {
  carro: {
    backgroundColor: '#006494',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  }
}

class Car extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro, disminuirCarro,  aumentarCarro, eliminarCarro } = this.props
    const cantidad = carro.reduce((acc,item)=> acc + item.cantidad, 0) // Reduce el array, funciona como un acumulador
    console.log(carro)
    return (
      <div>
        <span style={styles.bubble}>
          { cantidad !== 0 // Condicional
            ? <BubbleAlert value={cantidad}/> // Si
            : null // No
          }
        </span>
        <button 
          style={styles.carro}
          onClick={mostrarCarro}
          > Cart
        </button>
        {esCarroVisible 
          ? <CarDetails carro={carro} disminuirCarro={disminuirCarro} aumentarCarro={aumentarCarro} eliminarCarro={eliminarCarro} /> 
          : null
        }
      </div>
    )
  }
}

export default Car