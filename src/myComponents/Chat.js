import React from 'react'
import { setHeaderHeading } from '../store/Slices/dashboardSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Chat = () => {
  const dispatch =  useDispatch();

  useEffect(()=>{
    dispatch(setHeaderHeading('Chat'));
  },[])
  return (
    <div className='routes_container'>Chat</div>
  )
}

export default Chat