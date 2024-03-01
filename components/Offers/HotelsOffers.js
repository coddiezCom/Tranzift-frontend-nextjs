import React from 'react'
import Image from 'next/image';
const HotelsOffers = (props) => {
  const {imgUrl,FlightName,AboutFlight,description}=props;
  return (
    <div className="w-72 border-2  p-3 shadow-lg rounded-xl border-gray-100 ">
    <div className="row-card flex">
      <Image
        src={imgUrl}
        alt="5"
        width={130}
        height={125}
        className="rounded-lg border-red-200 border-1 shadow-md"
      />
      <div className="heading ">
        <p className="border-2 mt-1 border-red-400 w-32  ml-4 text-center rounded-lg text-zinc-50 bg-red-400 h-8 flex items-center justify-center">{FlightName}</p>
        <h3 className="w-fit  my-3  text-start ml-5 text-base  font-bold after:w-24 after:h-1 after:bg-red-500  after:block text-gray-800 ">{AboutFlight}</h3>
      </div>
    </div>
    <div className="content  text-center">
      <p className="text-start font-light text-sm text-gray-500 my-4" >{description}</p>
      <p className="text-base font-semibold text-gray-500 my-2">T&Cs Apply</p>
      <button className="text-base font-semibold border-2 border-red-600 bg-red-500 text-white hover:text-black hover:bg-red-300 w-11/12 rounded-lg h-9 ">Book Now</button>
    </div>
  </div>
  )
}

export default HotelsOffers