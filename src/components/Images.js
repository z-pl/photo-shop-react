import React from "react"
import getImageSize from "../utils/imageSize"
export default function Image({url}) {
  return (
    <div className={`image--container ${getImageSize()}`}>
      <img src ={url}/>
    </div>
  )
}
