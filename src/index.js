// Import the React and ReactDOM libraries from the node_modules folder
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {
    return 'Click on me!';
}
// Create a react functional component
const App = () => {
    const buttonText = {text: 'Click me'};
    
    return  (
            <div>
                <label className="label" htmlFor="name">Enter name:</label>
                <input id="name" type="text"/>
    <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
            </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);