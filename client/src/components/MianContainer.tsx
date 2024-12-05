import React, { ReactNode } from 'react'

const MianContainer = (children:ReactNode) => {
    return (
        <div className='md:w-[90%] sm:w-[94%] w-[98%] mx-auto'>
            {
                children
            }
        </div>
    )
}

export default MianContainer