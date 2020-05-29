import React from 'react'

import appendClassName from '../../../utils/string/appendClassName'

import './Divider.css'

const Divider = (props) => {
  const {
    text,
    className,
  } = props

  return (
    text
    ?
      <div className='row'>
        <div className='col'><hr /></div>
        <div className='col-auto'>{text}</div>
        <div className='col'><hr /></div>
      </div>
    :
      <hr className={appendClassName('b-divider', className)} />
  )
}

export default Divider
