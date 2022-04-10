import React, { useEffect, useState } from 'react'
import { list } from '../api/products';
import { ProductType } from './types/product'

type ProductListProps = {
    onRemove: (_id:number) => void
}

const ProductList = ({onRemove}: ProductListProps) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const listProduct = async () => {
            const {data} = await list();
            
            setProducts(data);
        }
        listProduct();
    },[])
  return (
    <div className="bg-warning">
        <br /> <br /> <br />
  <h2>DANH SÁCH SẢN PHẨM</h2>
  <p><a href="/admin/product/add">Thêm sản phẩm</a></p>            
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Tên sản phẩm</th>
        <th>Img</th>
        <th>Price</th>
        <th>Description</th>
        <th>Sửa</th>
        <th>Xoá</th>
      </tr>
    </thead>
    <tbody>
     {products?.map((item,index) => {
         return  <tr key={index}>
         <td>{index+1}</td>
         <td className='center'>{item.name}</td>
         <td className='center'><img src={item.img} width="80px" alt="" /></td>
         <td className='center'>{item.price}</td>
         <td>{item.description}</td>
         <td className='center'><a href={`/admin/product/edit/${item._id}`}>Sửa</a></td>
         <td className='center'><button className='bg-warning' onClick={() => onRemove(item._id)}>Remove</button></td>
       </tr>
     })}
     
    </tbody>
  </table>
</div>
  )
}
export default ProductList;