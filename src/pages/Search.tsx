import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchProduct } from '../api/products';
import { ProductType } from './types/product';

type Props = {}

const Search = (props: Props) => {
  const {key} = useParams();
  
  
  const [products,setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
        const {data} = await searchProduct(key);
        console.log(data);
        setProducts(data);
        
    }
    getProduct();
  },[])
  return (
    <div>
        <h3 className="title">Tìm kiếm sản phẩm</h3>
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
export default Search;