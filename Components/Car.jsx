import  { Component } from 'react'

const styles = {
    carro:{
        backgroundColor: '#006494',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    }
}

class Car extends Component {
  render() {
    return (
      <button style={styles.carro}>Cart</button>
    )
  }
}

export default Car