import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Transactions from "../pages/Transactions";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/payment/:id" component={Payment} />
      <Route exact path="/admin/transactions" component={Transactions} />
    </Switch>
  </BrowserRouter>
);

export default App;
