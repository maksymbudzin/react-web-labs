import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Catalog from "./pages/Catalog/CatalogController";
import ItemPage from "./pages/ItemPage";
import Cart from "./pages/Cart/CartController";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RouteProtected from "./components/RouteProtected/RouteProtected";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <RouteProtected exact path="/" component={Home} />
        <RouteProtected exact path="/cart" component={Cart} />
        <RouteProtected exact path="/catalog" component={Catalog} />
        <RouteProtected exact path="/checkout" component={Checkout} />
        <RouteProtected exact path="/checkout/success" component={Success} />
        <RouteProtected path={"/catalog/:id"} component={ItemPage} />
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
