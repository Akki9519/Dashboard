import React from 'react'

const Newsletter = () => {
  return (
    <>
<div className="m-5">
<div className=" h-48 w-1/2 rounded-lg  bg-sky-400 ">
    
        
        <div className="text-center  font-bold pt-3">SUBSCRIBE</div>
        <div className="text-center font-serif font-semibold mt-2">Sign up with your E-mail address to receive news and updates.</div>

        <div className="text-center outline-0 mt-3 grid grid-cols-4 ">

            <input type="text" placeholder='First Name' className=''/>
            <input type="text" placeholder='Last Name' className='ml-2' />
            <input type="text" placeholder='Email Address' className='ml-2'  />
            <input type="text" value="" placeholder='SIGNUP'  className='text-[black] ml-2'/>

        </div>
                   <div className="text-center mt-4 font-semibold font-serif">We Respect your Privacy</div>
    </div>
</div>








    </>
  )
}

export default Newsletter