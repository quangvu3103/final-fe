import { useState } from "react";
import { AiFillCar, AiFillGift } from 'react-icons/ai';
import { BsFillHandbagFill } from 'react-icons/bs';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex max-h-[40rem] transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>

      <div className="flex absolute bottom-20 left-40 ">
     
        <div className="flex bg-cyan-200 hover:bg-cyan-500 w-90 rounded-lg p-4 ml-10">
          <div>
          <AiFillCar size={80} />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold ">FREE DELIVERY</h2>
            <p className="text-xl">lorem lorem lorem lorem </p>
          </div>
        </div>
        <div className="flex bg-cyan-200 hover:bg-cyan-500 w-90 rounded-lg p-4 ml-40">
          <div>
          <AiFillGift size={80} />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold ">REWARD SYSTEM</h2>
            <p className="text-xl">lorem lorem lorem lorem </p>
          </div>
        </div>
        <div className="flex bg-cyan-200 hover:bg-cyan-500 w-90 rounded-lg p-4 ml-40">
          <div>
          <BsFillHandbagFill size={80} />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold ">PROMOTIONS AND DISCOUNTS</h2>
            <p className="text-xl">lorem lorem lorem lorem </p>
          </div>
        </div>
      </div>
    </div>
  );
}