import {createSlice} from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name:'goals',
    initialState: {
        value:[],
    },
    reducers:{
        addGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoals",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"cursodedesarollodeapliacionesweb"
                },
                body:JSON.stringify(action.payload)
            }).catch((err)=>{
                console.log(err);
            })
        },
        initAddGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);

        },
        removeGoal: (state, action) => {
            state.value = state.value.filter((task)=> task.id!==action.payload);
            fetch("http://localhost:3001/goals/removeGoals/"+action.payload,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"cursodedesarollodeapliacionesweb"
                },
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
})


export const { addGoal, removeGoal,initAddGoal  } = goalsSlice.actions;
export default goalsSlice.reducer;