import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'


function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png" layout='fill' objectFit='contain' objectPosition='left'/>
        </div>
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input type="text" placeholder='Star your search' className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-700'/>
            <MagnifyingGlassIcon className='hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>
        <div className='flex items-center space-x-4 justify-end text-gray-600'>
            <p>Become a host</p>
            <GlobeAltIcon className='h-6' />

            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <Bars3Icon className='h-6'/>
                <UserCircleIcon className='h-6'/>
            </div>
        </div>
    </header>
  )
}

export default Header