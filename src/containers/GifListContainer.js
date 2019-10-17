// import React, { Component } from 'react'
// import GifList from '../components/GifList.js'
// import GifSearch from '../components/GifSearch'

// const apiEndpoint = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"

// export default class GiftListContainer extends Component {
//   constructor() {
//     super()
//     this.state = {
//       giphs: [],
//       gifs: []
//     }
//   }

//   componentDidMount() {
//     // this.getGiphs(apiEndpoint)
//     this.fetchGIFs()
//   }

//   // getGiphs = (apiEndpoint) => {
//   //   fetch(apiEndpoint)
//   //     .then(response => response.json())
//   //     .then(result => this.storeGiphs(result))
//   // }

//   // storeGiphs = (array) => {
//   //   array.data.forEach((giph, index ) => {
//   //     if (index < 3) {
//   //       this.setState({giphs : [...this.state.giphs, giph] })
//   //     }
//   //   })
//   // }

//   fetchGIFs = (query = "dolphins") => {
//     fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
//       .then(res => res.json())
//       .then(({data}) => {
//         this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
//       })
//   }



  
//   render() {
//     return (
//       <div>
//         <h1> I am here the gift list container </h1>
//         <ul>
//           {/* <GifList gifs={this.state.giphs}/> */}
//           <GifList gifs={this.state.gifs} />
//         </ul>
//         <GifSearch fetchGifs={this.handleSubmit}/>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGIFs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount() {
    this.fetchGIFs()
  }
}

export default GifListContainer