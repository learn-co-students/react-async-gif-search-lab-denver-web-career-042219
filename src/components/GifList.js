// import React, { Component } from 'react'

// export default class GifList extends Component {

//   displayProps = () => {
//     return this.props.gifList.map( (gif, index) => {
//       console.log(gif.images.original.url)
//       <img src= {`${gif.images.original.url}`} alt={index}/> 
//     })
//   }


//   render() {
//     return (
//       <React.Fragment>
//         <ul>
//           {this.displayProps()}
//         </ul>
//       </React.Fragment>
//     )
//   }
// }


import React from 'react'

const GifList = props => {
  console.log(props);
  return (
    <div>
        {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
    </div>
  )
}

export default GifList