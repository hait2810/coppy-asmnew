import React, { useEffect, useState } from 'react'
import { listCate } from '../api/category';
import { CategoryType } from './types/category';


type CategoryListProps = {
    onRemove: (id:number) => void
}

const CategoryList = ({onRemove}: CategoryListProps) => {
    const [categorys, setCategorys] = useState<CategoryType[]>([]);
    useEffect(() => {
        const listCategory = async () => {
            const {data} = await listCate();
            console.log(data);
            setCategorys(data);
        }
        listCategory();
    },[])
  return (
    <div className="bg-warning">
        <br /> <br /> <br />
  <h2>DANH SÁCH DANH MỤC</h2>
  <p><a href="/admin/category/add">Thêm danh mục</a></p>            
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Tên danh mục</th>

        <th>Sửa</th>
        <th>Xoá</th>
      </tr>
    </thead>
    <tbody>
     {categorys?.map((item,index) => {
         return  <tr key={index}>
         <td>{index+1}</td>
         <td>{item.name}</td>
         <td><a href="">Sửa</a></td>
         <td><button className='bg-warning' onClick={() => onRemove(item.id)}>Xoá</button></td>
       </tr>
     })}
     
    </tbody>
  </table>
</div>
  )
}
export default CategoryList;