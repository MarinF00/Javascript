import React from "react";
import Cars from "./pages/Cars";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import CarDetails from "./pages/CarDetails";
import Home from "./pages/Home";
import AddCar from "./pages/AddCar";


class App extends React.Component {

render() {
    return(
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/cars" exact component={Cars}/>
                    <Route path="/cars/add"  component={AddCar}/>
                    <Route path="/cars/:id"  component={CarDetails}/>

                </Switch>
            </Router>
        </div>
    )
}
}

export default App;