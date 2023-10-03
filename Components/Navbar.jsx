import { Component } from 'react'
import Logo from './Logo'
import Car from './Car'

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 3rem',
    boxShadow: '0 2px 3px rgb(0,0,0,0.1'
  }
}

class Navbar extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro, disminuirCarro, aumentarCarro, eliminarCarro } = this.props
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Car
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={mostrarCarro}
          disminuirCarro={disminuirCarro}
          aumentarCarro={aumentarCarro}
          eliminarCarro={eliminarCarro}
        />
      </nav>
    )
  }
}

export default Navbar