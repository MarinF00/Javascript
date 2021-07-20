import React from "react";

class AddCar extends React.Component {

    render() {
        return(
            <div>
                <form action="/cars" method="POST">
                    <input type="text" placeholder="name" name="name"/>
                        <input type="text" placeholder="quote" name="quote"/>
                            <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddCar;