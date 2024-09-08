import { Section } from 'lucide-react'
import React from 'react'
import HeaderBox from '@/components/HeaderBox'

const HOME = () => {
  const loggedIn = {firstName :'Aditya'}
  return (
    <section className='home'>
     <div className='home-content'>
      <header className='home-header'>
        <HeaderBox
        type ="greeting"
        title = "welcome"
        user =  {loggedIn?.firstName || 'Guest'}
        subtext = "Welcome to your dashboard, Aditya , Manage your accounts here"
        />
      </header>
     </div>

    </section>
  )
}

export default HOME