import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    buckets:[]
}

const bucketSlice = createSlice({
    name:'bucketSlice',
    initialState,
    reducers:{
        addBucket:{
            reducer(state, action){
                const {name} = action.payload
                state.buckets = [...state.buckets, {name:name, cards:[]}]
            },
            prepare(name){
                return {
                    payload:{
                        name
                    }
                }
            }
        },
        addCard(state, action){

        },
        deleteBucket(state, action){

        },
        editBucket(state, action){

        }
    }
})

export const {addBucket, deleteBucket, editBucket} = bucketSlice.actions

export default bucketSlice.reducer