import React from 'react'
import { CUbox } from '../Components/CUbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone as solidPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Bigbutton } from '../Components/Bigbutton';


const contactus = () => {
  const CuboxData = [
    { svg: solidPhone, Heading: 'Phone Number', para: '8708661344' },
    { svg: faLocationDot, Heading: 'Our Address', para: '306, Masjid Moth Rd, South Extension, Block A, New Delhi, Delhi 110049' },
    { svg: faEnvelope, Heading: 'Email Address', para: 'Info@Wingsup.Media' }
  ]
  return (
    <>
      <h1 className='bg-[#F0F8FF] text-center p-16 font-semibold text-4xl'>Contact Us</h1>
      <div className='flex pb-12 '>
        <div className='pl-36 py-14 w-[45%] flex flex-col gap-8 '>
          {CuboxData.map((data, index) => (
            <CUbox key={index} Svg={data.svg} Heading={data.Heading} Para={data.para} />
          ))}
        </div>

        <div className='pt-14 px-4'>
          <h1 className=' font-bold text-5xl'>Contact Form</h1>
          <p className='my-3'>To Get In Touch, Complete This Form And We'll Get Back To You As Quickly As Possible.</p>

          <div>
            <form>
              <div className='flex justify-center items-center gap-4'>
                <input type="text" placeholder='Your Name' className='h-10 px-5 py-4 my-2 w-full border border-slate-400  outline-none' />
                <input type="email" placeholder='Your Email' className='h-10 px-5 py-4 my-2 w-full border border-slate-400  outline-none' />
              </div>
              <div className='flex justify-center items-center gap-4'>
                <input type="number" placeholder='Your Phone' className='h-10 px-5 py-4 my-2 w-full border border-slate-400  outline-none' />
                <input type="text" placeholder='Subject' className='h-10 px-5 py-4 my-2 w-full border border-slate-400  outline-none' />
              </div>
              <div>
                <textarea placeholder="Message"cols="45" rows="5"aria-required="true" className=' px-4 py-2 w-full border border-slate-400  outline-none'></textarea>
              </div>
              <div>
                <Bigbutton data='Send Message'/>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default contactus