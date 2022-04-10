import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form';
import { CategoryType } from './types/category';
import "toastr/build/toastr.min.css";
import toastr from "toastr"

type CategoryAddProps = {
  onAddcategory: (cate: CategoryType) => void
}
type FormInputs = {
  name:string,
}
const CategoryAdd = (props: CategoryAddProps) => {
  const {register, handleSubmit, formState:{errors}} = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = data => {
     props.onAddcategory(data);
     toastr.success("Thêm thành công");
     
  }
  return (
    <div>
        <div className="container">
  <h2 className='themsp'>Thêm danh mục</h2>
  
  <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
      <br /> <br /> <br />
      <label>Tên sản phẩm</label>
      <input type="text" className="form-control" {...register('name',{required:true})}/>
      {errors.name && <span>Khong duoc de trong !</span>}
    </div>
   <div className="form-group">
   <button  className="btn btn-default">Thêm danh mục</button>
   </div>

  </form>
</div>
    </div>
  )
}
export default CategoryAdd;