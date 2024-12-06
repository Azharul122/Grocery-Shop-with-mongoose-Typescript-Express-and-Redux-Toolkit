import React from 'react'
import MianContainer from './MianContainer'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className="relative grid grid-cols-3 h-screen md:h-screen  w-full overflow-x-hidden">
                {/* Main Columns */}
                <div className="col-span-2 bg-slate-200 h-full"></div>
                <div className="col-span-1 bg-primary text-white h-full"></div>

                {/* Absolute Section */}
                <div className="absolute top-0 left-0 pt-20 flex justify-center items-center mx-auto w-full z-20">
                    <MianContainer>
                        <div className="grid md:grid-cols-2 grid-cols-1">
                            {/* Left Content */}
                            <div className="col-span-1 md:order-1 order-2 md:mt-0 mt-10 md:w-auto w-full">
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-green-400">Welcome to Fresh Harvest</h4>
                                    <h1 className="md:text-6xl text-3xl">Fresh Fruits and Vegetables</h1>
                                    <p className="md:w-[400px] w-[96%]">
                                        At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables
                                    </p>
                                    <button className="bg-secondary py-2 px-3 rounded-lg text-white w-max">Shop now</button>
                                </div>
                                <div className="offerCard my-3 md:my-1 rounded-xl bg-[#EBEBEB] p-3 flex gap-2 items-center w-max md:ml-auto">
                                    <div className="flex flex-col gap-2">
                                        <p>Special Offer</p>
                                        <h3>Fresh Salad</h3>
                                        <p className="text-primary">
                                            Up to <span className="text-xl text-black/50">70% </span>off
                                        </p>
                                        <div className="px-3 py-1 rounded-full bg-primary text-white">
                                            Coupon: <span className="text-[#FAC714]">bangladesh2.0</span>
                                        </div>
                                    </div>
                                    <img src="/images/mix.png" alt="" className="size-20" />
                                </div>
                                {/* Apps */}
                                <p>Download App:</p>
                                <div className="flex gap-2 items-center">
                                    <Link to="">
                                        <img src="/images/googleplay.png" alt="Google Play" />
                                    </Link>
                                    <Link to="">
                                        <img src="/images/appstore.png" alt="App Store" />
                                    </Link>
                                </div>
                            </div>
                            {/* Right Image */}
                            <div className="col-span-1 h-full shrink-0 md:order-2 order-1">
                                <img className="overflow-hidden sm:h-full sm:w-full" src="/images/hero.png" alt="Hero" />
                            </div>
                        </div>
                    </MianContainer>
                </div>
            </div>

        </>

    )
}

export default Hero