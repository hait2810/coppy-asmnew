import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import { signin } from '../api/auth';
import "toastr/build/toastr.min.css";
import toastr from 'toastr';
type Props = {}
type FormInputs = {
    email:string,
    password:string | number
}
const SignIn = (props: Props) => {
    const {register,handleSubmit, formState:{errors}} = useForm<FormInputs>();
    const navigate = useNavigate();
    const onSubmit:SubmitHandler<FormInputs> = async data => {
  
        const {data: user} = await signin(data);
        
        localStorage.setItem('user', JSON.stringify(user));
      
        
        navigate("/");
        toastr.success("Đăng nhập thành công");
    }
  return (
    <div>
        
        <div className="login-link">
            <h5 className="l-homepage"><a href="./index.html">Trang chủ</a></h5><h5 className="d-account"><a href="">Tài khoản</a></h5>
        </div>
        <div className="account-content">
            <div className="acc-banner">
                <img src="./assets/banner/image 17.png" width="650px" alt="" />
            </div>
            <div className="acc-form">
                <h3>ĐĂNG Nhập</h3>
                <p>Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành
                    viên và nhận được những ưu đãi tốt hơn!
                    </p>
                <form  onSubmit={handleSubmit(onSubmit)}>
                  <div className="acc-emaill">
                    <label>Email *</label>
                    <input type="email" {...register('email', {required:true})} name="email" id="email" />
                    {errors.email && <span>Khong duoc de trong</span>}
                  </div>
                  <div className="acc-password">
                    <label>Password *</label>
                    <input type="password" {...register('password', {required:true})} name="password" id="password" />
                  </div>
                  <button>ĐĂNG NHẬP</button>
                  <a className="register" href="/signup">TẠO TÀI KHOẢN</a>
                </form>
            </div>
        </div>
    </div>
  )
}
export default SignIn;