import './index.css';
import { useReducer } from "react";
import DigitButton from "./components/DigitButton";
import OperationButton from './components/OperationButton';
import { reducer } from "./reducer";
import {CLEAR, DELETE_DIGIT, CALCULATE} from './action'

// if 12.0000 format it to just 12
const NUMBER_FORMATTER = new Intl.NumberFormat('es-US', {
  maximumFractionDigits: 0
})

const formatOperand = (operand) => {
  console.log(operand);
  if(!operand) return;
  if(!operand.toString().includes('.')) {
    return NUMBER_FORMATTER.format(operand);
  }
  const [integer, decimal] = operand.toString().split('.');
  return `${NUMBER_FORMATTER.format(integer)}.${decimal}`;
}


function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator">
      <div className="output">
        <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button className="span-two" onClick={() => dispatch({ type: CLEAR})}>AC</button>
      <button onClick={() => dispatch({ type: DELETE_DIGIT})}>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch}/>
      <DigitButton digit='1' dispatch={dispatch}/>
      <DigitButton digit='2' dispatch={dispatch}/>
      <DigitButton digit='3' dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit='4' dispatch={dispatch}/>
      <DigitButton digit='5' dispatch={dispatch}/>
      <DigitButton digit='6' dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit='7' dispatch={dispatch}/>
      <DigitButton digit='8' dispatch={dispatch}/>
      <DigitButton digit='9' dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit='.' dispatch={dispatch}/>
      <DigitButton digit='0' dispatch={dispatch}/>
      <button className="span-two" onClick={() => dispatch({ type: CALCULATE})}>=</button>
    </div>
  );
}

export default App;
