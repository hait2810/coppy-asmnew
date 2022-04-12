import { useState, useEffect } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import HomePage from './pages/HomePage'
import { ProductType } from './pages/types/product'
import Detail from './pages/Detail'
import { add, editProduct, list, removeProduct } from './api/products'
import { CategoryType } from './pages/types/category'
import {useNavigate} from 'react-router-dom';
import DetailCategory from './pages/DetailCategory'
import Search from './pages/Search'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductAdd from './pages/ProductAdd'
import CategoryAdd from './pages/AddCategory'
import { addCate, removeCate } from './api/category'
import ProductList from './pages/ProductList'
import CategoryList from './pages/CategoryList'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import PrivateRouter from './components/PrivateRouter'
import EditProduct from './pages/EditProduct'
import "toastr/build/toastr.min.css";
import toastr from 'toastr';
import axios from 'axios'
import CartPage from './pages/CartPage'
function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [categorys, setCategorys] = useState<CategoryType[]>([])
  const navigate = useNavigate();
  useEffect(() => {
    const getProduct = async () => {
      const {data} = await axios.get("http://localhost:8000/api/products");
      setProducts(data);
      console.log(data);
      
    }
    getProduct();
  
 
  },[])
  const onAddcategory = async(cate:CategoryType) => {
    addCate(cate);
    setCategorys([...categorys,cate])
  }
  const onAddProduct = async(product:ProductType) => {
    add(product);
    setProducts([...products,product]);
    toastr.success("Thêm thành công");
    
  }
  const onRemoveItem = (_id:number) => {
    removeProduct(_id);
    setProducts(products.filter(item => item._id != _id))
    navigate("/admin/product");
    toastr.success("Xoá thành công");
  }
  const onRemoveCategory = (_id:number) => {
    removeCate(_id);
    setCategorys(categorys.filter(item => item._id != _id))
    toastr.success("Xoá thành công");
  }
  const onEditProduct = async (product:ProductType) => {
        const {data} = await editProduct(product);
        setProducts(products.map(item => item._id === data._id ? data:item))
        toastr.success("Sửa thành công");
        
   
    
  }
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage products={products} />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='detail/:id' element={<Detail />  } />
            <Route path='category/:id' element={<DetailCategory />} />
            <Route path="search/:key" element={<Search  />} />
          </Route>

          <Route path='admin' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route path='product'>
              <Route index element={<ProductList onRemove={onRemoveItem} />} />
              <Route path='add' element={<ProductAdd onAddProduct={onAddProduct}/>} />
              <Route path='edit/:id' element={<EditProduct onEditProduct={onEditProduct}/>}/>
             
            </Route>
            <Route path='category'>
              <Route index element={<CategoryList onRemove={onRemoveCategory} />} />
              <Route path='add' element={<CategoryAdd onAddcategory={onAddcategory}  />} />
            
            </Route>
          
          </Route>
        
        </Routes>
    </div>
  )
}

export default App
