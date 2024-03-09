import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;
    return (
        <div className='  flex items-center justify-center w-full h-[100%] bg-gray-100'>
            <div className='flex overflow-hidden bg-white w-[50rem] h-[100%] md:h-[100%] flex-row md:flex-col-reverse rounded-xl shadow-lg '>
                <div className='flex-1 flex items-center justify-center'>
                    <div className=' flex flex-col gap-4 '>
                        <div className='flex items-center space-x-4 py-2 text-4xl mt-4'>
                            <h1 className='font-semibold'>Add Product</h1>
                        </div>
                        <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                            &#128196;
                            <input type="text"
                                value={products.title}
                                onChange={(e) => setProducts({ ...products, title: e.target.value })}
                                name='title'
                                className='flex items-center space-x-4 w-[30rem]  px-4 py-2'
                                placeholder='Product title'
                            />
                        </div>
                        <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                            &#128181;
                            <input type="text"
                                value={products.price}
                                onChange={(e) => setProducts({ ...products, price: e.target.value })}
                                name='price'
                                className='flex items-center space-x-4 w-[30rem]  px-4 py-2'
                                placeholder='Product price'
                            />
                        </div>
                        <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                            &#128248;
                            <input type="text"
                                value={products.imageUrl}
                                onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                                name='imageurl'
                                className='flex items-center space-x-4 w-[30rem]  px-4 py-2'
                                placeholder='Product imageUrl'
                            />
                        </div>
                        <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                            &#128194;
                            <input type="text"
                                value={products.category}
                                onChange={(e) => setProducts({ ...products, category: e.target.value })}
                                name='category'
                                className='flex items-center space-x-4 w-[30rem]  px-4 py-2'
                                placeholder='Product category'
                            />
                        </div>
                        <div className='flex items-center space-x-4 border-[1px] border-black py-2'>
                            <textarea cols="30" rows="10" name='title'
                            value={products.description}
                            onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className='flex items-center space-x-4 w-[30rem]  px-4 py-2'
                            placeholder='Product desc'>

                            </textarea>
                        </div>
                        <div className=' flex justify-center mb-5'>
                            <button
                            onClick={addProduct}
                                className='text-3xl bg-black w-fit py-3 px-8 text-white text-base rounded-md'>
                                Add Product
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct