import Image from 'next/image'
import React from 'react'

const   Header = () => {
  return (
    <header>
        <div>Header
            <link href='/'>
            <Image 
            src="/assets/images/logo.svg" 
            alt="logo" 
            width={100} height={100} />
            
            </link>
        </div>
        
    </header>
  )
}

export default Header