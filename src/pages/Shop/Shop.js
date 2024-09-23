import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./Shop.module.scss";
import Pagination from "~/components/Paging/Pagination";
import React, { useState, useEffect} from "react";
import { fetchProducts } from "~/services";


function Shop() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchProducts();
      if (res.data) {
        setArray(res.data)
      }
    }
    fetch();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className={clsx(Styles.shop_product)}>
      <div className={clsx(Styles.shop_product_container)}>
        <div className={clsx(Styles.shop_product_header)}>
          <div className={clsx(Styles.shop_product_header_title)}>
            Shop page
          </div>
        </div>
        <div className={clsx(Styles.shop_product_list)}>
          <Pagination items={array} itemsPerPage={10} displayNone={false} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
