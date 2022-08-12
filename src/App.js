import Header from "./components/Header";
import "./App.css"
import {Routes, Route} from  "react-router-dom"

import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <h1>yo</h1>
        <Routes>
          <Route exact path="/" element={<Photos />}/>
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>

    </div>
  );
}

export default App;
