import React from 'react'
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    
    <div>
        <header>
            <Header/>
        </header>
        <Banner />
        <main> 
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}
export default WebsiteLayout;