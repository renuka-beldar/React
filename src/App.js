import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index';

const App = () => {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return(
    <>
      <div className='App-header'>
        <h2>Increment/Decrement Counter</h2>
        <h4>React-redux</h4>
        <button type="button" class="btn btn-info" onClick={()=>dispatch(decNumber(5))}>-</button>
        {/* <button onClick={()=>dispatch(decNumber(5))}>-</button> */}
        < input name="quantity" type="text" value={myState}/>
        <button type="button" class="btn btn-info" onClick={()=>dispatch(incNumber(5))}>+</button>
        {/* <button onClick={()=>dispatch(incNumber(5))}>+</button> */}
      
    </div>
    </>
  );
}

export default App;
