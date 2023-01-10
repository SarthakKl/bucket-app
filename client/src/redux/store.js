import {configureStore} from '@reduxjs/toolkit'
import bucketReducer from './bucketSlice'

const store = configureStore({
    reducer:{
        bucketReducer: bucketReducer
    }
})

export default store