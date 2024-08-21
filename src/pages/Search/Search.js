import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./Search.module.scss";
import Pagination from "~/components/Paging/Pagination";
import React, { useState, useEffect} from "react";
import api from "~/ultils/Api/api";
import { useParams } from "react-router-dom";

function Search() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const searchProducts = async () => {
      try {
        const res = await api.get(`/api/Products/search`, {
          params: { name: name },
        });
        if (res.status === 200) {
          setProducts(res.data);
          console.log(res.data)
        }
      } catch {
        console.log( "Cant search");
      }
    };
    searchProducts();
  }, [name]);
  
  return (
    <div className={clsx(Styles.shop_product)}>
      <div className={clsx(Styles.shop_product_container)}>
        <div className={clsx(Styles.shop_product_header)}>
          <div className={clsx(Styles.shop_product_header_title)}>
            Shop page
          </div>
        </div>
        <div className={clsx(Styles.shop_product_list)}>
          <Pagination items={products} itemsPerPage={10} displayNone={false} />
        </div>
      </div>
    </div>
  );
}

export default Search;
