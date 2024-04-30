import {createSlice} from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name:'tasks',
    initialState: {
        value:[
            {
            'name':'terminar tareas',
            'description':'realizar las tarea a tiempo',
            'dueDate':'29-04-2024'
            }
        ]
    },
    reducers:{
        addTask: (state, action) => {
            state.value.push(action.payload);
        },
        removeTask: (state, action) => {
            state.value.splice(action.payload, 1);
        }
    }
})


export const {addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;