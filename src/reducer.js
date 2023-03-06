import { ADD_DIGIT, DELETE_DIGIT, CALCULATE, CLEAR, CHOOSE_OPERATOR} from './action'

export const reducer = (state, { type, payload }) => {
    const { currentOperand, prevousOperand, operation } = state;
    console.log(currentOperand);
    console.log(prevousOperand);
    switch(type) {
        case ADD_DIGIT:
            if(payload.digit === '.' && currentOperand.includes('.')) {
                return state
            }
            if(currentOperand === '0' && payload.digit === '0') {
                return state
            }
            return {
                ...state,
                currentOperand: `${currentOperand || ''}${payload.digit}`
            }
        case CLEAR:
            return {}
        case DELETE_DIGIT:
            if(currentOperand.length === 1) return {}
            return {
                ...state,
                currentOperand: currentOperand.slice(0, -1)
            }
        case CHOOSE_OPERATOR:
            if(!currentOperand && !prevousOperand) return state
            // if(!currentOperand) {
            //     return {
            //         ...state,
            //         operation: payload.operation
            //     }
            // }
            if(!prevousOperand) {
                console.log("hello");
                return {
                    ...state,
                    operation: payload.operation,
                    prevousOperand: currentOperand,
                    currentOperand: null
                }
            }
            // return {
            //     ...state,
            //     operation: payload.operation,
            //     prevousOperand: currentOperand,
            //     currentOperand: null
            // }
    }
}