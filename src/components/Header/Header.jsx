import React, { useState } from 'react'
import Logo from '@/assets/images/logo.svg'
import AvatarImage from '@/assets/images/image-avatar.png'
import CloseIcon from '../Icons/CloseIcon'
import MenuIcon from '../Icons/MenuIcon'
import CartIcon from '../Icons/CartIcon'

const Header = () => {

    const [toggled, setToggled] = useState(true);
    
    return (
        <header className='flex container items-center mx-auto px-4 py-8 gap-4 bg-gray-200'>
            <button className='md:hidden'>
                <MenuIcon />
            </button>
            <img src={Logo} alt="Logo Sneakers" className='mr-auto md:mr-0 mb-1' />
            <nav className='absolute top-0 left-0 h-full w-3/5 bg-slate-200  flex flex-col gap-y-5 items-start p-8 font-bold md:flex md:flex-row md:mr-auto md:gap-4 md:items-center md:static'>
                <button className='mb-12 md:hidden'>
                    <CloseIcon />
                </button>
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <div className='flex gap-4'>
                <button>
                    <CartIcon />
                </button>
                <img src={AvatarImage} alt="Avatar Image" className='w-10' />
            </div>
        </header>
    )
}

export default Header
