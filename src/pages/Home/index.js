import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./Home.module.scss";
import img from "~/assets/images/Sale.png";
import natureImage from "~/assets/images/Nature.jpg";

function Home() {
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
          <div className={clsx(Styles.home_product_list)}>
            <ul>
              <li className={clsx(Styles.home_product_list_item)}>
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img  
                    width="100%"
                    src={img}
                    alt="Product"
                  ></img>
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
                  <img  
                    width="100%"
                    src={natureImage}
                    alt="Product"
                  ></img>
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
                  <img  
                    width="100%"
                    src={img}
                    alt="Product"
                  ></img>
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
                  <img  
                    width="100%"
                    src={img}
                    alt="Product"
                  ></img>
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
                  <img  
                    width="100%"
                    src={natureImage}
                    alt="Product"
                  ></img>
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
                  <img  
                    width="100%"
                    src={img}
                    alt="Product"
                  ></img>
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
                  <img  
                    width="100%"
                    src={img}
                    alt="Product"
                  ></img>
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
                  <img  
                    width="100%"
                    src={img}
                    alt="Product"
                  ></img>
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

export default Home;
