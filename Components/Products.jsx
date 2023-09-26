import { Component } from 'react'
import Product from "./Product";

const styles = {
    productos: {
        display:'flex', // Uno al lado del otro
        flexDirection:'row', // En general es por defecto
        justifyContent:'space-between',
    }
}

class Products extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props
    return (
      <div style={styles.productos}>
        {productos.map( producto => 
            <Product
                key={ producto.name }
                producto = { producto }
                agregarAlCarro = { agregarAlCarro }
            />
            ) }
      </div>
    )
  }
}

export default Products