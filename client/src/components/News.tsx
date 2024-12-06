import React from 'react'
import MianContainer from './MianContainer'
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <div className='py-10'>
            <MianContainer>
                {/* Title */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className='text-primary'>News</p>
                    <h2 className='md:text-5xl text-3xl'>What Our Customers Say</h2>
                    <p className='text-sm text-opacity-80 max-w-[400px]'>Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:</p>
                </div>

                {/* News */}
                <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 items-center pt-10 gap-5">
                    <div className="card">
                        <img className='mb-2' src="/images/n2.png" alt="" />
                        <div className="flex flex-col gap-3">
                            <p>24--6-24</p>
                            <p className='text-opacity-80'>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                            <Link to={""} className='text-secondary'>Read more ...</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img className='mb-2' src="/images/n3.png" alt="" />
                        <div className="flex flex-col gap-3">
                            <p>24--6-24</p>
                            <p className='text-opacity-80'>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                            <Link to={""} className='text-secondary'>Read more ...</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img className='mb-2 h-[150px] mx-auto' src="/images/mix.png" alt="" />
                        <div className="flex flex-col gap-3">
                            <p>24--6-24</p>
                            <p className='text-opacity-80'>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                            <Link to={""} className='text-secondary'>Read more ...</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img className='mb-2 h-[150px] mx-auto' src="/images/mix.png" alt="" />
                        <div className="flex flex-col gap-3">
                            <p>24--6-24</p>
                            <p className='text-opacity-80'>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                            <Link to={""} className='text-secondary'>Read more ...</Link>
                        </div>
                    </div>
                </div>
            </MianContainer>
        </div>
    )
}

export default News
