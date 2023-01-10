import React, { useState } from 'react'
import {PlusCircleOutlined}  from '@ant-design/icons'
import {Modal, Input} from 'antd'
import './Homepage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addBucket } from '../redux/bucketSlice'

function Homepage() {
    const dispatch = useDispatch()
    const buckets = useSelector((store) => store.bucketReducer.buckets)
    const [bucketModal, setBucketState] = useState(false)
    const [inputStatus, setInputStatus] = useState('')
    const [bucketName, setBucketName] = useState('')

    function pushBucket(){
        if(!bucketName)
            return setInputStatus('error')
        dispatch(addBucket(bucketName))
    }
  return (
    <div>
        <div className='header'>
            <h2>Sarthak</h2>
        </div>
        <div className='bucket-div'>
            <div className='bucket-header'>
                <div className='title'>BUCKETS</div>
                <PlusCircleOutlined 
                    className = 'add-btn' 
                    style={{fontSize:'25px', color:'blue'}} 
                    onClick = {()=> setBucketState(true)}
                />
            </div>
            {
                buckets.map((v, i) => {
                    return (
                        <div key = {i}>
                            {v.name}
                            
                        </div>
                    )
                })
            }
        </div>
        <Modal 
            title="Bucket" 
            open={bucketModal}  
            onOk = {pushBucket}
            onCancel = {() => setBucketState(!bucketModal)}
        >
            <Input 
                placeholder="Bucket Name" 
                status =  {inputStatus}
                onChange = {(e) => {
                    if(inputStatus) setInputStatus('')
                    return setBucketName(e.target.value)
                }}
                className='bucket-input' 
            />
        </Modal>
    </div>
  )
}
 export default Homepage
 