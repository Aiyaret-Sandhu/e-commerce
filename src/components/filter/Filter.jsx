import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Filter() {
    const context = useContext(myContext)
    const { mode, searchkey, setSearchkey, filterType, setFilterType,
        filterPrice, setFilterPrice, product } = context

    return (
        <div>
            <div className=' container flex px-36 py-10 mt-5 '>
                <div className="p-10 flex justify-between rounded-md bg-green-600 drop-shadow-md"
                    style={{
                        backgroundColor: mode === 'dark' ? '#282c34' : '',
                        color: mode === 'dark' ? 'white' : '',
                    }}>
                    
                    <div className="flex items-center justify-between">
                        <button className="px-8 flex gap-2 py-4 bg-white hover:bg-gray-900 text-green-900 hover:text-white text-sm font-medium rounded-md ml-40" style={{ color: mode === 'dark' ? 'black' : '', fontSize: '1.25rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-funnel mt-0" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                        </svg>
                        <div>Filter</div>
                        </button>
                        {/* <button className="px-4 py-4 bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-medium rounded-md mr-40" style={{ color: mode === 'dark' ? 'white' : '', fontSize: '1.25rem' }}>
                            Reset Filter
                        </button> */}
                    </div>

                    <div className="relative ml-10">
                        <div className="absolute flex items-center ml-4 h-full">
                            <svg className="w-6 h-6 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="searchkey"
                            value={searchkey}
                            onChange={(e) => setSearchkey(e.target.value)}
                            id="searchkey"
                            placeholder="Search here ..."
                            className="px-20 py-3 w-auto rounded-md bg-violet-0 border-transparent outline-0 text-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }} />
                    </div>

                    <div className='ml-10'>
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                            <select value={filterType} onChange={(e)=> setFilterType(e.target.value)} className="px-4 py-3 w-32 rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>

                                {product.map((item, index) => {
                                    return (
                                        <option value={item.category}>{item.category}</option>
                                    )
                                })}
                            </select>
                            <select value={filterPrice} onChange={(e)=>setFilterPrice(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-lg ml-10" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                {product.map((item, index) => {
                                    return (
                                        <option value={item.price}>{item.price}</option>
                                    )
                                })}
                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter