import React from 'react'

const Room = () => {
  function clicked(){
    console.log("Hello!")
  }
  return (
    <div className='align-centerb border-solid mt-[17%] justify-center flex'>
        <form id='Form' action="">
            <h2 className='text-2xl font-serif'>Create a Room!</h2>
            <input type="text" className='ml-[2%] p-4 mt-3 text-xs' placeholder='Enter your room code'/>
            <button type='button' className='block bg-red-300 border-1 rounded-3xl p-3 mt-3 ml-[20%]' onClick={clicked}>Submit</button>
        </form>
    </div>
  )
}

export default Room