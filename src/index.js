import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //Everytime a new instance is created in this class, 
    //the constructor is called first
    constructor(props){
        super(props);

        this.state= { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                {/* setting state, then setting the object key's value! */}
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message})
            }
        );
    }

    //Remember to always render with class based components
    render() {
        //conditional rendering!
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitutde: {this.state.lat}</div>
        }

        return <div>Loading!</div>;
    }
};


ReactDOM.render(<App/>, document.querySelector('#root'))