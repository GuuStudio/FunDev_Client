import clsx from "clsx";
import Styles from "./ProductDetail.module.scss";
import cosmectics from "../../assets/images/cosmetics.jpg";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import api from "~/Services/Api/api";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [img, setImg] = useState(cosmectics);
  useEffect( () => {
    const fetchdata = async() => {
      const response = await api.get(`https://localhost:7167/api/Products/${id}`)
      setProduct(response.data)
      console.log(response.data)
      if( response.data["imageUrl"] != null ) {
        setImg(response.data["imageUrl"])
      }
    }
    fetchdata();
  }, [id])
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
          <button className={clsx(Styles.product_info_buy)}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
