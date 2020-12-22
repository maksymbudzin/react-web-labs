import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Catalog from "./pages/Catalog";
import ItemPage from "./pages/ItemPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/catalog">
          <Catalog />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/checkout/success">
          <Success />
        </Route>
        <Route path={"/catalog/:id"} component={ItemPage} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
