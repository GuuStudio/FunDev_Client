import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./Shop.module.scss"
import Pagination from "~/Services/Pagination";
import React, { useState, useEffect } from "react";

function Shop() {
  const [array, setArray] = useState([]);
  useEffect( () => {
    fetch('https://localhost:7167/api/Products')
      .then(response => response.json())
      .then(json => setArray(json))
  }, [])
  return (
    <div className={clsx(Styles.shop)}>
      <div className={clsx(Styles.shop_product)}>
        <div className={clsx(Styles.shop_product_container)}>
          <div className={clsx(Styles.shop_product_header)}>
            <div className={clsx(Styles.shop_product_header_title)}>
              Shop page
            </div>
          </div>
          <div className={clsx(Styles.shop_product_list)}>
          <Pagination items={array} itemsPerPage={ 10} displayNone={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
