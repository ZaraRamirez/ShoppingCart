import { Component } from 'react'
import Button from "./Button"

const styles = {
  producto: {
      border: 'solid 1px #eee',
      boxShadow:'0 5px 5px rgb(0,0,0,0.1)',
      width: '30%',
      padding:'10px 15px',
      borderRadius: '5px',
  },
  img:{
      width:'100%',
  }
}

class Product extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props
    
    return (
      <div style={styles.producto}>
        <img alt={producto.name} src={producto.image} style={styles.img} />
        <h2>{producto.name}</h2>
        <h4>US$ {producto.price}</h4>
        <Button onClick={() => agregarAlCarro(producto)}>
          Add Cart
        </Button>
      </div>
    )
  }
}

export default Product