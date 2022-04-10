import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detailCategory } from '../api/products';
import { ProductType } from './types/product';

type Props = {}

const DetailCategory = (props: Props) => {
  const {id} = useParams();
  const [products,setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
      const getProducts = async () => {
          const {data} = await detailCategory(id);
          console.log(data);
          
          setProducts(data);
          

      }
      getProducts();
  },[])
  return (
    <div>
        <h3 className="title">Danh Mục Sản Phẩm</h3>
        <div className="products">
            {products?.map((item) => {
                return  <div className="product">
                <div className="img-order">
                    <div className="img-product">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="order">
                       <button><a href={`detail/${item.id}`}>XEM CHI TIẾT</a></button>
                     </div>
                </div>
              <h3>{item.name}</h3>
              <h2>{item.price} ₫</h2>
              
            </div>
            })}
        </div>
    </div>
  )
}
export default DetailCategory;