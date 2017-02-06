import React from 'react'; //knows components
import ReactDOM from 'react-dom'; //functionality to render to DOM

const App = function() {
    return (
        <div>
            Hi!
        </div>
    )
}

ReactDOM.createElement(<App />)

// Components will produce HTML and put it on the DOM