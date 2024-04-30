import {createSlice} from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name:'goals',
    initialState: {
        value:[
            {
            'name':'Graduarme del TDS',
            'description':'Ganar todos los cursos',
            'dueDate':'01-12-2024'
            }
        ]
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.value.splice(action.payload, 1);
        }
    }
})


export const { addGoal, removeGoal } = goalsSlice.actions;
export default goalsSlice.reducer;