import React from 'react'
import NumberFormat from 'react-number-format'
type Props = {}

const CartPage = (props: Props) => {
  return (
    <div className="container">
        <table className='tablecart'>
           <thead> 
               <tr>
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Tiền</th>
            </tr>
            </thead>
            <tbody>
           {JSON.parse(localStorage.getItem('cart')).map((item,index) => {
             return  <tr key={index}>
             <td>{index+1}</td>
             <td>{item.name}</td>
             <td><img src={item.img} width="80x" height="50px" alt="" /></td>
             <td><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={''} /> ₫</td>
             <td>{item.quantity}</td>
             <td><NumberFormat value={item.price * item.quantity} displayType={'text'} thousandSeparator={true} prefix={''} /> ₫</td>
         </tr>
           })}
           
            </tbody>
        </table>
    </div>
  )
}

export default CartPage