import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import { signup } from '../api/auth';
import "toastr/build/toastr.min.css";
import toastr from 'toastr';
type Props = {}
type FormInputs = {
    email:string,
    password:string | number
}
const SignUp = (props: Props) => {
    const {register,handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();
    const onSubmit:SubmitHandler<FormInputs> = (data:any) => {
  
        signup(data);
        toastr.success("Đăng ký thành công");
        navigate("/signin");
        
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
                <h3>ĐĂNG KÝ</h3>
                <p>Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành
                    viên và nhận được những ưu đãi tốt hơn!
                    </p>
                <form  onSubmit={handleSubmit(onSubmit)}>
                  <div className="acc-emaill">
                    <label>Email *</label>
                    <input type="email" {...register('email', {required:true})} name="email" id="email" />
                  </div>
                  <div className="acc-password">
                    <label>Password *</label>
                    <input type="password" {...register('password', {required:true})} name="password" id="password" />
                  </div>
                  <button>TẠO TÀI KHOẢN</button>
                  <a className="register" href="/signin">ĐĂNG NHẬP</a>
                </form>
            </div>
        </div>
    </div>
  )
}
export default SignUp;