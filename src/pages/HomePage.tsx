import React from 'react'
import { ProductType } from './types/product'
import NumberFormat from 'react-number-format';

type HomePageProps = {
    products: ProductType[]
}

const HomePage = ({products}: HomePageProps) => {
  return (
    <div>
        <h3 className="title">HÀNG MỚI VỀ</h3>
        <div className="products">
            {products?.map((item) => {
                return  <div className="product">
                <div className="img-order">
                    <div className="img-product">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="order">
                       <button><a href={`detail/${item._id}`}>XEM CHI TIẾT</a></button>
                     </div>
                </div>
              <h3>{item.name}</h3>
              <h2><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={''} /> ₫</h2>
              
            </div>
            })}
        </div>
    </div>
  )
}
export default HomePage