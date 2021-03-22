import React, { useState } from "react";

// Importing app.css is css file to add styling
import "./App.css";

const App = () => {
    //  Counter is a state initialized to 0
    let [counter, setCounter] = useState(0)

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter = 0)



    }

    const handleClick3 = () => {
        // Counter state is decremented
        setCounter(counter = 1)


    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '300%',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '-15%',
        }}>

            <div style={{
                fontSize: '500%',
                position: 'relative',
                top: '10vh',
            }}>
                {counter}
            </div>

            <div className="buttons">
                <button style={{
                    fontSize: '60%',
                    position: 'absolute',
                    top: '20vh',
                    marginRight: '5px',
                    backgroundColor: 'green',
                    borderRadius: '8%',
                    color: 'white',
                }}
                        onClick={handleClick1}>Increment</button>
                <button style={{
                    fontSize: '60%',
                    position: 'absolute',
                    top: '20vh',
                    left: '80vh',
                    marginLeft: '5px',
                    backgroundColor: 'red',
                    borderRadius: '8%',
                    color: 'white',
                }}
                        onClick={handleClick2}> Reset </button>
                <button style={{
                    fontSize: '100%',
                    position: 'absolute',
                    top: '20vh',
                    left: '30vh',
                    marginLeft: '5px',
                    backgroundColor: 'orange',
                    borderRadius: '8%',
                    color: 'white',
                }}
                        onClick={handleClick3}>_</button>
                <button style={{
                    fontSize: '100%',
                    position: 'absolute',
                    top: '30vh',
                    left: '30vh',
                    marginLeft: '5px',
                    backgroundColor: 'orange',
                    borderRadius: '8%',
                    color: 'white',
                }}
                        onClick={handleClick3}>_</button>
                <button style={{
                    fontSize: '100%',
                    position: 'absolute',
                    top: '40vh',
                    left: '30vh',
                    marginLeft: '5px',
                    backgroundColor: 'orange',
                    borderRadius: '8%',
                    color: 'white',
                }}
                        onClick={handleClick3}>_</button>



            </div>
        </div>
    )
}

export default App