import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./Home.module.scss";
import {  FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "~/Services/Pagination";

function Home() {

  const [array, setArray] = useState([]);
  useEffect( () => {
    fetch('https://localhost:7167/api/Products')
      .then(response => response.json())
      .then(json => setArray(json))
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
              {/* <ul className={clsx(Styles.home_product_list)}>
                <li className={clsx(Styles.home_product_list_item)}>
                  <div className={clsx(Styles.home_product_list_item_img)}>
                    <img width="100%" src={img} alt="Product"></img>
                  </div>
                  <div className={clsx(Styles.home_product_list_item_info)}>
                    <p className={clsx(Styles.home_product_list_item_price)}>
                      <FaDollarSign />
                      300
                    </p>
                    <p className={clsx(Styles.home_product_list_item_name)}>
                      My cosmetics beautifully
                    </p>
                    <p className={clsx(Styles.home_product_list_item_quantity)}>
                      300 left in stock
                    </p>
                  </div>
                </li>
                <li className={clsx(Styles.home_product_list_item)}>
                  <div className={clsx(Styles.home_product_list_item_img)}>
                    <img width="100%" src={img} alt="Product"></img>
                  </div>
                  <div className={clsx(Styles.home_product_list_item_info)}>
                    <p className={clsx(Styles.home_product_list_item_price)}>
                      <FaDollarSign />
                      300
                    </p>
                    <p className={clsx(Styles.home_product_list_item_name)}>
                      My cosmetics beautifully
                    </p>
                    <p className={clsx(Styles.home_product_list_item_quantity)}>
                      300 left in stock
                    </p>
                  </div>
                </li>
                <li className={clsx(Styles.home_product_list_item)}>
                  <div className={clsx(Styles.home_product_list_item_img)}>
                    <img width="100%" src={img} alt="Product"></img>
                  </div>
                  <div className={clsx(Styles.home_product_list_item_info)}>
                    <p className={clsx(Styles.home_product_list_item_price)}>
                      <FaDollarSign />
                      300
                    </p>
                    <p className={clsx(Styles.home_product_list_item_name)}>
                      My cosmetics beautifully
                    </p>
                    <p className={clsx(Styles.home_product_list_item_quantity)}>
                      300 left in stock
                    </p>
                  </div>
                </li>
                <li className={clsx(Styles.home_product_list_item)}>
                  <div className={clsx(Styles.home_product_list_item_img)}>
                    <img width="100%" src={img} alt="Product"></img>
                  </div>
                  <div className={clsx(Styles.home_product_list_item_info)}>
                    <p className={clsx(Styles.home_product_list_item_price)}>
                      <FaDollarSign />
                      300
                    </p>
                    <p className={clsx(Styles.home_product_list_item_name)}>
                      My cosmetics beautifully
                    </p>
                    <p className={clsx(Styles.home_product_list_item_quantity)}>
                      300 left in stock
                    </p>
                  </div>
                </li>
                <li className={clsx(Styles.home_product_list_item)}>
                  <div className={clsx(Styles.home_product_list_item_img)}>
                    <img width="100%" src={img} alt="Product"></img>
                  </div>
                  <div className={clsx(Styles.home_product_list_item_info)}>
                    <p className={clsx(Styles.home_product_list_item_price)}>
                      <FaDollarSign />
                      300
                    </p>
                    <p className={clsx(Styles.home_product_list_item_name)}>
                      My cosmetics beautifully
                    </p>
                    <p className={clsx(Styles.home_product_list_item_quantity)}>
                      300 left in stock
                    </p>
                  </div>
                </li>
                <li className={clsx(Styles.home_product_list_item)}>
                  <div className={clsx(Styles.home_product_list_item_img)}>
                    <img width="100%" src={img} alt="Product"></img>
                  </div>
                  <div className={clsx(Styles.home_product_list_item_info)}>
                    <p className={clsx(Styles.home_product_list_item_price)}>
                      <FaDollarSign />
                      300
                    </p>
                    <p className={clsx(Styles.home_product_list_item_name)}>
                      My cosmetics beautifully
                    </p>
                    <p className={clsx(Styles.home_product_list_item_quantity)}>
                      300 left in stock
                    </p>
                  </div>
                </li>
              </ul> */}
              <Pagination items={array} itemsPerPage={5} displayNone={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
