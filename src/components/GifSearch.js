import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  handleChange = event => {
    this.setState({query: event.target.value})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.handleChange(event)} />
        </form>
      </div>
    )
  }

}

export default GifSearch