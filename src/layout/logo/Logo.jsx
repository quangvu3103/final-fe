import React from 'react'
import logo1 from '../../img/logo1.png'
import logo2 from '../../img/logo2.png'

const logos = [
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Royal Canin', src: logo2 },
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Taste of the Wild', src: logo1 },
  
  // ... Add all logos here with their paths
]

const LogosDisplay = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-black mb-10 m-10 ">
      <div className="text-2xl font-bold mb-4 pl-20  ">
        Partners and Affiliated Brands
      </div>
      <div className="flex flex-wrap justify-center items-center grid grid-cols-5 gap-5  ">
        {logos.map((logo, index) => (
          <div key={index} className="m-5 flex justify-center items-center">
            <img src={logo.src} alt={logo.name} className="h-10" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogosDisplay
