import React, { useEffect, useState } from 'react'
import { listCate } from '../api/category';
import { ProductType } from './types/product';
import { CategoryType } from './types/category';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
type ProductAddProps = {
  onAddProduct: (product:ProductType) => void
}

const ProductAdd = (props: ProductAddProps) => {
  const [categorys,setCategorys] = useState<CategoryType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getCategorys = async () => {
        const {data} = await listCate();
        setCategorys(data);
        
    }
    getCategorys();
  },[])
type FormInputs = {
  img: string,
  name: string,
  price: number,
  description: string,
  category: number,
}
const {register, handleSubmit, formState} = useForm<FormInputs>();
const onSubmit:SubmitHandler<FormInputs> = dataproduct => {
  console.log(dataproduct);
  
   props.onAddProduct(dataproduct);
   navigate("/admin/product");
}
  return (
    <div>
       <br /> <br /> <br />
        <div className="container">
  <h2 className='themsp'>Thêm sản phẩm</h2>
  
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
      <label>Tên sản phẩm</label>
      <input className="form-control" {...register('name', {required:true})} id="inputdefault" type="text"/>
    </div>
    <div className="form-group">
      <label>Ảnh</label>
      <input className="form-control" {...register('img', {required:true})} id="inputdefault" type="text"/>
    </div>
    <div className="form-group">
      <label>Giá</label>
      <input className="form-control" {...register('price', {required:true})} id="inputdefault" type="text"/>
    </div>
    <div className="form-group">
      <label>Mô tả</label>
      <input className="form-control" {...register('description', {required:true})} id="inputdefault" type="text"/>
    </div>
    <div className="form-group">
      <label>Chọn danh mục</label>
      <select {...register('category', {required:true})} className="form-control input-lg" id="sel2">
       {categorys?.map((item) => {
         return  <option value={item._id}>{item.name}</option>
       })}
       
      </select>
      
    </div>
   
    <div className="form-group">
    <button type="submit" className="btn btn-default">Submit</button>
    </div>

  </form>
</div>
    </div>
  )
}
export default ProductAdd;