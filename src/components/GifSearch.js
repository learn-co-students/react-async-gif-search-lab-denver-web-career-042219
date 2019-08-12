import React, { Component } from 'react'

class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGifs(this.state.searchTerm)
    }

    render() {
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})}></input>
                    <button>Search Gifs</button>
                </form>
            </React.Fragment>
        )
    }
}

export default GifSearch