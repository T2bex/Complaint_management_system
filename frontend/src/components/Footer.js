import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-auto' >
      <div className='border border-t-2 p-4 text-white-300 text-center border-gray-600'>
        <p>&copy; {new Date().getFullYear()} ABC Limited. Tobe's project</p>
      </div>
    </footer>
  )
}

export default Footer
