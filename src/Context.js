import React from "react";
import getImageSize from "./utils/imageSize";

const Context = React.createContext();

function ContextProvider({children}) {
  const [allPhotos, setAllPhotos] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

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

  const addToCart = (id) => {
    setCartItems(prevCartItems => [...prevCartItems, id])
  }

  const removeFromCart = (id) => {
    setCartItems(prevCartItems => {
      return prevCartItems.filter(item => item !== id)
    })
  }

  const isInCart = (id) => {
    return cartItems.includes(id);
  }

  const getCartImages = () => {
    return (
      allPhotos.filter(photo => {
        return cartItems.includes(photo.id)
      })
    )
  }

  const emptyCart = () => {
    setCartItems([]);
  }

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
    <Context.Provider value={{allPhotos, toggleFavorite, addToCart, isInCart, removeFromCart, getCartImages, emptyCart}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context};
