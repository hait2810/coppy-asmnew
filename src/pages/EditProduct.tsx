import React, { useEffect, useState } from 'react'
import { listCate } from '../api/category';
import { ProductType } from './types/product';
import { CategoryType } from './types/category';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useNavigate, useParams} from 'react-router-dom';
import { detail } from '../api/products';
type EditProductProps = {
  onEditProduct: (product:ProductType) => void
}

const EditProduct = (props: EditProductProps) => {
  const [categorys,setCategorys] = useState<CategoryType[]>([]);
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
    const getCategorys = async () => {
        const {data} = await listCate();
        setCategorys(data);
        
    }
    getCategorys();
    const getProduct = async () => {
        const {data} = await detail(id)
        console.log(data);
        
        reset(data);
    }
    getProduct();
  },[])
type FormInputs = {
  img: string,
  name: string,
  price: number,
  description: string,
  categoryId: number,
}
const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
const onSubmit:SubmitHandler<FormInputs> = dataproduct => {
  console.log(dataproduct);
  
   props.onEditProduct(dataproduct);
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
      {errors.name && <span>Khong duoc de trong</span> }
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
export default EditProduct;