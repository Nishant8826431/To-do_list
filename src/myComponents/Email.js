import React from 'react'
import { setHeaderHeading } from '../store/Slices/dashboardSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Email = () => {
  const dispatch =  useDispatch();

  useEffect(()=>{
    dispatch(setHeaderHeading('Email'));
  },[])
  return (
    <div className='routes_container'>Email</div>
  )
}

export default Email;