import React from 'react'
import logo1 from '../../img/logo1.png'
import logo2 from '../../img/logo2.png'
import logo3 from '../../img/photo.jpg'
import logo4 from '../../img/logo4.png'
import logo5 from '../../img/OIP (1).jpg'
import logo6 from '../../img/logo6.png'
import logo7 from '../../img/logo7.png'

const logos = [
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Royal Canin', src: logo2 },
  { name: 'Kitecat', src: logo3 },
  { name: 'Taste of the Wild', src: logo4 },
  { name: 'Taste of the Wild', src: logo5 },
  { name: 'Taste of the Wild', src: logo6 },
  { name: 'Taste of the Wild', src: logo7 },
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Taste of the Wild', src: logo1 },
  { name: 'Taste of the Wild', src: logo1 },

  // ... Add all logos here with their paths
]

const LogosDisplay = () => {
  return (
    <div className="bg-white p-5 rounded-xl  mb-10 m-10 ">
      <div className="text-2xl font-bold mb-4 pl-20  ">
        Partners and Affiliated Brands
      </div>
      <div className="grid grid-cols-5 items-center gap-5  ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="m-5 flex justify-center items-center h-30"
          >
            <img
              className="object-containt aspect-[4/3] w-3/5 h-full"
              src={logo.src}
              alt={logo.name}
              // className="h-10"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogosDisplay
