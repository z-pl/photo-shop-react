import React from "react";
import getImageSize from "./utils/imageSize";

const Context = React.createContext();

function ContextProvider({children}) {
  const [allPhotos, setAllPhotos] = React.useState([]);

  React.useEffect(() => {

    const addImageSize = (allPhotos) => {
      return allPhotos.map(photo => {
        return {
          ...photo,
          size: getImageSize()
        }
      })
    }
    async function getPhotos() {
      const response = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json");
      const data = await response.json();
      !allPhotos.length && setAllPhotos(addImageSize(data));
    }

    getPhotos();
  },[]);

  const toggleFavorite = (id) => {
    setAllPhotos(prevPhotos => {
      return (
        prevPhotos.map((photo) => {
          return {
            ...photo,
            isFavorite: id === photo.id ? !photo.isFavorite : photo.isFavorite
          }
        })
      )
    })
  }

  return (
    <Context.Provider value={{allPhotos, toggleFavorite}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context};
