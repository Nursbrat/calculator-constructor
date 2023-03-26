import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
    memory: null,
    operator: null,
  },
  reducers: {
    clear: state => {
      state.value = 0;
      state.memory = null;
      state.operator = null;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setMemory: (state, action) => {
      state.memory = action.payload;
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
    },
    calculate: state => {
      switch (state.operator) {
        case '+':
          state.value = state.memory + state.value;
          break;
        case '-':
          state.value = state.memory - state.value;
          break;
        case '*':
          state.value = state.memory * state.value;
          break;
        case '/':
          state.value = state.memory / state.value;
          break;
        default:
          break;
      }
      state.memory = null;
      state.operator = null;
    },
  },
});

export const {
  clear,
  setValue,
  setMemory,
  setOperator,
  calculate,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;