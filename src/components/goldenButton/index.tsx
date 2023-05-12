import React from 'react';

const GoldenButton = ({children = '', callback = ()=>{}}) => {
  return <button className='golden-button more-button' onClick={callback}>{children}</button>
}

export default GoldenButton;