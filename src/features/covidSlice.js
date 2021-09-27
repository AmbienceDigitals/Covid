import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  covidDetails: {},
  stateStatistics: [],
}

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    loadCovidDetails: (state, action) => {
        state.covidDetails = Object.assign({}, {...action.payload})
    },

    affectedState: (state, action) => {
      const id = action.payload
            if (state.stateStatistics.length === 0) {
                state.stateStatistics.push(...action.payload)
            }
            else if (state.stateStatistics.length !== 0) {
                state.stateStatistics.map(product => {
                    if (stateStatistics.id in (id)) {
                        return state.stateStatistics
                    }
                })
            }
    },
  }
});

export const {
  loadCovidDetails,
  affectedState,
} = covidSlice.actions

// returning todoList from todos
export const covidDetails = state =>state.covid.covidDetails;
export const stateStatistics = state =>state.covid.stateStatistics;


export default covidSlice.reducer