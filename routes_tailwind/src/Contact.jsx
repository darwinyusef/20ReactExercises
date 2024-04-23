import React from 'react'
import { Button } from './components/Button';


const Contact = () => {
  return (
    <div className='flex justify-center flex-col align-middle items-center'>
      <div className='my-10 text-5xl font-bold text-center mb-10'>Contact  </div>
      <Button title="enviar" color="bg-teal-500" />
    </div>
  )
}


export default Contact
