import React, { Component } from 'react'
import GifList from '../components/GifList'

const query = "House"
const giphyURL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`

class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        fetch(giphyURL)
            .then(response => response.json())
            .then(result => this.setState({gifs: result.data.slice(0,3)}))
            .catch(error => console.error(error))
        
    }

    render() {
        return(
            <React.Fragment>
                <GifList gifs={this.state.gifs} />
                <h1>Hello</h1>
            </React.Fragment>
        )
    }

}

export default GifListContainer