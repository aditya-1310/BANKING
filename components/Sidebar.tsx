import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Sidebar = ({user}:SiderbarProps) => {
   
  return (
   <section className='sidebar'>
    <div className='sidebar-header'>
      <Link href='/'>
        <Image
        src="/icons/logo.svg"
        width={34} height={34}
        alt="logo"
        className='size-[24px]
        max-xl:size-14'/>
      <h1 className='sidebar-logo'>HONO</h1>
      </Link>
      {/* {sidebarLinks.map((item)=>{
        return (
            <Link href={}>

            </Link>
        )
      })} */}
    </div>
   </section>
  )
}

export default Sidebar