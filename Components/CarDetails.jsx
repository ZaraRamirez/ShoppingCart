import { Component } from 'react'

const styles = {
    detallesCarro:{
        backgroundColor:'#fff',
        position:'absolute',
        marginTop:30,
        boxShadow:'1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius:'5px',
        width:'300px',
        right:50,
    },
    ul:{
        margin:0,
        padding:0,
    },
    producto:{
        listStyleType:'none',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'25px 20px',
        borderBottom:'solid 1px #aaa',
    },
    imagen:{
        boxShadow:'1px 5px 5px rgb(0,0,0,0.4)',
    },
    button:{
        backgroundColor: '#006494',
        color:'#fff',
        border:'none',
        borderRadius:'50%',
        width: '30px',
        height: '30px',
        cursor:'pointer',
    },
    buttonClose:{
        backgroundColor: '#C66969',
        color:'#fff',
        border:'none',
        borderRadius:'50%',
        width: '30px',
        height: '30px',
        cursor:'pointer',
    },
}

class DetallesCarro extends Component {
  render() {
    const { carro, disminuirCarro, aumentarCarro, eliminarCarro } = this.props
    console.log(carro)
    return (
    <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
            {carro.map((product)=>
                <li key={product.name} style={styles.producto}>
                    <img 
                        alt={product.name} 
                        src={product.image} 
                        width="50" 
                        height="32" 
                        style={styles.imagen}
                    />
                    {product.name}
                    <span>{product.cantidad}</span>
                    <button 
                        style={styles.button} 
                        onClick={()=>disminuirCarro(product)}
                        >-
                    </button>
                    <button 
                        style={styles.button}
                        onClick={()=>aumentarCarro(product)}
                        >+
                    </button>
                    <button 
                        style={styles.buttonClose}
                        onClick={()=>eliminarCarro(product)}
                        >x
                    </button>
                </li>
            )}
        </ul>
    </div>
    )
  }
}

export default DetallesCarro