import React from "react";
import axios from "axios";
import "./Cars.css"

class Cars extends React.Component {
    state = {
        title: "",
        body: "",
        cars: []
    }
    componentDidMount() {
        this.getCars();
    }


    getCars = () =>
    {
        axios.get("http://localhost:8080/cars")
            .then((response) => {
                const data = response.data;
                this.setState({cars: data})
                console.log("Data has been received")
            })
            .catch(() => {
                alert("Error retrieving data");
            })
    }



    displayCars = (cars) => {
        return cars.map((car, index) => (

            <div className="cars"  key={index}>
                <h1>{car.name}</h1>
                <h2>{car.model}</h2>
                <h2>{car.year}</h2>
                <h2>{car.color}</h2>
                <h2>{car.user_id}</h2>
            </div>

        ))
    }

    render() {
        return(
            <div>
                <div >
                    <h2>{this.displayCars(this.state.cars)}</h2>
                </div>
            </div>
        )
    }
}
export default Cars;