"use client"

import logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import Links from './Links'
import Button from './Button'
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from 'react';

const NavigationBar = () => {
  const links: string[] = [
    "Home",
    "About",
    "Contact",
    "Blog",
    "Careers",
  ]

  const [opened, setOpen] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between px-4 xs:px-6 sm:px-10 md:px-8 lg:px-16 xl:px-28 py-5 bg-white z-50 absolute w-screen'>
        <Image
          src={logo}
          alt='logo'
          className='cursor-pointer' />

        {/* this div below displays all the links on a larger screen size */}
        <div className='lg:flex gap-7 hidden '>
          {links.map(link => <Links text={link} key={link} />)}
        </div>

        {
          // this button holds the menu button to toggle the links on a smaller screen
          <button className='text-4xl text-dark-blue lg:hidden'
            onClick={() => setOpen(prev => !prev)}>
            {
              opened ?
                <IoIosClose /> :
                <IoIosMenu />
            }
          </button>
        }



        <Button navBar={true} />
      </nav>
      {
        opened &&
          <div className='absolute z-50 flex flex-col gap-y-5 p-8 bg-white rounded-md right-8 top-24 w-4/5 xs:w-80 items-center *:text-lg'>
            {links.map(link => <Links text={link} key={link} />)}
          </div>
      }
    </>
  )
}

export default NavigationBar
