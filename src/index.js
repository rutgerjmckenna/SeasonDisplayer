import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //Everytime a new instance is created in this class, 
    //the constructor is called first
    constructor(props){
        super(props);

        this.state= { lat: null, errorMessage: '' };
    }

    //Remember to always render with class based components
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                {/* setting state, then setting the object key's value! */}
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message})
            }
        );
        return (
        <div>
            Latitude: {this.state.lat}
            <br />
            Error: {this.state.errorMessage}
        </div>
        )
    }
};


ReactDOM.render(<App/>, document.querySelector('#root'))