import { ADD_DIGIT, DELETE_DIGIT, CALCULATE, CLEAR, CHOOSE_OPERATOR} from './action'

export const reducer = (state, { type, payload }) => {
    const { currentOperand, previousOperand, operation } = state;
    switch(type) {
        case ADD_DIGIT:
            if(state.isCalculated) {
                return {
                    ...state,
                    isCalculated: false,
                    currentOperand: payload.digit
                }
            }
            if(currentOperand && currentOperand.includes('.') && payload.digit === '.') {
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
            if(!currentOperand) return state;
            if(currentOperand.length === 1) {
                return {
                    ...state,
                    currentOperand: null
                }
            }
            return {
                ...state,
                currentOperand: currentOperand.slice(0, -1)
            }
        case CHOOSE_OPERATOR:
            if(!currentOperand && !previousOperand) return state
            if(!currentOperand) {
                return {
                    ...state,
                    operation: payload.operation
                }
            }
            if(!previousOperand) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: currentOperand,
                    currentOperand: null
                }
            }
            if(previousOperand && currentOperand === '.') return state
            return {
                ...state,
                operation: payload.operation,
                previousOperand: calculate(state),
                currentOperand: null
            }
        case CALCULATE:
            if(previousOperand && currentOperand === '.') return state
            return {
                ...state,
                operation: null,
                previousOperand: null,
                currentOperand: calculate(state),
                isCalculated: true
            }
    }
}

function calculate ({ previousOperand, currentOperand, operation}) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return ''
    let result;
    switch(operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '÷':
            result = prev / current;
            break;
    }
    return result;
}