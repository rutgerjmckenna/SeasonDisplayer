import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //Everytime a new instance is created in this class, 
    //the constructor is called first
    constructor(props){
        super(props);

        this.state= {lat: null};
    }

    //Remember to always render with class based components
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return (
            <div>Latitude: </div>
        )
    }
};


ReactDOM.render(<App/>, document.querySelector('#root'))