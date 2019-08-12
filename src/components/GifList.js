import React from 'react'

const GifList = (props) => {
    return (
        <ul>
            {props.gifs.map(gif  => {
                return(
                    <li><img src={gif.images.original.url}></img></li>
                )
            })}
        </ul>
    )
}
export default GifList