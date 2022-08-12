import React, { useContext } from "react";
import Image from "../components/Images";
import { Context } from '../Context';

export default function Photos() {
  const {allPhotos} = useContext(Context);
  console.log(allPhotos)

  const imageElements  = allPhotos.map((photo) => {
    return <Image url={photo.url} />
  })

  return (

    <div className="image--canvas">
      {imageElements}
    </div>
  )
}
