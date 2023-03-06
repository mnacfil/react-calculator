import React from 'react';
import { ADD_DIGIT } from '../action'

const DigitButton = ({ digit, dispatch}) => {
    return (
        <button
            onClick={() => dispatch({ type: ADD_DIGIT, payload: {digit}})}
            >
            {digit}
        </button>
    )
}

export default DigitButton
