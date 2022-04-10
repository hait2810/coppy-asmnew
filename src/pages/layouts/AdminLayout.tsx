import React from 'react'
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderAdmin from '../../components/HeaderAdmin';
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
       <header>   <HeaderAdmin />
       </header>
       
      <Outlet />
       
   
        <footer>
          
        </footer>
    </div>
  )
}
export default AdminLayout;