import logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import Links from './Links'
import Button from './Button'
import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  const links: Array<string> = [
    "About Us",
    "Careers",
    "Contact",
    "Support",
    "Blog",
    "Privacy Policy",
  ]

  return (
    <div className='bg-dark-blue max-md:gap-y-6 sm:px-10 md:px-8 lg:px-16 xl:px-28 py-12 flex max-md:flex-col justify-between items-center'>
      <div className='flex max-md:flex-col items-center gap-x-20 gap-y-6'>
        <main className='flex flex-col gap-y-3 md:gap-y-12 lg:gap-y-16'>
          <Link href="/">
            <Image
              src={logo}
              alt='logo'
              className='logo' />
          </Link>

          <ul className='flex items-center gap-3 text-white text-lg'>
            <li><AiFillFacebook /></li>
            <li><FaYoutube /></li>
            <li><BsTwitterX /></li>
            <li><FaPinterest /></li>
            <li><FaInstagram /></li>
          </ul>
        </main>

        <aside className='grid md:grid-cols-2 md:gap-x-10 lg:gap-x-24 gap-y-5 *:text-center'>
          {
            links.map(link => <Links text={link} key={link} footer={true} />)
          }
        </aside>
      </div>

      <div className='flex flex-col gap-y-4 text-gray-blue items-center md:items-end'>
        <Button />
        <p className='md:text-right text-center'>
          &copy; Easybank. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
