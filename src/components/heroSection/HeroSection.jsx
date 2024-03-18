import React from 'react'
import back from './back.png'
import { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";


const imgs = [
  // "https://images.unsplash.com/photo-1581414211938-e772a180c7ab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1695653423459-beb6b8a8169b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695653422853-3d8f373fb434?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

function HeroSection() {
  const [randomImgSrc, setRandomImgSrc] = useState(
    imgs[Math.floor(Math.random() * imgs.length)]
  );
  const [authDetails, setAuthDetails] = useState(null);
  const auth = JSON.parse(localStorage.getItem("auth"));
  // console.log('ok');
  useEffect(() => {
    if (auth && auth.data && auth.data.others && !authDetails) {
      setAuthDetails(auth.data.others);
    }
  }, [auth, authDetails]); // Include 'authDetails' as a dependency

  console.log(authDetails);

  return (
    <div className="relative w-full h-[100vh] md:h-[650px] overflow-hidden bg-gray-400">
      <LazyLoad height={800} offsetVertical={500}>
        <img
        loading="lazy"
          className="w-full h-[100vh] md:h-[800px] object-cover"
          src={randomImgSrc}
          alt=""
        />
      </LazyLoad>
      <div className="w-[80%] flex gap-5 flex-col items-center justify-center absolute top-[50%] translate-y-[-50%] left-[26%] translate-x-[-50%] text-[#202020] text-center ">
        <div className="flex gap-5 flex-col items-left h-full border-1 border-white rounded-sm  py-10" style={{
          // backgroundColor: "rgba(0,40,0,0.6)"
        }}>
          <div>

            <h2 className="text-6xl md:text-4xl font-semibold text-white text-left mb-16" style={{ fontSize : '6.5rem'}}>
            Welcome to
            </h2>

            <h2 className="text-6xl md:text-4xl font-semibold text-white text-left mb-12" style={{ fontSize : '6.5rem'}}>
              thegroco.com!
            </h2>
          </div>

          <p className="text-md md:text-xl text-white text-left mb-8">
            "Farm fresh products selected just for you ... "
          </p>
          <Link
            to="/allproducts"
            className="w-fit flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-green-600 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" rounded-sm" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>
            <p className="font-semibold text-lg">Buy Now</p>
          </Link>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div>
  //       <img src={back} alt="" 
  //       style={{ 
  //         width: '100%',    // Set width to maximum
  //         height: '90vh',    // Set height to 80vh
  //         objectFit: 'contain',
  //         objectPosition: 'center'
  //       }} />
  //   </div>
  // )
}

export default HeroSection