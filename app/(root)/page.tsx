import { Section } from 'lucide-react'
import React from 'react'
// import HeaderBox  from '@/components/HeaderBox'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn ={firstName: 'Monalisha',lastname : 'Thakur',email:'lishamona7369@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting" 
          title="Welcome"
          user={loggedIn?.firstName ||'Guest'}
          subtext = "Access and manage your account and transcations efficiently."
          />
          <TotalBalanceBox
            accounts ={[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
           />
        </header>
        RECENT TRANSACTIONS
          
      </div>
      <RightSidebar user={loggedIn} transactions={[]}  banks = {[{currentBalance:123.50},{currentBalance:500}]}/> 
    </section>
  )
}

export default Home
