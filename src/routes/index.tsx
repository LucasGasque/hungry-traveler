import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Favorites from "../pages/favorites";
import RestaurantDashboard from "../pages/restaurantDashboard";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/restaurant/:id">
        <RestaurantDashboard />
      </Route>

    </Switch>
  );
};

export default Routes;
