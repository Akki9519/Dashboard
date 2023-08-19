import React from 'react'

const Newsletter = () => {
  return (
    <>
<div className="m-5">
<div className=" h-72 w-1/2 rounded-lg  bg-sky-400 ">
    
        
        <div className="text-center  font-semibold pt-5 text-white text-2xl">SUBSCRIBE</div>
        <div className="text-center font-serif font-semibold mt-2">Sign up with your E-mail address to receive news and updates.</div>

        <div className="text-center outline-0 mt-3 grid grid-cols-4">

            <input type="text" placeholder='First Name' className='rounded-md h-8 pl-2 ml-4 outline-0 '/>
            <input type="text" placeholder='Last Name' className=' rounded-lg h-8 pl-2 ml-4 outline-0' />
            <input type="text" placeholder='Email Address' className=' rounded-lg h-8 pl-2 ml-4 outline-0'  />
             <input type="button" value="SIGN UP"  className='text-center text-white  rounded-lg h-8 pl-2 ml-4 mr-4 font-semibold bg-[black]' />
        
        </div>
                   <div className="text-center mt-10 font-semibold font-serif">We Respect your Privacy</div>
    </div>
</div>








    </>
  )
}

export default Newsletter