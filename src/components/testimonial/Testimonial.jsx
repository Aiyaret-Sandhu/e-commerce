import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-16 py-10">
                    <h1 className=' text-center text-4xl font-bold text-green' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-green-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-2">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">ग्रोको एक शानदार ग्रोसरी स्टोर है जिसमें आपको आपकी पसंदीदा चीजों के बहुत सारे विकल्प मिलते हैं। उनके व्यापक स्टॉक में हमेशा ताजा और गुणवत्ता वाले उत्पाद होते हैं। उनकी सेवा भी बहुत ही संतुष्ट करने वाली होती है।</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Arshdeep Singh</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">ਗ੍ਰੋਕੋ ਵਿਚ ਖਰੀਦਣਾ ਬਹੁਤ ਹੀ ਮਜ਼ੇਦਾਰ ਰਿਹਾ। ਉਨ੍ਹਾਂ ਦੀ ਵਿਸ਼ਾਲ ਵਰਿਆਤ ਅਤੇ ਉੱਤਮ ਗੁਣਵੱਤਾ ਦੇ ਨਾਲ-ਨਾਲ, ਉਨ੍ਹਾਂ ਦੀ ਸੇਵਾ ਵੀ ਬਹੁਤ ਉਤਮ ਸੀ। ਇਥੇ ਦੇ ਉਤਪਾਦਾਂ ਦੀ ਗੁਣਵੱਤਾ ਅਤੇ ਵੱਧੇ ਹੋਏ ਸੇਵਾ ਸਾਡੇ ਲਈ ਹਮੇਸ਼ਾ ਯਾਦ ਰਹੇਗੀ।</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Karanpreet Kaur</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-L1UhpS9glJRsLpcu8L2COL88RL9e_JIZw&usqp=CAU" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"The Groco offers a unique shopping experience with its eclectic blend of products ranging from Edison bulbs to retro items. The Helvetic ambiance coupled with Stumptown coffee creates a welcoming atmosphere for shoppers."</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Leeza Jain </h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial