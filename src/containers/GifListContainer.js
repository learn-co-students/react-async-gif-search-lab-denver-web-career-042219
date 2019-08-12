import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch';

let searchTerm;
class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    fetchGifs = (searchTerm = "skiing") => {
        const giphyURL = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(giphyURL)
            .then(response => response.json())
            .then(result => this.setState({gifs: result.data.slice(0,3)}))
            .catch(error => console.error(error))
    }

    componentDidMount() {
        this.fetchGifs()
    }

    render() {
        return(
            <React.Fragment>
                < GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs} />
            </React.Fragment>
        )
    }
}

export default GifListContainer