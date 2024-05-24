import Image from 'next/image'

import React from 'react'




const HomePage = () => {
     return (
       <section className="max-container padding-container flex flex-col
       gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
         <div className="hero-map" />
  
      
  
         <div className="relative z-20 flex-1 flex-col xl:w-1/2">
           <Image
              src="/icon01.png"
              alt="icon"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
  
          
           />
           <h1 className='bold-52 lg:bold-88'>HL Imoveis</h1>
           <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
           HL-Imóveis connects you to the perfect property for your lifestyle.
           With a vast and diversified portfolio of residential and commercial properties, 
           We offer customized solutions to meet your needs and exceed your expectations. 
           Find your next home or business location with the trust and expertise of HL-Imóveis.
           </p>
           <div className='my-11 flex flex-wrap gap-5'>
             {Array(5).fill(1).map((_, index) => (
                <Image 
                  src="/star.svg"
                  key={index}
                  alt='star'
                  width={24}
                  height={24}
               
                />
             ))}
               <p className='bold-16 lg:bold-20 text-blue-70'>
                  198k
                  <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
               </p>

           </div>
           </div>
           </section>
   )
}

export default HomePage