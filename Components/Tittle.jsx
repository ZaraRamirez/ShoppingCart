import { Component } from 'react'

const styles = {
    title: {
        marginBottom:'2rem',
    }
}

class Tittle extends Component {
  render() {
    return (
      <h1 style={styles.title}>Products list</h1>
    )
  }
}

export default Tittle