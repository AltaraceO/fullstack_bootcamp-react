import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/home/" exact component={Products} />
          <Route path="/product/:id" exact component={Product} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
