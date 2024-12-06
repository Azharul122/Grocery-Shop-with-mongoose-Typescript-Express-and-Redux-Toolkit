import React from 'react'
import MianContainer from './MianContainer'

const Testomonial = () => {
    return (
        <div className='py-10'>
            <MianContainer>
                {/*  */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className='text-primary'>Testimonial</p>
                    <h2 className='md:text-5xl text-3xl'>What Our Customers Say</h2>
                    <p className='text-sm text-opacity-80 max-w-[400px]'>Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:</p>
                </div>
                {/* Testomial Carousel */}
                <div className="grid md:grid-cols-3 grid-cols-1 items-center pt-14">
                    <div className="col-span-1">
                        <img className='h-[200px] rounded-full mx-auto' src="/images/products1.jpeg" alt="" />
                    </div>
                    <div className="col-span-2 bg-[#f4f6f6] p-3 rounded">
                        <p className='mb-10 '>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                        <p><span className='font-bold'>Jane Doe</span> - Professional chef</p>

                    </div>
                </div>
            </MianContainer>
        </div>
    )
}

export default Testomonial