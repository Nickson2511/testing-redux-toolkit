// Importing React to use JSX and create components
import React from 'react';

// Importing hooks from React-Redux to interact with the Redux store
import { useSelector, useDispatch } from 'react-redux';

// Importing the action creators from the counterSlice
// These actions will be dispatched to update the state in the store
import { increment, decrement, incrementByAmount } from './features/counterSlice';

// Importing the App.css file to apply styles to this component
import './App.css';

// Define the App component using an arrow function
const App = () => {
  // Using the `useSelector` hook to access the current value of the counter from the Redux store
  // `state.counter.value` refers to the `value` property within the `counter` slice of the Redux state
  const count = useSelector((state) => state.counter.value);

  // Using the `useDispatch` hook to create a dispatch function
  // The dispatch function is used to send actions to the Redux store, triggering state updates
  const dispatch = useDispatch();

  // Define an arrow function to handle incrementing the counter
  // This function dispatches the `increment` action to the store
  const handleIncrement = () => {
    dispatch(increment());
  };

  // Define an arrow function to handle decrementing the counter
  // This function dispatches the `decrement` action to the store
  const handleDecrement = () => {
    dispatch(decrement());
  };

  // Define an arrow function to handle incrementing the counter by 30
  // This function dispatches the `incrementByAmount` action with 30 as the payload
  const handleIncrementBy30 = () => {
    dispatch(incrementByAmount(30));
  };

  // The component's render method, returning the JSX to be displayed in the browser
  return (
    <div className="App">
      {/* Display the current counter value */}
      <h1>Counter: {count}</h1>

      <div className="button-row">
        {/* Button to increment the counter by 1 */}
        <button onClick={handleIncrement}>Increment</button>

        {/* Button to decrement the counter by 1 */}
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      
      <div className="button-row">
        {/* Button to increment the counter by 30 */}
        <button onClick={handleIncrementBy30}>Increment by 30</button>
      </div>
    </div>
  );
};

// Exporting the App component as the default export
// This allows it to be imported and used in other files, like index.js
export default App;
