import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";

import productReducer from "./redux/productReducer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";

const store = createStore(productReducer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/pages" element={<ProductPage/>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
