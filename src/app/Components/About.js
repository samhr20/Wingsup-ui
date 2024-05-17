import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export const About = () => {
    const aboutdata = [
        {
            title: 'Home',
            list:[
                {lists:"I'm A Creator " , href:'/creator'},
                {lists : 'Top Influncer' , href : '/topInfluencer'},  
                {lists:'Contact Us' , href : '/contactUs'}
            ]
        } , 
        
        {
            title:"I’m A Creator",
            list:[
                {lists:'Top Brands' , href:'/'},
                {lists : 'Why Gcc' , href : '/'},  
                {lists : 'App Features' , href : '/'},  
                {lists:'The Process', href : '/'},
                {lists: 'Top Creators' ,href : '/'}
            ]
        } , 
        {
            title: 'Info',
            list:[
                {lists:"Terms & Conditions" , href:'/'},
                {lists : 'Privacy Policy' , href : '/'},  
                {lists:'About Us' , href : '/aboutUs'}
            ]
        } , 
        {
            title: 'Contact Us',
            list:[
                {lists:"306, Masjid Moth Rd, South Extension,", href:'/'},
                {lists : 'Block A, New Delhi, Delhi 110049', href : '/'},  
                {lists: 'Info@Wingsup.Media', href : '/'},
                {lists: '8708661344', href : '/'}
            ]
        } 
    ];

    return (
        <div className='bg-black text-white p-16 pl-28'>
            <div className='flex flex-wrap'>
                {aboutdata.map((data, index) => (
                    <div key={index} className='w-[25%]'>
                        <ul className='flex flex-col gap-5'>
                            <li className='font-bold mb-4'>{data.title}</li>
                            {data.list.map((list, i) => (
                                <li key={i}><Link href={list.href}>{list.lists}</Link> </li>
                            ))}

                        </ul>
                    </div>
                ))}
            </div>

            <hr className='my-6' />
            <div className='flex justify-between items-center'>
                <p>The Wingsup Media. © 2024</p>
                <div className='flex gap-4'>
                    <FontAwesomeIcon icon={faInstagram} height={20} width={20} />
                    <FontAwesomeIcon icon={faFacebook} height={20} width={20} />
                    <FontAwesomeIcon icon={faTwitter} height={20} width={20} />
                </div>
            </div>
        </div>
    );
};
   
export default About;
