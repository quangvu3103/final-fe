import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="flex justify-around pt-10 pb-10 text-center bg-blue-200 h-full">
      <div>
        <h2 className="text-2xl font-bold text-teal-500">
          Sign up for the newsletter and be
          <br></br>
          the first so knoow about discounts
        </h2>
        <input
          placeholder="Your email"
          className="mt-1 block w-full mt-3 px-3 py-2 border-2 border-sky-400"
        ></input>
        <button className="px-8 py-4 rounded-lg mt-3 bg-cyan-500 hover:bg-cyan-700 font-semibold text-white">
          ORDER NOW
        </button>
      </div>
      <div>
        <ul>
          <li>
            <h2 className="text-2xl font-bold text-teal-500">SHOP</h2>
          </li>
          <li className="mt-3">
            <a className="text-lg cursor-pointer text-teal-500">For Dog</a>
          </li>
          <li className="mt-3">
            <a className="text-lg cursor-pointer text-teal-500">For Cat</a>
          </li>
          <li className="mt-3">
            <a className="text-lg cursor-pointer text-teal-500">Smart Device</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h2 className="text-2xl font-bold text-teal-500">MELON PET SHOP</h2>
          </li>
          <li className="mt-3">
            <a className="text-lg cursor-pointer text-teal-500">Introduce</a>
          </li>
          <li className="mt-3">
            <a className="text-lg cursor-pointer text-teal-500">Terms of use</a>
          </li>
          <li className="mt-3">
            <a className="text-lg cursor-pointer text-teal-500">Shipping Method</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-teal-500">0896652597</h2>
        <p className="text-lg mt-3">33 Bui Xuan Phai</p>
        <div className="flex mt-3">
          <AiFillInstagram size={40} />
          <AiFillYoutube size={40} />
          <AiFillFacebook size={40} />
        </div>
      </div>
    </div>
  )
}

export default Footer
