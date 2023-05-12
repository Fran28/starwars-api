import React from 'react';
import { useNavigate, } from 'react-router-dom';

const ReturnButton = ({children = ''}) => {
  const navigate = useNavigate();
  return <button className='return-button golden-button' onClick={()=>{navigate(-1)}}>Volver</button>
}

export default ReturnButton;