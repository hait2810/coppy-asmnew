import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
         <div className="footer-m">
            <div className="address">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs89WqVWHnGS9gVLYtJGri7Mj9EcSG6r9kVw&usqp=CAU" height="50px" alt=""/>
                <h5 className="name-company">
                    CÔNG TY CỔ PHẦN THỜI TRANG KOWIL VIỆT NAM
Hotline: 1900 8079
                </h5>
                <p><span className="vitri">VP Phía Bắc</span>: Tầng 17 tòa nhà Viwaseen, 48 Phố Tố Hữu,
                    Trung Văn, Nam Từ Liêm, Hà Nội.
                    </p>
            </div>
            <div className="f-right">
                <div className="connect">
                    <h5>
                        KẾT NỐI
                    </h5>
                    <div className="iconf">
                       <a href=""> <img src="http://localhost:3000/assets/icon/fb.png" alt=""/></a>
                        <a href=""><img src="http://localhost:3000/assets/icon/insta.png" alt=""/></a>
                        <a href=""><img src="http://localhost:3000/assets/icon/ytb.png" alt=""/></a>
                    </div>
                </div>
                <div className="connect">
                    <h5>
                        PHƯƠNG THỨC THANH TOÁN
                    </h5>
                    <div className="iconf">
                       <a href=""> <img src="http://localhost:3000/assets/icon/paypal.png" alt="" /></a>
                        <a href=""><img src="http://localhost:3000/assets/icon/visa.png" alt="" /></a>
                        <a href=""><img src="http://localhost:3000/assets/icon/349237.png" alt="" /></a>
                        <a href=""><img src="http://localhost:3000/assets/icon/money.png" alt="" /></a>
                    </div>
                </div>
                <div className="logo">
                    <img src="http://localhost:3000/assets/icon/image 16.png" alt="" />
                </div>

            </div>
       </div>
    </div>
  )
}
export default Footer;