import React, { useEffect, useState } from 'react'
import { listCate } from '../api/category';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CategoryType } from '../pages/types/category';
import {useNavigate} from 'react-router-dom'

import "toastr/build/toastr.min.css";
import toastr from 'toastr';
type HeaderProps = {
   
}

const Header = (props: HeaderProps) => {
    const [categorys,setCategorys] = useState<CategoryType[]>([])
    
    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();
useEffect(() => {
    const getCategory = async () => {
        const {data} = await listCate();
        setCategorys(data);
      }
      getCategory();
     
      
},[])
const onSubmit:SubmitHandler = () => {
    localStorage.removeItem('user');
    navigate("/");
    toastr.success("Thoát thành công");
}
const onSearch:SubmitHandler = data => {
    navigate("/search/"+ data.key);
    location.reload();
    
}
  return (
    <div>
                <div className="header-top">
            <div className="header-contact">
                   <img src="./assets/icon/phone.png" width="20px" alt="" /> 
                   <h3>Hỗ trợ khách hàng: <a href="tel:0982641483">1900 6666</a></h3>
            </div>
        </div>
        <div className="header-menu">
            <div className="logo">
               <a href="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs89WqVWHnGS9gVLYtJGri7Mj9EcSG6r9kVw&usqp=CAU" height="50px" alt="" /></a>
            </div>
            <nav className="menu">
                <ul>
                    <li className="hot-ne"><a href="">SẢN PHẨM HOT</a>
                    
                   <ul className="logo-hot">
                       <li><img src="http://localhost:3000/assets/icon/image 7.png" alt="" /> </li>
                   </ul>
                    </li>
                    <li><a href="">Sản phẩm</a>
                     <ul className="subnav">
                      {categorys?.map((item)=> {
                          return    <li><a href={`/category/${item._id}`}>{item.name}</a></li>
                      })}
                     
                     </ul>
                    </li>
                    <li><a href="">Sale</a></li>
                    <li><a href="">Liên hệ</a></li>
                   
                </ul>
            </nav>
            <div className="left">
                <form onSubmit={handleSubmit(onSearch)}>
                    <div className="input">
                        <input type="text" {...register('key')} placeholder="Bạn cần gì..." />
                    </div>
                    <div className="icon">
                        <img src="http://localhost:3000/assets/icon/search.png" width="18px" alt="" />
                    </div>
                </form>
                <div className="users">
                {localStorage.getItem('user') ? <form action="" onSubmit={handleSubmit(onSubmit)} ><button className='btn_logout'>Đăng xuất</button></form> : <div className="logo"><a href="/signin"><img src="http://localhost:3000/assets/icon/user.png" width="30px" alt="" /></a></div>}
                    
                    
                </div>
                <div className="cart">
                    <a href="/cart"><img src="http://localhost:3000/assets/icon/bags.png" width="30px" alt="" /></a>
                </div>
            </div>

        </div>
     
    </div>
   
  )
}
export default Header