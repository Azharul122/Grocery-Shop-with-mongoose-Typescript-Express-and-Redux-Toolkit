import React from 'react'
import MianContainer from '../MianContainer'

const About = () => {
    return (
        <div className='py-10'>
            <MianContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                    <div className="col-span-2  relative items-center text-center">
                        <img src="/images/product3.png" className='object-fill w-full' alt="" />
                        <div className="absolute right-0 md:right-20 bottom-0 p-4 border rounded-md backdrop-blur-md bg-[#ebebeb]">
                            <img className='md:w-full w-[100px]' src="/images/32.png" alt="" />
                            <p className='font-bold mb-4'>Mushroom</p>
                            <p className='opacity-70 mb-2 '>$2.9/kg</p>
                            <button className=' border-slate-300 border outline-none  w-full px-2 py-1'>Add to cart</button>
                        </div>
                    </div>
                    <div className="col-span-1 flex gap-2 flex-col">
                        <p className='text-primary'>About us</p>
                        <p className='text-3xl'>About Fresh Harvest</p>
                        <p>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
                        <button className='px-4 py-2 rounded-md text-secondary border-secondary border w-max'>Read More</button>
                    </div>

                   
                </div>
            </MianContainer>
        </div>
    )
}

export default About