import React from "react";

const Context = React.createContext();

function ContextProvider({children}) {
  const [allPhotos, setAllPhotos] = React.useState([]);


  React.useEffect(() => {
    async function getPhotos() {
      const response = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json");
      const data = await response.json();
      setAllPhotos(data);
    }

    getPhotos();
  },[]);


  return (
    <Context.Provider value={{allPhotos}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context};
