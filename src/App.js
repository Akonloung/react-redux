import React from 'react';
import './App.css';

// below 2 line for redux
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  //below 2 line for redux
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Increment/decrement conter</h1>
      <h4>using react redux</h4>
      <div className='quantity'>
        <a className='quntity__minus'
          title='Decrement'
          onClick={() => dispatch(decNumber())}>
          <span> - </span>
        </a>
        <input name='quantity' type="text" className='quantity_input' value={myState} />
        <a className='quntity__plus'
          title='Increment'
          onClick={() => dispatch(incNumber())}>
          <span> + </span></a>
      </div>
    </div>
  );
}

export default App;
