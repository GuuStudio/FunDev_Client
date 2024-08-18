import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./Home.module.scss";
import {  FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "~/services/Paging/Pagination";
import api from "~/ultils/Api/api";

function Home() {

  const [array, setArray] = useState([]);
  useEffect( () => {
    api.get('/api/Products')
      .then(res => setArray(res.data))
  }, [])
  return (
    <div className={clsx(Styles.container)}>
      <div className={clsx(Styles.home_introduct)}>
        <div className={clsx(Styles.home_introduct_form_black)}></div>
        <div className={clsx(Styles.home_introduct_container)}>
          <p className={clsx(Styles.home_introduct_name)}>DevFun</p>
          <h1 className={clsx(Styles.home_introduct_title)}>
            Welcome to <br /> our store!{" "}
          </h1>
          <p className={clsx(Styles.home_introduct_description)}>
            Website providing product buying and selling <br /> written by Phuc
            Phu!
          </p>
          <Link to="/shop">
            Let's go to the shop <FaArrowRightLong />{" "}
          </Link>
        </div>
      </div>
      <div className={clsx(Styles.home_product)}>
        <div className={clsx(Styles.home_product_container)}>
          <div className={clsx(Styles.home_product_header)}>
            <div className={clsx(Styles.home_product_header_title)}>
              Our Bestsellers
            </div>
            <p className={clsx(Styles.home_product_header_content)}>
              Looking for something specific? Shop by category to find your
              perfect <br /> piece of jewellery!
            </p>
          </div>
          <div >
              <Pagination items={array} itemsPerPage={5} displayNone={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
