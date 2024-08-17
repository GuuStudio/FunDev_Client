import clsx from "clsx";
import Styles from "./ProductDetail.module.scss";
import cosmectics from "../../assets/images/cosmetics.jpg";
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import api, { apiFormData } from "~/ultils/Api/api";
import { FaCartPlus } from "react-icons/fa";
import { ShowNotificationContext } from "~/services/PublicContext";

function ProductDetail() {
  const ShowNotificationTab = useContext(ShowNotificationContext)
  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [img, setImg] = useState(cosmectics);
  const [quantityBuy, setQuantityBuy] = useState(1);
  const [ customerInfo , setCustomerInfo] = useState(undefined);

  useEffect( () => {
    const fetchdata = async() => {
      const response = await api.get(`https://localhost:7167/api/Products/${id}`)
      setProduct(response.data)

      if( response.data["imageUrl"] != null ) {
        setImg(response.data["imageUrl"])
      }

    }
    fetchdata();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    const userid = localStorage.getItem("userId")
    api
    .get(`api/Users/${userid}`)
    .then(response => response.data)
    .then(res => setCustomerInfo(res))
  }, [id])

  function handleQuantity(a) {
    if (a === 'Increase') {
      setQuantityBuy(quantityBuy + 1)
    } else {
      if (quantityBuy > 1) {
        setQuantityBuy(quantityBuy - 1)
      } else {
        setQuantityBuy(1)
      }
    }
  }
  const addToCart =  async( ) => {
    const formData = new FormData()
    formData.append('productId', product.id)
    formData.append('unitPrice', product.price)
    formData.append('quantity', quantityBuy)
    formData.append('customerId', localStorage.getItem("userId"))
    formData.append('storeId', product.userId)
    try {
      const response = await apiFormData.post('/api/CartItems', formData);
      ShowNotificationTab("Success", response.data)
      navigate('/cart')
    } catch (error) {
      if (error.response) {
        // Lỗi từ server với status code
        ShowNotificationTab( "Error" , error.response.data);
      } else if (error.request) {
        // Yêu cầu được gửi nhưng không nhận được phản hồi
        ShowNotificationTab(  "Error","Không nhận được phản hồi:" + error.request);
      } else {
        // Lỗi khi thiết lập request
        ShowNotificationTab( "Error","Lỗi:" + error.response.data);
      }
      // Xử lý lỗi cụ thể (ví dụ: hiển thị thông báo cho người dùng)
    }
  }
  const addOrder =  async( ) => {

    
    const formData = new FormData()
    formData.append('productId', product.id)
    formData.append('unitPrice', product.price)
    formData.append('quantity', quantityBuy)
    formData.append('customerId', localStorage.getItem("userId"))
    formData.append('storeId', product.userId)
    formData.append('phoneNumber', customerInfo.phoneNumber)
    formData.append('shippingAddress', customerInfo.addressHome)
    try {
      const response = await apiFormData.post('/api/Order', formData);
      ShowNotificationTab("Success", response.data)
      navigate('/ordering')
    } catch (error) {
      if (error.response) {
        // Lỗi từ server với status code
        ShowNotificationTab( "Error" , error.response.data);
      } else if (error.request) {
        // Yêu cầu được gửi nhưng không nhận được phản hồi
        ShowNotificationTab(  "Error","Không nhận được phản hồi:" + error.request);
      } else {
        // Lỗi khi thiết lập request
        ShowNotificationTab( "Error","Lỗi:" + error.response.data);
      }
      // Xử lý lỗi cụ thể (ví dụ: hiển thị thông báo cho người dùng)
    }
  }

  return (
    <div className={clsx(Styles.wrap)}>
      <div className={clsx(Styles.container)}>
        <div className={clsx(Styles.product_img)}>
          <img src={img} alt="" />
        </div>
        <div className={clsx(Styles.product_info)}>
          <div className={clsx(Styles.product_info_title)}>{product.productName}</div>
          <div className={clsx(Styles.product_info_quantity)}>{product.quantity} left in stock</div>
          <div className={clsx(Styles.product_info_description)}>{product.description}</div>
          <div className={clsx(Styles.product_info_size)}><b>Size:</b> XXL</div>
          <div className={clsx(Styles.product_info_price)}>
          {product.price} Dollar
          </div>
          <div className={clsx(Styles.quantity_buy)}>
            <b>Quantity:</b>
            <button onClick={() => handleQuantity("Decrease")}>-</button>
            <p>x{quantityBuy}</p>
            <button onClick={() => handleQuantity("Increase")}>+</button>
          </div>
            { (  product.userId !== localStorage.getItem("userId")) && (<div className={clsx(Styles.product_info_btn)}>
            <button onClick={addToCart}><FaCartPlus/> Add to cart</button>
            <button onClick={addOrder}>Buy</button>
          </div>)}

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
