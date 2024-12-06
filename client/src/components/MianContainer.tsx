import React, { ReactNode } from 'react'

interface props {
    children: React.ReactNode,
    className?: string
}
const MianContainer = ({children}:props) => {
    
    return (
        <div className='md:w-[90%] sm:w-[94%] w-[98%] mx-auto max-w-[1470px] '>
            {
                children
            }
        </div>
    )
}

export default MianContainer