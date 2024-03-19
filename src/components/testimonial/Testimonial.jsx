import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-16 py-10">
                    {/* <h1 className=' text-left text-4xl font-bold text-green mb-2' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1> */}
                    <h1 class="sm:text-4xl text-4xl font-medium title-font mb-3 mt-3 text-green-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <div className="h-1 w-40 bg-green-600 rounded mb-2"></div>
                    <h2 className=' text-left text-2xl mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-green-500'>customers</span> are saying</h2>
                    <div className="flex gap-2">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 px-8 py-10 rounded-md" style={{backgroundColor: mode === 'dark' ? 'gray' : ''}}>
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">ग्रोको एक शानदार ग्रोसरी स्टोर है जिसमें आपको आपकी पसंदीदा चीजों के बहुत सारे विकल्प मिलते हैं। उनके व्यापक स्टॉक में हमेशा ताजा और गुणवत्ता वाले उत्पाद होते हैं। उनकी सेवा भी बहुत ही संतुष्ट करने वाली होती है।</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Arshdeep Singh</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 px-8 py-10 rounded-md" style={{backgroundColor: mode === 'dark' ? 'gray' : ''}}>
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"The Groco offers a unique shopping experience with its eclectic blend of products ranging from Edison bulbs to retro items. The Helvetic ambiance coupled with Stumptown coffee creates a welcoming atmosphere for shoppers."</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Leeza Jain </h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 px-8 py-10 rounded-md" style={{backgroundColor: mode === 'dark' ? 'gray' : ''}}>
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">ਗ੍ਰੋਕੋ ਵਿਚ ਖਰੀਦਣਾ ਬਹੁਤ ਹੀ ਮਜ਼ੇਦਾਰ ਰਿਹਾ। ਉਨ੍ਹਾਂ ਦੀ ਵਿਸ਼ਾਲ ਵਰਿਆਤ ਅਤੇ ਉੱਤਮ ਗੁਣਵੱਤਾ ਦੇ ਨਾਲ-ਨਾਲ, ਉਨ੍ਹਾਂ ਦੀ ਸੇਵਾ ਵੀ ਬਹੁਤ ਉਤਮ ਸੀ। ਇਥੇ ਦੇ ਉਤਪਾਦਾਂ ਦੀ ਗੁਣਵੱਤਾ ਅਤੇ ਵੱਧੇ ਹੋਏ ਸੇਵਾ ਸਾਡੇ ਲਈ ਹਮੇਸ਼ਾ ਯਾਦ ਰਹੇਗੀ।</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Karanpreet Kaur</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial