import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from '../Context';
import shuffleArray from "../utils/shuffleArray";
export default function Photos() {
  const {allPhotos} = useContext(Context);


  const imageElements  = allPhotos.map((photo) => {
    return <Image id = {photo.id} key = {photo.id} url={photo.url} size={photo.size} isFav = {photo.isFavorite}/>
  })



  return (

    <div className="image--canvas">
      {imageElements}
    </div>
  )
}
