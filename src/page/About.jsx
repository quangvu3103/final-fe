import React from 'react'
import Navbar from '../layout/navbar/navbar'
import LogosDisplay from '../layout/logo/Logo'
import Footer from '../layout/footer/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center items-center h-screen text-2xl'>
        <div className="text-center font-extrabold">Welcome to Melon Pet Shop</div>
        <div class="text-center mt-4">Melon Pet Shop is a retail shop providing high quality products for pets including food, snacks, and other products from major and reputable brands in the world.</div> 
        <div class="text-center mt-4">In 2023, Melon Pet Shop Officially opens its first store with a stable online sales channal system to help bring convenience to customer when shopping.</div> 
        <div className="text-center mt-4">Melon is providing more than 2,000 pet product, proud to be an ideal shopping destination,speacializing in providing quality standard products at reasonable prices from big brands such as Royal Cannin,...</div>
      </div>
      <LogosDisplay />
      <Footer />
    </div>
  )
}

export default About
