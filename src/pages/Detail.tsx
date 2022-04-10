import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { detail } from '../api/products'
import {useForm, SubmitHandler} from 'react-hook-form';


type DetailProps = {

}
type ProductType = {
    img: string,
    name: string,
    price: number,
    description:string,
    id:number
}

const Detail = (props: DetailProps) => {
    const {id} = useParams();
    const [product,setProduct] = useState<ProductType>();
    const {handleSubmit} = useForm();
    useEffect(() => {
        const getProduct = async () => {
            const response = await detail(id);
           // const data = response.json();
            setProduct(response.data);
        }
        getProduct();
    },[])
    let cart = [];
    const onOrder:SubmitHandler = async () => {
            const {data} = await detail(id);
           
            
            const exitsProduct =  cart.find(item => item.id === data.id);
            if(exitsProduct) {
                exitsProduct.quantity++;
                localStorage.setItem("cart",JSON.stringify(cart));
            }
            
            
            if(localStorage.getItem("cart")){
                cart = JSON.parse(localStorage.getItem("cart"));
           }else{
               cart.push({...data,quantity:1});
               localStorage.setItem("cart",JSON.stringify(cart));
               return false;
           }
          
           if(!exitsProduct) {
            cart.push({...data,quantity:1});
            localStorage.setItem("cart",JSON.stringify(cart));
        }
       
           
            
        
            
            // if(!exitsProduct) {
            //     localStorage.setItem("cart", JSON.stringify({...data, quantity:1}));
            // }else{
            //     exitsProduct.quantity += data.quantity++;
            // }
            
            
            
    }
   return (
    <div>
         <div className="detail-content">
          <div className="detail-link">
              <h5 className="d-homepage"><a href={`/`}>Trang chủ</a></h5><h5 className="d-namecate"><a href={`${product?.id}`}> {product?.name}</a></h5>
          </div>
          <div className="d-products">
              <div className="img-product">
                  <img className="anhgoc" src={product?.img} alt="" />
              </div>
              <div className="img-products">
                  <img className="btn anh1 distance" src="./assets/images/1.jpg" alt=""/>
                  <img className="btn anh2 distance" src="./assets/images/2.jpg" alt=""/>
                  <img className="btn anh3 distance" src="./assets/images/4.jpg" alt=""/>
              </div>
              <div className="d-title-heading">
                    <h3 className="d-name-product distance">{product?.name}</h3>
                    <p className="code-product distance">MÃ SP: BLV0{product?.id}</p>
                    <h3 className="price distance">{product?.price} ₫</h3>
                   
                
                    <div className="d-order distance">
                      <form onSubmit={handleSubmit(onOrder)}>
                         
                          
                          <button >Thêm vào giỏ hàng</button>
                      </form>
                    </div>
                    <div className="description">
                        <h3>Mô tả:</h3>
                        <p className="distance">{product?.description}
                            </p>
                    </div>
                    <div className="policy">
                        <h4>→CHÍNH SÁCH CỘNG TÁC VIÊN</h4>
                        <ul>
                            <li>Liên tục tuyển CTV trên toàn quốc</li>
                            <li>Nhận giao hộ CTV trên toàn quốc không mất phí gói hàng</li>
                            <li>Các đơn hàng 1-2-3... Đôi đều đống giá ship là 35K</li>
                        </ul>
                    </div>
              </div>
          </div>
         
         
      </div>
    </div>
  )
}
export default Detail;