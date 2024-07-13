import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "../Home/Home.module.scss";
import img from "~/assets/images/Sale.png";
import natureImage from "~/assets/images/Nature.jpg";

function Shop() {
  return (
    <div className={clsx(Styles.shop)}>
      <div className={clsx(Styles.home_product)}>
        <div >
          <div className={clsx(Styles.home_product_header)}>
            <div className={clsx(Styles.home_product_header_title)}>
              Shop page
            </div>
          </div>
          <div className={clsx(Styles.home_product_list)}>
            <ul>
              <li className={clsx(Styles.home_product_list_item)}>
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img width="100%" src={img} alt="Product"></img>
                </div>
                <p className={clsx(Styles.home_product_list_item_price)}>
                  $300
                </p>
                <p className={clsx(Styles.home_product_list_item_name)}>Name</p>
                <p className={clsx(Styles.home_product_list_item_quantity)}>
                  Quantity
                </p>
              </li>
              <li className={clsx(Styles.home_product_list_item)}>
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img width="100%" src={natureImage} alt="Product"></img>
                </div>
                <p className={clsx(Styles.home_product_list_item_price)}>
                  $300
                </p>
                <p className={clsx(Styles.home_product_list_item_name)}>Name</p>
                <p className={clsx(Styles.home_product_list_item_quantity)}>
                  Quantity
                </p>
              </li>
              <li className={clsx(Styles.home_product_list_item)}>
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img width="100%" src={img} alt="Product"></img>
                </div>
                <p className={clsx(Styles.home_product_list_item_price)}>
                  $300
                </p>
                <p className={clsx(Styles.home_product_list_item_name)}>Name</p>
                <p className={clsx(Styles.home_product_list_item_quantity)}>
                  Quantity
                </p>
              </li>
              <li className={clsx(Styles.home_product_list_item)}>
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img width="100%" src={img} alt="Product"></img>
                </div>
                <p className={clsx(Styles.home_product_list_item_price)}>
                  $300
                </p>
                <p className={clsx(Styles.home_product_list_item_name)}>Name</p>
                <p className={clsx(Styles.home_product_list_item_quantity)}>
                  Quantity
                </p>
              </li>
              <li className={clsx(Styles.home_product_list_item)}>
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img width="100%" src={natureImage} alt="Product"></img>
                </div>
                <p className={clsx(Styles.home_product_list_item_price)}>
                  $300
                </p>
                <p className={clsx(Styles.home_product_list_item_name)}>Name</p>
                <p className={clsx(Styles.home_product_list_item_quantity)}>
                  Quantity
                </p>
              </li>
              <li className={clsx(Styles.home_product_list_item)}>
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img width="100%" src={img} alt="Product"></img>
                </div>
                <p className={clsx(Styles.home_product_list_item_price)}>
                  $300
                </p>
                <p className={clsx(Styles.home_product_list_item_name)}>Name</p>
                <p className={clsx(Styles.home_product_list_item_quantity)}>
                  Quantity
                </p>
              </li>
              <li className={clsx(Styles.home_product_list_item)}>
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img width="100%" src={img} alt="Product"></img>
                </div>
                <p className={clsx(Styles.home_product_list_item_price)}>
                  $300
                </p>
                <p className={clsx(Styles.home_product_list_item_name)}>Name</p>
                <p className={clsx(Styles.home_product_list_item_quantity)}>
                  Quantity
                </p>
              </li>
              <li className={clsx(Styles.home_product_list_item)}>
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img width="100%" src={img} alt="Product"></img>
                </div>
                <p className={clsx(Styles.home_product_list_item_price)}>
                  $300
                </p>
                <p className={clsx(Styles.home_product_list_item_name)}>Name</p>
                <p className={clsx(Styles.home_product_list_item_quantity)}>
                  Quantity
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
