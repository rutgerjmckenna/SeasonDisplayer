import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return (
        <div>
            <h1>Hello there</h1>
            <img alt="" src="https://pbs.twimg.com/profile_images/678079880458711040/AEZcFaxR_400x400.jpg"/>
        </div>

    );
}

ReactDOM.render(<App/>, document.querySelector('#root'))