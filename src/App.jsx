import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import productReducer from "./redux/productReducer";
import Product from "./components/Product";

const store = createStore(productReducer)
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Navbar />
        <Product/>
      </div>
    </Provider>
  );
}

export default App;
