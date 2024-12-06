import React, { useRef, useState } from 'react'
import MianContainer from '../components/MianContainer'
import { headerMenus } from '../constance'
import { Link } from 'react-router-dom'
import { LiaCarAltSolid, LiaHeart, LiaTimesSolid } from 'react-icons/lia'
import { ErrorOption, SubmitHandler, useForm } from 'react-hook-form'
import LoginModal from '../dialogs/dialog.login'
import RegisterModal from '../dialogs/dialog.register'
import { CiMenuFries } from 'react-icons/ci'
import { useFetchProductsQuery } from '../redux/features/product/productApi'
import { BsCart } from 'react-icons/bs'





const Header = () => {



    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const data = useFetchProductsQuery()
    console.log(data)

    const openLogin = () => {
        setIsLoginOpen(true);
        setIsRegisterOpen(false);
    };

    const openRegister = () => {
        setIsRegisterOpen(true);
        setIsLoginOpen(false);
    };

    const closeAllModals = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
    };


    // 
    const [show, setShow] = useState(false)


    return (
        <>
            <div className='py-5 mb-12 fixed to left-0 w-full z-30 overflow-hidden'>
                <MianContainer>
                    <div className="flex justify-between items-center flex-shrink-0">

                        {/* Logo & Titles */}
                        <div className="flex items-center gap-2 flex-shrink-0 ">
                            <svg width="31" height="30" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Logo">
                                    <path id="Vector" d="M26.2861 13.6797C26.2861 20.3459 20.8821 25.75 14.2158 25.75H2.14551V13.6797C2.14551 7.01343 7.54956 1.60938 14.2158 1.60938C20.8821 1.60938 26.2861 7.01343 26.2861 13.6797Z" fill="#749B3F" />
                                    <path id="Vector_2" d="M26.2866 37.8203C26.2866 31.1541 31.6907 25.75 38.3569 25.75H50.4272V37.8203C50.4272 44.4866 45.0232 49.8906 38.3569 49.8906C31.6907 49.8906 26.2866 44.4866 26.2866 37.8203Z" fill="#749B3F" />
                                    <path id="Vector_3" d="M2.14551 37.8203C2.14551 44.4866 7.54956 49.8906 14.2158 49.8906H26.2861V37.8203C26.2861 31.1541 20.8821 25.75 14.2158 25.75C7.54956 25.75 2.14551 31.1541 2.14551 37.8203Z" fill="#749B3F" />
                                    <path id="Vector_4" d="M50.4272 13.6797C50.4272 7.01343 45.0232 1.60938 38.3569 1.60938H26.2866V13.6797C26.2866 20.3459 31.6907 25.75 38.3569 25.75C45.0232 25.75 50.4272 20.3459 50.4272 13.6797Z" fill="#749B3F" />
                                </g>
                            </svg>
                            <h2 className=''>Fresh Harvests</h2>
                        </div>

                        {/* Items */}
                        <div className="md:flex items-center gap-10 hidden">
                            {
                                headerMenus.map(menu => (
                                    <Link key={menu.id} to={menu.link}>{menu.lable}</Link>
                                ))
                            }
                        </div>



                        {/* Cart and login */}
                        <div className="flex gap-2 items-center">
                            <div className="flex items-center gap-2">
                                <LiaHeart className='text-xl'/>
                                <p className='md:flex hidden'>Wish</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <BsCart className='text-xl'/>
                                <p className='md:flex hidden'>Cart</p>
                            </div>
                            <button className='border px-3 py-1 md:flex hidden' onClick={openLogin}>
                                Login
                            </button>

                            <CiMenuFries className="md:hidden className='text-xl'" onClick={() => setShow(true)} />



                            {/* Login dialog */}

                            <LoginModal
                                isOpen={isLoginOpen}
                                onClose={closeAllModals}
                                openRegister={openRegister}
                            />
                            <RegisterModal
                                isOpen={isRegisterOpen}
                                onClose={closeAllModals}
                                openLogin={openLogin}
                            />

                        </div>

                    </div>
                </MianContainer>
            </div>
            {/* Mobile menue */}
            {
                show && (
                    <div className="absolute px-5 py-3 overflow-hidden  z-40 left-0 top-0 w-[300px] md:w-[400px] bg-gray-300 h-screen">
                        <div className="flex flex-col gap-3">
                            <LiaTimesSolid className='' onClick={() => setShow(false)} />
                            {
                                headerMenus.map(menu => (
                                    <Link onClick={() => setShow(false)} key={menu.id} to={menu.link}>{menu.lable}</Link>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Header