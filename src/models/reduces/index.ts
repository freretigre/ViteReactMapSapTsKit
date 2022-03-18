import { AnyAction } from 'redux'

interface CounterState {
    value: number
  }
  
  const initialState: CounterState = {
    value: 0
  }
  
  export default function counterReducer(
    state = initialState,
    action: AnyAction
  ) {
    // logic here
  }