import React from 'react'
import { Bigbutton } from '../Components/Bigbutton'

const creator = () => {
  return (
    <>
      <div className='py-16 px-48 bg-[#7B1FAA]'>
        <h1 className='text-6xl font-semibold text-center font-sans'>I'm Influencer</h1>
        <h4 className='text-5xl font-medium text-center my-5'>Join With US</h4>

        <div className='bg-white  rounded-2xl mt-14 p-8  '>
          <p className='text-2xl font-semibold text-center'>JOIN WITH OUR COMMUNITY</p>
          <p className='text-center my-3'>Please Help Us Understand Your Product Areas Of Interest And Influence.</p>
          <div>
            <form>
              <div className='flex flex-col'>
                <label htmlFor="inputField" className='font-semibold'>Your Name</label>
                <input type="text" id="inputField" className='bg-[#F0F8FF] h-10 px-5 py-4 my-2 outline-none rounded-lg' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="numberfield" className='font-semibold'>Mobile Number</label>
                <input type='number' id="numberfield" className='bg-[#F0F8FF] h-10 px-5 py-4 my-2 outline-none rounded-lg' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="followersfield" className='font-semibold'>Your Followers</label>
                <input type="text" id="followersfield" className='bg-[#F0F8FF] h-10 px-5 py-4 my-2 text-sm outline-none rounded-lg' placeholder='Like 500k , 10M , 10K' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="emailfield" className='font-semibold'>Your Email</label>
                <input type="email" id="emailfield" className='bg-[#F0F8FF] h-10 px-5 py-4 my-2 text-sm outline-none rounded-lg' />
              </div>
              <div className='flex justify-between itme-centre'>
                <div className='flex flex-col w-[49%] '>
                  <label htmlFor="agefield" className='font-semibold'>Age</label>
                  <input type="number" id="agefield" className='bg-[#F0F8FF] h-10 px-5 py-4 my-2 text-sm outline-none rounded-lg' />
                </div>
                <div className='flex flex-col w-[49%]'>
                  <label className='font-semibold'>Gender</label>
                  <select className='bg-[#F0F8FF] h-10 px-5 py-2 my-2 text-sm outline-none rounded-lg'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                  </select>
                </div>
              </div>
              <div className='flex justify-between itme-centre'>
                <div className='flex flex-col w-[32%] '>
                  <label htmlFor="Cityfield" className='font-semibold'>City</label>
                  <input type="text" id="Cityfield" className='bg-[#F0F8FF] h-10 px-5 py-4 my-2 text-sm outline-none rounded-lg' />
                </div>

                <div className='flex flex-col w-[32%] '>
                  <label htmlFor="Statefield" className='font-semibold'>State</label>
                  <input type="text" id="Statefield" className='bg-[#F0F8FF] h-10 px-5 py-4 my-2 text-sm outline-none rounded-lg' />
                </div>

                <div className='flex flex-col w-[32%]'>
                  <label className='font-semibold'>Country</label>
                  <select className='bg-[#F0F8FF] h-10 px-5 py-2 my-2 text-sm outline-none rounded-lg'>
                    <option value="india">India</option>
                    <option value="afghanistan">Afghanistan</option>
                    <option value="albania">Albania</option>
                    <option value="algeria">Algeria</option>
                    <option value="andorra">Andorra</option>
                    <option value="angola">Angola</option>
                    <option value="antigua-and-barbuda">Antigua and Barbuda</option>
                    <option value="argentina">Argentina</option>
                    <option value="armenia">Armenia</option>
                    <option value="australia">Australia</option>
                    <option value="austria">Austria</option>
                    <option value="azerbaijan">Azerbaijan</option>
                    <option value="bahamas">Bahamas</option>
                    <option value="bahrain">Bahrain</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="barbados">Barbados</option>
                    <option value="belarus">Belarus</option>
                    <option value="belgium">Belgium</option>
                    <option value="belize">Belize</option>
                    <option value="benin">Benin</option>
                    <option value="bhutan">Bhutan</option>
                    <option value="bolivia">Bolivia</option>
                    <option value="bosnia-and-herzegovina">Bosnia and Herzegovina</option>
                    <option value="botswana">Botswana</option>
                    <option value="brazil">Brazil</option>
                    <option value="brunei">Brunei</option>
                    <option value="bulgaria">Bulgaria</option>
                    <option value="burkina-faso">Burkina Faso</option>
                    <option value="burundi">Burundi</option>
                    <option value="cabo-verde">Cabo Verde</option>
                    <option value="cambodia">Cambodia</option>
                    <option value="cameroon">Cameroon</option>
                    <option value="canada">Canada</option>
                    <option value="central-african-republic">Central African Republic</option>
                    <option value="chad">Chad</option>
                    <option value="chile">Chile</option>
                    <option value="china">China</option>
                    <option value="colombia">Colombia</option>
                    <option value="comoros">Comoros</option>
                    <option value="congo">Congo</option>
                    <option value="costa-rica">Costa Rica</option>
                    <option value="croatia">Croatia</option>
                    <option value="cuba">Cuba</option>
                    <option value="cyprus">Cyprus</option>
                    <option value="czech-republic">Czech Republic</option>
                    <option value="denmark">Denmark</option>
                    <option value="djibouti">Djibouti</option>
                    <option value="dominica">Dominica</option>
                    <option value="dominican-republic">Dominican Republic</option>
                  </select>

                </div>
              </div>

              <div className='flex justify-between itme-centre'>
                <div className='flex flex-col w-[49%] '>
                  <label htmlFor="bloglinkfield" className='font-semibold'>Your Blog Or Website URL</label>
                  <input type="text" id="bloglinkfield" className='bg-[#F0F8FF] h-10 px-5 py-4 my-2 text-sm outline-none rounded-lg' />
                </div>
                <div className='flex flex-col w-[49%]'>
                  <label htmlFor='instaurlfield' className='font-semibold'>Instagram URL</label>
                  <input type="text" id="instaurlfield" className='bg-[#F0F8FF] h-10 px-5 py-4 my-2 text-sm outline-none rounded-lg' />
                </div>
              </div>'
              <div className='flex justify-between itme-centre'>
                <div className='flex flex-col w-[49%] '>
                  <label className='font-semibold'>Select Your Main Content Category</label>
                  <select className='bg-[#F0F8FF] h-10 px-5 py-2 my-2 text-sm outline-none rounded-lg'>
                    <option value="art_entertainment">Art & Entertainment</option>
                    <option value="education">Education</option>
                    <option value="family">Family</option>
                    <option value="fitness">Fitness</option>
                    <option value="food">Food</option>
                    <option value="fashion">Fashion</option>
                    <option value="finance">Finance</option>
                    <option value="health">Health</option>
                    <option value="travel">Travel</option>
                    <option value="technology">Technology</option>
                    <option value="music">Music</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="gaming">Gaming</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="beauty">Beauty</option>
                    <option value="photography">Photography</option>
                    <option value="pets">Pets</option>
                    <option value="parenting">Parenting</option>
                    <option value="science">Science</option>
                    <option value="gardening">Gardening</option>
                    <option value="comedy">Comedy</option>
                    <option value="DIY">DIY</option>
                    <option value="cooking">Cooking</option>
                    <option value="self_improvement">Self Improvement</option>
                    <option value="movies">Movies</option>
                    <option value="books">Books</option>
                    <option value="poetry">Poetry</option>
                    <option value="journalism">Journalism</option>
                    <option value="history">History</option>
                    <option value="nature">Nature</option>
                    <option value="environment">Environment</option>
                    <option value="religion">Religion</option>
                    <option value="spirituality">Spirituality</option>
                    <option value="artificial_intelligence">Artificial Intelligence</option>
                    <option value="virtual_reality">Virtual Reality</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="crypto">Crypto</option>
                    <option value="futurism">Futurism</option>
                    <option value="sustainability">Sustainability</option>
                    <option value="social_media">Social Media</option>
                    <option value="marketing">Marketing</option>
                    <option value="entrepreneurship">Entrepreneurship</option>
                    <option value="innovation">Innovation</option>
                    <option value="startups">Startups</option>
                    <option value="motivation">Motivation</option>
                    <option value="leadership">Leadership</option>
                    <option value="psychology">Psychology</option>
                  </select>
                </div>
                <div className='flex flex-col w-[49%]'>
                <label className='font-semibold'>Select Up To 2 Secondary Category</label>
                  <select className='bg-[#F0F8FF] h-10 px-5 py-2 my-2 text-sm outline-none rounded-lg'>
                    <option value="art_entertainment">Art & Entertainment</option>
                    <option value="education">Education</option>
                    <option value="family">Family</option>
                    <option value="fitness">Fitness</option>
                    <option value="food">Food</option>
                    <option value="fashion">Fashion</option>
                    <option value="finance">Finance</option>
                    <option value="health">Health</option>
                    <option value="travel">Travel</option>
                    <option value="technology">Technology</option>
                    <option value="music">Music</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="gaming">Gaming</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="beauty">Beauty</option>
                    <option value="photography">Photography</option>
                    <option value="pets">Pets</option>
                    <option value="parenting">Parenting</option>
                    <option value="science">Science</option>
                    <option value="gardening">Gardening</option>
                    <option value="comedy">Comedy</option>
                    <option value="DIY">DIY</option>
                    <option value="cooking">Cooking</option>
                    <option value="self_improvement">Self Improvement</option>
                    <option value="movies">Movies</option>
                    <option value="books">Books</option>
                    <option value="poetry">Poetry</option>
                    <option value="journalism">Journalism</option>
                    <option value="history">History</option>
                    <option value="nature">Nature</option>
                    <option value="environment">Environment</option>
                    <option value="religion">Religion</option>
                    <option value="spirituality">Spirituality</option>
                    <option value="artificial_intelligence">Artificial Intelligence</option>
                    <option value="virtual_reality">Virtual Reality</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="crypto">Crypto</option>
                    <option value="futurism">Futurism</option>
                    <option value="sustainability">Sustainability</option>
                    <option value="social_media">Social Media</option>
                    <option value="marketing">Marketing</option>
                    <option value="entrepreneurship">Entrepreneurship</option>
                    <option value="innovation">Innovation</option>
                    <option value="startups">Startups</option>
                    <option value="motivation">Motivation</option>
                    <option value="leadership">Leadership</option>
                    <option value="psychology">Psychology</option>
                  </select>
                </div>
              </div>
              <div className='flex justify-between itme-centre bg-black'>
                <div className='flex flex-col bg-white w-full '>
                  <label className='font-semibold'>My Audience Is Mainly</label>
                  <select className='bg-[#F0F8FF] h-10 px-5 py-2 my-2 text-sm outline-none rounded-lg'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                  </select>
                </div>
              </div>
              <div >
                {/* <button className='w-full bg-blue-600 mt-4 p-6 text-white font-semibold'>Register as Influencer</button> */}
                <Bigbutton data='Register as Influencer'/>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default creator