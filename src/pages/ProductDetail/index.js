import clsx from "clsx";
import Styles from "./ProductDetail.module.scss";
import cosmectics from "../../assets/images/cosmetics.jpg";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect( () => {
    const fetchdata = async() => {
      const response = await fetch(`https://localhost:7167/api/Products/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`
        },
      });
      setProduct( await response.json())
    }
    fetchdata();
  }, [id])
  return (
    <div className={clsx(Styles.wrap)}>
      <div className={clsx(Styles.container)}>
        <div className={clsx(Styles.product_img)}>
          <img src={cosmectics} alt="" />
        </div>
        <div className={clsx(Styles.product_info)}>
          <div className={clsx(Styles.product_info_price)}>
          {product.price} Dollar
          </div>
          <div className={clsx(Styles.product_info_title)}>{product.productName}</div>
          <div className={clsx(Styles.product_info_quantity)}>{product.quantity} left in stock</div>
          <div className={clsx(Styles.product_info_description)}>{product.description}</div>
          <div className={clsx(Styles.product_info_size)}><b>Size:</b> XXL</div>
          <button className={clsx(Styles.product_info_buy)}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
