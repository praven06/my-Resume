import React from 'react'

function Contact() {
  return (
    <div>
      <h3 className='text-teal-400 text-xl font-semibold mb-4'>Contact</h3>
      <ul className='space-y-4'>
        <li>
          <p className='text-gray-300 text-sm'>Address</p>
          <p className='text-gray-100 text-base'>Coimbatore In, 641006</p>
        </li>
        <li>
          <p className='text-gray-300 text-sm'>Mobile Number</p>
          <p className='text-gray-100 text-base'>9345009766</p>
        </li>
        <li>
          <p className='text-gray-300 text-sm'>Email</p>
          <p className='text-gray-100 text-base'>bpraven05@gmail.com</p>
        </li>
      </ul>
    </div>
  )
}

export default Contact
