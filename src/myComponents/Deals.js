import React from 'react'
import { setHeaderHeading } from '../store/Slices/dashboardSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Deals = () => {
  const dispatch =  useDispatch();

  useEffect(()=>{
    dispatch(setHeaderHeading('Deals'));
  },[])
  return (
    <div className='routes_container'>Deals</div>
  )
}

export default Deals