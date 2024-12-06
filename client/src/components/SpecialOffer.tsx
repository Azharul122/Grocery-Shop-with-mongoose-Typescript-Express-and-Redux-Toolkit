import MianContainer from "./MianContainer"


const SpecialOffer = () => {
    return (
        <div className="py-10 ">
            <MianContainer>
                <div className="relative overflow-hidden">
                    <p className="text-primary mb-3">Special offer</p>
                    <p className=" md:text-6xl text-2xl mb-2 ">Seasonal Fruit Bundle</p>
                    <p className="mb-3">Discount up to <span className="text-secondary">80% OFF</span> </p>
                    <div className="flex gap-2 items-center flex-shrink-0">
                        <div className="border w-24 py-5 md:px-5 px-3 backdrop-blur-xl shadow-xl rounded-xl text-center">
                            <p className="mb-2 ">O3</p>
                            <p className="text-xs text-opacity-50">Days</p>
                        </div>
                        <div className="border w-24  py-5 md:px-5 px-3 backdrop-blur-xl shadow-xl rounded-xl text-center">
                            <p className="mb-2">O3</p>
                            <p className="text-xs text-opacity-50">Hours</p>
                        </div>
                        <div className="border w-24 py-5 md:px-5 px-3 backdrop-blur-xl shadow-xl rounded-xl text-center">
                            <p className="mb-2">O3</p>
                            <p className="text-xs text-opacity-50">Minutes</p>
                        </div>
                        <div className="border py-5 md:px-5 px-3 w-24 backdrop-blur-xl shadow-xl rounded-xl text-center">
                            <p className="mb-2">O3</p>
                            <p className="text-xs text-opacity-50">Seconds</p>
                        </div>
                    </div>

                    <div className="py-1 mt-4 px-4 rounded-full text-white bg-primary w-max">
                        <p className="text-white">CODE : <span className="text-secondary">FRUIT28</span></p>
                    </div>

                    {/* Absolute imnage BG */}
                    <div className="absolute top-0 w-[400px] object-fill right-0 md:flex hidden">
                        <img src="/images/product2.png" className="scale-110" alt="" />
                    </div>
                </div>
            </MianContainer>
        </div>
    )
}

export default SpecialOffer