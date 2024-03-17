import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';


function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <hr />
      <footer className="text-gray-600 body-font" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className="container px-12 py-6 mx-auto" >
          <div className="flex md:text-left text-center gap-2 order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-4 bg-gray-100 rounded-md">
              <h2 className="title-font font-medium text-green-900 tracking-widest text-lg mb-3" style={{ color: mode === 'dark' ? 'black' : '' }}>CATEGORIES</h2>
              <hr />
              <nav className="list-none mb-10 " style={{ display: 'flex', flexDirection: 'column' , gap : '0.4rem'}}>
                <li>
                  <a className="text-green-700 hover:text-green-800" style={{ color: mode === 'dark' ? 'black' : '' }}>🏠 Home</a>
                </li>
                <li>
                  <a className="text-green-700 hover:text-green-800" style={{ color: mode === 'dark' ? 'black' : '' }}>📦 Order</a>
                </li>
                <li>
                  <a className="text-green-700 hover:text-green-800" style={{ color: mode === 'dark' ? 'black' : '' }}>🧑‍🌾 Local For Vocal</a>
                </li>
                <li>
                  <a className="text-green-700 hover:text-green-800" style={{ color: mode === 'dark' ? 'black' : '' }}>🛒 Cart</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-4 bg-gray-100 rounded-md">
              <h2 className="title-font font-medium text-green-900 tracking-widest text-lg mb-3 uppercase" style={{ color: mode === 'dark' ? 'black' : '' }}>Customer Service</h2>
              <hr />
              <nav className="list-none mb-10" style={{ display: 'flex', flexDirection: 'column' , gap : '0.4rem'}}>
                <li>
                  <Link to={'/returnpolicy'} className="text-green-700 hover:text-green-800" style={{ color: mode === 'dark' ? 'black' : '' }}>↩️ Return Policy</Link>
                </li>
                <li>
                  <Link to={'/about'} className="text-green-700 hover:text-green-800" style={{ color: mode === 'dark' ? 'black' : '' }}>📄 About</Link>
                </li>
                <li>
                  <Link to={'/contact'} className="text-green-700 hover:text-green-800" style={{ color: mode === 'dark' ? 'black' : '' }}> 📞 Contact Us</Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-4 bg-gray-100 rounded-md" >
              <h2 className="title-font font-medium text-green-900 tracking-widest text-lg mb-3" style={{ color: mode === 'dark' ? 'black' : '' }}>SERVICES</h2>
              <hr />
              <nav className="list-none mb-10" style={{ display: 'flex', flexDirection: 'column' , gap : '0.4rem'}}>
                <li>
                  <Link to={'/privacypolicy'} className="text-green-700 hover:text-green-800" style={{ color: mode === 'dark' ? 'black' : '' }}>🔒 Privacy</Link>
                </li>
                <li>
                  <Link to={'/privacypolicy'} className="text-green-700 hover:text-green-800" style={{ color: mode === 'dark' ? 'black' : '' }}>🔐 Security</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://pbs.twimg.com/media/DWlGotJW0Aow9Ht.jpg" alt="" />
            </div>
          </div>

        </div>

        {/* <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            {/* <Link to={'/'} className='flex'>
              <div className="flex ">
                <h1 className=' text-3xl font-bold text-green-800  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>The Groco</h1>
              </div>
            </Link>
            <p className="text-sm text-green-900 sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>© 2024 The Groco —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-1200 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>www.grocoforyou.com</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="ml-8 text-green-800">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-8 text-green-800">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-8 text-green-800">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-8 text-green-800">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div> 
        </div> */}
      </footer>
    </div>
  )
}

export default Footer