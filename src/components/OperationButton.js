import React from 'react'
import { CHOOSE_OPERATOR } from '../action'

const OperationButton = ({ operation, dispatch}) => {
    return (
        <button
        onClick={() => dispatch({ type: CHOOSE_OPERATOR, payload: { operation }})}
        >
            {operation}
        </button>
    )
}

export default OperationButton
