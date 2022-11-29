import React from 'react'
import Logo from '@/assets/images/logo.svg'
import AvatarImage from '@/assets/images/image-avatar.png'
import MenuIcon from '../Icons/MenuIcon'
import CartIcon from '../Icons/CartIcon'

const Header = () => {
    return (
        <header className='flex'>
            <button className='md:hidden'>
                <MenuIcon />
            </button>
            <img src={Logo} alt="Logo Sneakers" className='mr-auto md:mr-0' />
            <nav className='hidden md:block md:mr-auto'>
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
                <img src={AvatarImage} alt="Avatar Image" />
            </div>
        </header>
    )
}

export default Header