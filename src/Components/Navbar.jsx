import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-[#FF90BB] justify-between px-4 py-3'>
        <h1 className='text-4xl'>Shuza</h1>
        <ul className='flex p-2 gap-10'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Search</li>
            <a href='https://github.com/thesrijankumar/Shuza'>src code ↵</a>
        </ul>  
    </div>
  )
}

export default Navbar