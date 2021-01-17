import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Payment from "../pages/Payment";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/payment/:id" component={Payment} />
    </Switch>
  </BrowserRouter>
);

export default App;
